"use client"

import ShopLayout from "@/Components/Layout/Shop";
import InnerCart from "@/Components/Layout/Shop/Cart/InnerCart";
import { Product, ProductImg } from "@prisma/client";
import Image from "next/image";
import { useEffect, useState } from "react";

export type productWithImage = Product & {productImg: ProductImg[]}

const StorePage = () => {
  const [jerseyProduct, setJerseyProduct] = useState<productWithImage[]|null>(null)
  const [teamwear, setTeamwear] = useState<productWithImage[]|null>(null)

  useEffect(() =>{
    const fectJersey = async () =>{
      const response = await fetch('/api/store?kategory=Jersey')
      const data = await response.json()
      setJerseyProduct(data)
    }
    const fectTeamwear = async () =>{
      const response = await fetch('/api/store?kategory=Teamwear')
      const data = await response.json()
      setTeamwear(data)
    }
    fectJersey()
    fectTeamwear()
    console.log(teamwear, jerseyProduct)
  }, [])

  return (
    <div className="">
      <Image
        alt=""
        src="/shop.png"
        width={900}
        height={900}
        className="w-full h-[680px] mb-10"
      />

      <ShopLayout jerseyProduct={jerseyProduct} teamwear={teamwear} />

      <InnerCart />
    </div>
  );
};

export default StorePage;
