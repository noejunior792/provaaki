import axios from 'axios'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const bodySchema = z.object({
  category: z.string(),
  rating: z.string().regex(/^[1-5]$/),  
  feedback: z.string(),
  email: z.string().email().optional(),
})

const WEBHOOK_URL = process.env.WEBHOOK_URL!

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { category, rating, feedback, email } = bodySchema.parse(body)

    const messageData = {
      embeds: [
        {
          title: 'Feedback Recebido',
          color: 0x4983f5,
          fields: [
            {
              name: 'Categoria',
              value: category,
              inline: true,
            },
            {
              name: 'Avaliação',
              value: rating,
              inline: true,
            },
            {
              name: 'Feedback',
              value: feedback,
            },
            ...(email ? [
              {
                name: 'E-mail',
                value: email,
                inline: true,
              }
            ] : []),
          ],
        },
      ],
    }

    await axios.post(WEBHOOK_URL, messageData)

    return NextResponse.json({
      message: 'Feedback enviado com sucesso!',
    })
  } catch (error) {
    console.log(error)
    return NextResponse.error()
  }
}