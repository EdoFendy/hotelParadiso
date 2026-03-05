import { NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"

const DATA_DIR = path.join(process.cwd(), "data")
const NEWSLETTER_FILE = path.join(DATA_DIR, "newsletter.json")

interface NewsletterEntry {
  email: string
  subscribedAt: string
  ip?: string
}

async function ensureDataDir() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true })
  } catch {
    // Directory already exists
  }
}

async function readNewsletter(): Promise<NewsletterEntry[]> {
  try {
    const content = await fs.readFile(NEWSLETTER_FILE, "utf-8")
    return JSON.parse(content)
  } catch {
    return []
  }
}

async function writeNewsletter(entries: NewsletterEntry[]) {
  await ensureDataDir()
  await fs.writeFile(NEWSLETTER_FILE, JSON.stringify(entries, null, 2), "utf-8")
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email non valida" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Formato email non valido" }, { status: 400 })
    }

    const entries = await readNewsletter()

    const alreadyExists = entries.some(
      (entry) => entry.email.toLowerCase() === email.toLowerCase()
    )

    if (alreadyExists) {
      return NextResponse.json({ success: true, message: "Gia iscritto" })
    }

    const newEntry: NewsletterEntry = {
      email: email.toLowerCase().trim(),
      subscribedAt: new Date().toISOString(),
    }

    entries.push(newEntry)
    await writeNewsletter(entries)

    return NextResponse.json({ success: true, message: "Iscrizione completata" })
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return NextResponse.json({ error: "Errore interno del server" }, { status: 500 })
  }
}
