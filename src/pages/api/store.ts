import { db } from "@/lib/db/db"
import { NextApiRequest, NextApiResponse } from "next"


export default async function handler(req: NextApiRequest,
  res: NextApiResponse){
  const kategory = req.query.kategory as string

console.log(kategory)
  try {
    const product = await db.product.findMany({
      where: {
        kategory,
      },
      include:{
        productImg: true
      }
    })
    console.log(product)
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({
      message: error
    })
  }
}