import { NextResponse } from "next/server"

export async function GET() {
  // Temporarily disabled - ElevenLabs widget will work without this
  return NextResponse.json({ error: "Signed URL endpoint temporarily disabled" }, { status: 501 })
}