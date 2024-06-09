import Image from "next/image";
import Statistik from "./statistik";

const Biografi = () => {
  return (
    <div className="container">
      <div className="flex items-center justify-between mt-20 mb-24">
        <div className="w-1/2 px-9">
          <h1 className="text-8xl text-primary text font-bold mb-8">1</h1>
          <div className="mb-7">
            <p className="text-5xl font-semibold mb-2">Dimas</p>
            <p>Fani</p>
            <h2 className="text-lg text-grey mt-4">Goalkeeper</h2>
          </div>
          <div className="min-w-[50px] gap-10 flex items-center">
            <div className="">
              <h3 className="text-grey pb-2">Date of birth</h3>
              <p className="font-semibold">4 April 1998</p>
            </div>
            <div className="">
              <h3 className="text-grey pb-2">Place of birth</h3>
              <p className="font-semibold">Solothurn (Switzerland)</p>
            </div>
            <div className="">
              <h3 className="text-grey pb-2">Nationality</h3>
              <Image
                alt=""
                src="/flagIdn.png"
                width={900}
                height={900}
                className="w-[20px]"
              />
            </div>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <Image
            alt=""
            src="/kiper2.png"
            width={900}
            height={900}
            className="w-[350px]"
          />
        </div>
      </div>
      <Statistik
        Appearances={4}
        Starts={9}
        MinsPlayed={2679}
        TCleanSheets="CleanSheets"
        CleanSheets={3}
        TGoalsconceded="Goals Conceded"
        Goalsconceded={9}
      />
    </div>
  );
};

export default Biografi;
