import { NextResponse } from 'next/server'
import { prisma } from 'db/prisma'

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params

  try {
    const views = await prisma.views.findUnique({
      where: {
        slug
      }
    })
    return NextResponse.json(
      {
        total: views?.count.toString()
      },
      { status: 200 }
    )
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 500 })
  }
}

export async function POST(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params
  try {
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
    return NextResponse.json(
      {
        total: newOrUpdatedViews.count.toString()
      },
      { status: 200 }
    )
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 500 })
  }
}
