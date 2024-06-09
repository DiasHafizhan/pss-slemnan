import Image from "next/image";

type PropsTypes = {
  location: string;
  imageLiga: string;
  time: string;
  date: string;
  imageKlub: string;
  homeClub: string;
  awayClub: string;
  homeSkor: number;
  awaySkor: number;
};

const JadwalMatch = (props: PropsTypes) => {
  const {
    location,
    imageLiga,
    time,
    date,
    imageKlub,
    homeClub,
    homeSkor,
    awayClub,
    awaySkor,
  } = props;
  return (
    <div className="w-full flex justify-between items-center text-black mb-20">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-5">
          <p className="text-xl text-white-secondary">{location}</p>
          <Image
            alt=""
            src={imageLiga}
            width={900}
            height={900}
            className="w-[65px]"
          />
          <div className="">
            <p className="text-xl font-semibold">{time}</p>
            <p className="text-base text-white-secondary">{date}</p>
          </div>
        </div>
        <div className="">
          <div className="flex gap-5">
            <div className="flex items-center gap-5">
              <Image
                alt=""
                src={imageKlub}
                width={900}
                height={900}
                className="w-[65px]"
              />
              <div className="">
                <div className="flex gap-4 ">
                  <p className=" font-semibold text-lg">{homeSkor}</p>
                  <p className=" font-semibold text-lg">{homeClub}</p>
                </div>
                <div className="flex gap-4">
                  <p className=" font-semibold text-secondary text-lg">{awaySkor}</p>
                  <p className=" font-semibold text-secondary text-lg">
                    {awayClub}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <button className="px-10 py-1 transition-all duration-150 border border-primary hover:bg-primary">
          <i className="bx bxs-coupon text-lg text-primary hover:text-white font-semibold" />
        </button>
      </div>
    </div>
  );
};

export default JadwalMatch;
