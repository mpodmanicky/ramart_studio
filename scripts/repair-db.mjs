import { createClient } from '@libsql/client'
import fs from 'fs'

export function textToLexical(text) {
  const paragraphs = String(text || '').split('\n\n').filter(Boolean)
  return {
    root: {
      type: 'root',
      format: '',
      indent: 0,
      version: 1,
      direction: 'ltr',
      children: paragraphs.map((p) => ({
        type: 'paragraph',
        format: '',
        indent: 0,
        version: 1,
        direction: 'ltr',
        children: [
          {
            type: 'text',
            format: 0,
            text: p,
            version: 1,
          },
        ],
      })),
    },
  }
}

async function repairDatabase() {
  const dbUrl = process.env.DATABASE_URI || 'file:./payload.db'
  console.log(`🔍 Checking database at: ${dbUrl}`)

  // Extract file path if file URL
  const filePath = dbUrl.startsWith('file:') ? dbUrl.replace(/^file:/, '') : null
  if (filePath && !fs.existsSync(filePath)) {
    console.log(`ℹ Database file does not exist yet at ${filePath}. Skipping check.`)
    return
  }

  const client = createClient({ url: dbUrl })

  try {
    // Check if table 'posts' exists
    const tableCheck = await client.execute(
      "SELECT name FROM sqlite_master WHERE type='table' AND name='posts'"
    )

    if (tableCheck.rows.length === 0) {
      console.log('ℹ Table "posts" does not exist yet. Skipping check.')
      return
    }

    const postsResult = await client.execute('SELECT id, title, slug, content FROM posts')
    let fixedCount = 0

    for (const row of postsResult.rows) {
      const rawContent = row.content
      let needsFix = false

      if (!rawContent) {
        needsFix = true
      } else {
        try {
          const parsed = JSON.parse(rawContent)
          if (!parsed || typeof parsed !== 'object' || !parsed.root) {
            needsFix = true
          }
        } catch {
          needsFix = true
        }
      }

      if (needsFix) {
        console.log(`⚠️ Invalid JSON in post id ${row.id} ("${row.title}"). Repairing...`)
        const lexicalObj = textToLexical(rawContent)
        const jsonString = JSON.stringify(lexicalObj)

        await client.execute({
          sql: 'UPDATE posts SET content = ? WHERE id = ?',
          args: [jsonString, row.id],
        })
        fixedCount++
        console.log(`✓ Post id ${row.id} successfully repaired with Lexical format.`)
      }
    }

    if (fixedCount > 0) {
      console.log(`✅ Repaired ${fixedCount} post(s) with invalid content format.`)
    } else {
      console.log('✓ All posts have valid Lexical JSON content. No repair needed.')
    }
  } catch (error) {
    console.error('❌ Error during database repair check:', error)
  }
}

repairDatabase()
