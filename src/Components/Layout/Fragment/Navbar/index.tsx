import Image from "next/image";
import Link from "next/link";

const navList = [
  {
    title: "Berita",
    url: "/bertita",
  },
  {
    title: "Pertandingan",
    url: "/pertandingan",
  },
  {
    title: "Tim",
    url: "/tim",
  },
];

const Navbar = () => {
  return (
    <>
      <div className="w-full flex gap-5 py-1 px-5 md:px-10 bg-primary text-white text-sm font-semibold">
        <p>
          <Link href="">Ticket</Link>
        </p>
        <p>
          <Link href="">Store</Link>
        </p>
      </div>
      <div className="py-2 px-8 md:px-14 w-full bg-secondary flex justify-between items-center">
        <Image
          src="/logoPss.png"
          className="md:w-[65px] w-[45px]"
          width={500}
          height={500}
          alt=""
        />
        <ul className="flex gap-3 md:gap-7 font-semibold text-sm md:text-lg">
          {navList.map((data) => (
            <li className="text-white hover:text-primary transition delay-150">
              <Link href={data.url}>{data.title}</Link>
            </li>
          ))}
        </ul>
        <ul className="flex gap-3 md:gap-5">
          <li className="text-sm md:text-2xl">
            <i className="bx bx-menu"></i>
          </li>
          <li className="text-sm md:text-2xl">
            <i className="bx bx-user-circle"></i>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
