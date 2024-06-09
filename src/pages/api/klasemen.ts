import { db } from "@/lib/db/db"
import { NextApiRequest, NextApiResponse } from "next"
import { NextResponse } from "next/server"

export default async function handler(req: NextApiRequest,
  res: NextApiResponse){
  
  try {
    const klasemen = await db.klasemen.findMany({
      orderBy: {
        poin: "desc",
      },
      include: {
        tim: true
      }
    })
    res.status(200).json(klasemen)
  } catch (error) {
    res.status(500).json({
      message: error
    })
  }
}