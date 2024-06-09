import InnerCart from "@/Components/Layout/Shop/Cart/InnerCart";
import Image from "next/image";
import Link from "next/link";

const DetailStore = () => {
  return (
    <div className="mb-96">
      <div className="mt-10 container w-full flex items-center gap-28">
        <div className="w-1/2">
          <div className="w-[600px]">
            <Image alt="" src="/shirtH.png" width={900} height={900} />
            <div className="flex gap-4">
              <Image
                alt=""
                src="/shirtH.png"
                width={900}
                height={900}
                className="w-[80px]"
              />
              <Image
                alt=""
                src="/shirtH.png"
                width={900}
                height={900}
                className="w-[80px]"
              />
              <Image
                alt=""
                src="/shirtH.png"
                width={900}
                height={900}
                className="w-[80px]"
              />
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="max-w-[450px] mb-7">
            <h1 className="text-4xl font-semibold">
              PSS Sleman Jersey 2023 Authentic - Player - Home
            </h1>
          </div>
          <p className="text-lg">Rp. 345.000</p>
          <p className="text-base">Pengiriman dihitung saat checkout.</p>
          <div className="mt-10 mb-7">
            <p className="mb-7">Size</p>
            <Link
              href=""
              className="py-3 px-4 mr-5 border border-white-secondary"
            >
              S
            </Link>
            <Link
              href=""
              className="py-3 px-4 mr-5 border border-white-secondary"
            >
              M
            </Link>
            <Link
              href=""
              className="py-3 px-4 mr-5 border border-white-secondary"
            >
              L
            </Link>
            <Link
              href=""
              className="py-3 px-4 mr-5 border border-white-secondary"
            >
              XL
            </Link>
            <Link
              href=""
              className="py-3 px-4 mr-5 border border-white-secondary"
            >
              2XL
            </Link>
            <Link
              href=""
              className="py-3 px-4 mr-5 border border-white-secondary"
            >
              3XL
            </Link>
          </div>
          <div className="max-w-[450px] mt-16">
            <button className="w-full bg-primary text-white py-2 rounded-lg">
              Tambah ke Keranjang
            </button>
          </div>
        </div>
      </div>
      <div className="">

      </div>
      <InnerCart />
    </div>
  );
};

export default DetailStore;
