"use client";

import Button from "@/Components/Layout/Ui/Button";
import Image from "next/image";

const Carousel = () => {
  return (
    <div className="relative flex h-[calc(100vh-70px)] w-full flex-col justify-center items-center">
      <div className="absolute w-full h-full">
        <Image
          alt=""
          src="/artikel.png"
          width={950}
          height={950}
          className="w-full h-full object-cover object-center fill"
        />
        <div className="absolute bottom-16 left-10 py-3 px-6">
          <div className="max-w-[700px]">
            <h2 className="text-3xl text-white font-semibold mb-5">
              PSS SLEMAN KERAHKAN UPAYA MAKSIMAL HADAPI MADURA UNITED FC
            </h2>
            <p className="text-base text-white mb-5">
              Kami akan memberikan daya upaya secara 100% pada pertandingan
              nanti.
            </p>
            <Button classname="text-white border border-white hover:bg-primary hover:border-primary transition duration-300">
              Selengkapnya
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
