import Image from "next/image";
import Button from "../../Ui/Button";

const ChannelYt = () => {
  return (
    <div className="bg-primary text-white w-full mb-16">
      <div className="container py-7">
        <h1 className="text-3xl font-semibold mb-5 mt-7">YouTube Channel</h1>
        <div className="w-full flex justify-between mb-8">
          <div className="w-[32%] mb-10">
            <Image
              alt=""
              src="/berita.png"
              width={900}
              height={900}
              className="w-full"
            />
          </div>
          <div className="w-[32%]">
            <Image
              alt=""
              src="/berita.png"
              width={900}
              height={900}
              className="w-full"
            />
          </div>
          <div className="w-[32%]">
            <Image
              alt=""
              src="/berita.png"
              width={900}
              height={900}
              className="w-full"
            />
          </div>
        </div>
        <div className="w-full flex justify-between items-center mb-5 px-14">
          <div className="">
            <h1 className="text-3xl font-semibold mb-3">PSS TV</h1>
            <p>Menonton dan mendengarkan pertandingan langsung</p>
          </div>
          <Button classname="border border-white hover:bg-white hover:text-primary transition duration-300">
            Subscribe now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChannelYt;
