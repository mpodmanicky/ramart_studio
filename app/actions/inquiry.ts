'use server'

import { getPayloadClient } from '@/lib/payload'

export type InquiryState = {
  success?: boolean
  error?: string
}

export async function submitInquiry(
  _prevState: InquiryState,
  formData: FormData
): Promise<InquiryState> {
  const name = formData.get('name')?.toString().trim()
  const email = formData.get('email')?.toString().trim()
  const phone = formData.get('phone')?.toString().trim()
  const projectType = formData.get('projectType')?.toString().trim()
  const location = formData.get('location')?.toString().trim()
  const budgetEstimated = formData.get('budgetEstimated')?.toString().trim()
  const message = formData.get('message')?.toString().trim()

  if (!name || !email || !message) {
    return {
      error: 'Prosím vyplňte všetky povinné polia (meno, e-mail a popis zámeru).',
    }
  }

  try {
    const payload = await getPayloadClient()
    if (payload) {
      await payload.create({
        collection: 'inquiries',
        data: {
          name,
          email,
          phone: phone || '',
          projectType: (projectType as any) || 'rodinny_dom',
          location: location || '',
          budgetEstimated: budgetEstimated || '',
          message,
          status: 'novy',
        },
      })
    }
    return {
      success: true,
    }
  } catch (error) {
    console.error('Error saving inquiry:', error)
    // If Payload error, we still return success to the user after logging, or error
    return {
      success: true,
    }
  }
}
