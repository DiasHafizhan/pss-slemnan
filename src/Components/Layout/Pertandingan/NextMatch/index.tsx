import Image from "next/image";
import Link from "next/link";

const NextMatch = () => {
  return (
    <div className="absolute top-0 px-10 pt-4 text-white bg-black/50 backdrop-opacitys-10 w-full h-[100%]">
      <span>
        <p className="text-lg font-semibold">Next Match</p>
      </span>
      <div className="flex flex-col justify-center items-center mt-8">
        <Image
          alt=""
          src="/logoLiga.png"
          width={900}
          height={900}
          className="w-[65px] mb-8"
        />
        <div className="flex gap-5 items-center">
          <div className="flex gap-3 items-center">
            <p className="text-2xl font-semibold">PSS SLEMAN</p>
            <Image
              alt=""
              src="/logoPss.png"
              width={900}
              height={900}
              className="w-[90px]"
            />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold">15:00</p>
            <p className="text-sm font-semibold">Sab 30 Apr</p>
            <p className="text-sm">Stadion Maguwoharjo</p>
          </div>
          <div className="flex gap-3 items-center">
            <Image
              alt=""
              src="/logoBali.png"
              width={900}
              height={900}
              className="w-[90px]"
            />
            <p className="text-2xl font-semibold">BALI UNITED</p>
          </div>
        </div>
        <span className="flex gap-3 items-center mt-10">
          <i className="bx bxs-coupon text-lg font-semibold" />
          <Link href="" className="text-lg font-semibold">
            Beli Ticket
          </Link>
        </span>
      </div>
    </div>
  );
};

export default NextMatch;
