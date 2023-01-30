import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from 'db/prisma'

export default async function postViews(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const slug = req.query.slug?.toString() as string

    if (req.method === 'POST') {
      const newOrUpdatedViews = await prisma.views.upsert({
        where: { slug },
        create: {
          slug
        },
        update: {
          count: {
            increment: 1
          }
        }
      })
      return res.status(200).json({
        total: newOrUpdatedViews.count.toString()
      })
    }

    if (req.method === 'GET') {
      const views = await prisma.views.findUnique({
        where: {
          slug
        }
      })

      return res.status(200).json({
        total: views?.count.toString()
      })
    }
  } catch (e: any) {
    return res.status(500).json({ message: e.message })
  }
}
