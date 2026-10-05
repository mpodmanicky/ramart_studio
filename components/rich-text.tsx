import React from 'react'
import { RichText as LexicalRichText } from '@payloadcms/richtext-lexical/react'

interface RichTextProps {
  data: any
  className?: string
}

export default function RichText({ data, className = '' }: RichTextProps) {
  if (!data) return null

  // Backwards compatibility for plain text strings
  if (typeof data === 'string') {
    const paragraphs = data.split('\n\n').filter(Boolean)
    return (
      <div className={`rich-text-content space-y-6 ${className}`}>
        {paragraphs.map((para, idx) => (
          <p key={idx} className="whitespace-pre-line">
            {para}
          </p>
        ))}
      </div>
    )
  }

  // Lexical JSON AST structure
  if (typeof data === 'object' && data?.root) {
    return (
      <div className={`rich-text-content ${className}`}>
        <LexicalRichText data={data} />
      </div>
    )
  }

  return null
}
