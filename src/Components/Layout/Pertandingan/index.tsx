import Image from "next/image";
import Link from "next/link";
import NextMatch from "./NextMatch";
import HomeMatch from "../Home/Match/HomeMatch";
import JadwalMatch from "./JadwalMatch";

const PertandinganLayout = () => {
  return (
    <div className="match">
      <div className="w-full relative mb-16">
        <Image
          alt=""
          src="/stadion2.png"
          width={900}
          height={900}
          className="h-[450px] w-full"
        />
        <NextMatch />
      </div>
      <JadwalMatch
        location="A |"
        imageLiga="/logoLiga.png"
        time="19:00"
        date="15 Jum Apr"
        imageKlub="/logoPersija.png"
        homeSkor={1}
        homeClub="PERSIJA JAKARTA"
        awaySkor={5}
        awayClub="PSS SLEMAN"
      />
      <JadwalMatch
        location="H |"
        imageLiga="/logoLiga.png"
        time="19:00"
        date="15 Jum Apr"
        imageKlub="/logoPersija.png"
        homeSkor={1}
        homeClub="PERSIJA JAKARTA"
        awaySkor={5}
        awayClub="PSS SLEMAN"
      />
      
    </div>
  );
};

export default PertandinganLayout;
