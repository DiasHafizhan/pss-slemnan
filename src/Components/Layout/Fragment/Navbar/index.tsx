import Image from "next/image";
import Link from "next/link";

const navList = [
  {
    title: "Berita",
    url: "/berita",
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
      <div className="w-full flex gap-5 py-1 px-5 md:px-10 bg-secondary text-white text-sm font-semibold">
        <p>
          <Link href="">Ticket</Link>
        </p>
        <p>
          <Link href="/store">Store</Link>
        </p>
      </div>
      <div className="py-2 px-8 md:px-14 w-full bg-primary flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logoPss.png"
            className="md:w-[65px] w-[45px]"
            width={500}
            height={500}
            alt=""
          />
        </Link>
        <ul className="flex gap-3 md:gap-7 font-semibold text-sm md:text-lg">
          {navList.map((data) => (
            <li className="text-white transition delay-150">
              <Link href={data.url}>{data.title}</Link>
            </li>
          ))}
        </ul>
        <div className="">
          <button className="border-2 border-white py-2 px-4 rounded-lg text-white">
            <Link href="/auth/login" className="flex items-center gap-3">
              <i className="bx bx-user" />
              Sign in
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
