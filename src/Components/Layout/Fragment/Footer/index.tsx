import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full py-10 bg-primary text-white">
      <div className="text-center">
        <h1 className="text-3xl font-semibold mb-10">Official Sponsor</h1>
        <div className="max-w-[800px] mx-auto flex flex-wrap gap-10 justify-center items-center mb-10">
          <Image
            alt=""
            src="/sponsor1.png"
            width={900}
            height={900}
            className="w-[100px]"
          />
          <Image
            alt=""
            src="/sponsor2.png"
            width={900}
            height={900}
            className="w-[180px]"
          />
          <Image
            alt=""
            src="/sponsor3.png"
            width={900}
            height={900}
            className="w-[200px]"
          />
          <Image
            alt=""
            src="/sponsor4.png"
            width={900}
            height={900}
            className="w-[200px]"
          />
          <Image
            alt=""
            src="/sponsor5.png"
            width={900}
            height={900}
            className="w-[200px]"
          />
          <Image
            alt=""
            src="/sponsor6.png"
            width={900}
            height={900}
            className="w-[200px]"
          />
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-3xl font-semibold mb-10">Official Partner</h1>
        <div className="max-w-[800px] mx-auto flex flex-wrap gap-10 justify-center items-center mb-10">
          <Image
            alt=""
            src="/partner1.png"
            width={900}
            height={900}
            className="w-[100px]"
          />
          <Image
            alt=""
            src="/partner2.png"
            width={900}
            height={900}
            className="w-[180px]"
          />
          <Image
            alt=""
            src="/partner3.png"
            width={900}
            height={900}
            className="w-[180px]"
          />
        </div>
      </div>
      <div className="container flex justify-between items-center">
        <div className="flex gap-3">
          <Link href=""><i className='bx bxl-facebook-square text-xl' /></Link>
          <Link href=""><i className='bx bxl-twitter text-xl'/></Link>
          <Link href=""><i className='bx bxl-youtube text-xl' /></Link>
        </div>
        <p>© 2023 PSS Sleman. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
