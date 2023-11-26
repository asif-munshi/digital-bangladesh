import dotenv from 'dotenv'
import path from 'path'
import payload, { Payload } from 'payload'
import type { InitOptions } from 'payload/config'
import nodemailer from 'nodemailer'

dotenv.config({
  path: path.resolve(__dirname, './.env'),
})

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  secure: true,
  port: 465,
  auth: {
    user: 'asif35-2872@diu.edu.bd',
    pass: process.env.GMAIL_API_KEY,
  },
  tls: {
    rejectUnauthorized: false,
  },
})

let cached = (global as any).payload

if (!cached) {
  cached = (global as any).payload = {
    client: null,
    promise: null,
  }
}

interface Args {
  initOptions?: Partial<InitOptions>
}

export const getPayloadClient = async ({
  initOptions,
}: Args = {}): Promise<Payload> => {
  if (!process.env.PAYLOAD_SECRET) {
    throw new Error('PAYLOAD_SECRET is missing')
  }

  if (cached.client) {
    return cached.client
  }

  if (!cached.promise) {
    cached.promise = payload.init({
      email: {
        transport: transporter,
        fromAddress: 'asif35-2872@diu.edu.bd',
        fromName: 'DigitalBangladesh',
      },
      secret: process.env.PAYLOAD_SECRET,
      local: initOptions?.express ? false : true,
      ...(initOptions || {}),
    })
  }

  try {
    cached.client = await cached.promise
  } catch (error: unknown) {
    cached.promise = null
    throw error
  }

  return cached.client
}
