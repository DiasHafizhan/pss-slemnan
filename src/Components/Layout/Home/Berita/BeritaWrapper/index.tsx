import Image from "next/image";

type PropsTypes = {
  berita: string;
  date: string;
  title: string;
  desc?: string;
  classname?: string;
  font?: string;
};

const BeritaWrapper = (props: PropsTypes) => {
  const { berita, date, title, classname, font, desc } = props;

  return (
    <>
      <div
        className={`bg-white p-1 transition-all duration-200 hover:border-b-4 hover:border-primary rounded-lg cursor-pointer`}
      >
        <div className="">
          <Image
            alt=""
            src={berita}
            width={900}
            height={900}
            className="w-full rounded-lg"
          />
        </div>
        <div className={`text-primary ${classname}`}>
          <h3 className={`font-semibold mt-2 ${font}`}>{title}</h3>
          <p className="mt-2">{desc}</p>
          <span className="flex gap-2 items-center mt-8">
            <i className="bx bx-time"></i>
            <p>{date}</p>
          </span>
        </div>
      </div>

      {/* <div className="relative w-1/2 cursor-pointer">
        <Image
          alt=""
          src="/berita.png"
          width={900}
          height={900}
          className="w-full rounded-lg absolute"
        />
        <div className="absolute h-[336px] text-white pt-52 px-5">
          <div className="flex gap-3 items-center mb-3">
            <i className="bx bx-time text-sm" />
            <p className=" text-sm">12 April 2024</p>
          </div>
          <h3 className="text-base font-semibold">
            PELATIH KEPALA PSS JAGA MOTIVASI PEMAIN PADA PENUNDAAN KOMPETISI
          </h3>
        </div>
      </div> */}
    </>
  );
};

export default BeritaWrapper;
