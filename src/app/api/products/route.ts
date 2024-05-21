import { NextResponse } from 'next/server'
import prisma from '@/lib/db'

export async function GET() {
  try {
  } catch (error: unknown) {
    console.error(error)
  }
}

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { name, password, email } = await req.json()
    return NextResponse.json({})
  } catch (error: unknown) {
    console.error('Problem in User creation', error)
  }
}
