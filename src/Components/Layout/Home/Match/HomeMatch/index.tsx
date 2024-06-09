import Image from "next/image";
import Link from "next/link";

type PropsTypes = {
  children?: React.ReactNode
  date: string;
  club: string;
  liga: string;
  status: string;
  homeClub?: string;
  awayClub?: string;
  homeSkor?: number;
  awaySkor?: number;
  linkText?: string;
  classname?: string
  icon?: string
};

const HomeMatch = (props: PropsTypes) => {
  const {
    date,
    club,
    liga,
    homeClub,
    awayClub,
    homeSkor,
    awaySkor,
    linkText,
    status,
    children,
    icon,
    classname
  } = props;
  return (
    <div className="min-w-[420px] border-r border-white text-white">
      <div className="px-2 py-5 flex justify-between">
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold">{date}</h3>
          <div className="flex items-center">
            <Image
              alt=""
              src={club}
              width={900}
              height={900}
              className="w-[85px]"
            />
            <div className="">{children}</div>
            <div className="">
              <div className="flex gap-4 mt-2 mb-3">
                <p className="text-lg font-semibold">{homeSkor}</p>
                <p className="text-lg font-semibold">{homeClub}</p>
              </div>
              <div className="flex gap-4 mt-2">
                <p className="text-lg font-semibold text-secondary">
                  {awaySkor}
                </p>
                <p className="text-lg font-semibold text-secondary">
                  {awayClub}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 ml-14">
          <h3 className="font-semibold">{status}</h3>
          <Image
            alt=""
            src={liga}
            width={900}
            height={900}
            className={`w-[85px] ${classname}`}
          />
        </div>
      </div>
      <div className="flex justify-center pb-5">
        <Link href="" className="flex gap-2 items-center">
          <i className={icon}></i>
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export default HomeMatch;
