import NextMatch from "./NextMatch";

const MatchLayout = () => {
  return (
    <div className="bg-primary w-full flex">
      <NextMatch 
        date= "Last result - 19:00, Jum 5 Apr"
        club= "/logoBali.png"
        homeClub="BALI UNITED"
        homeSkor={1}
        awayClub="PSS SLEMAN"
        awaySkor={2}
        status="Away"
        liga="/logoLiga.png"
        icon="bx bx-football"
        linkText="Statistik"
      />
      <NextMatch
        date= "Next match - 15:00, Sab 12 Apr"
        club= "/logoPersija.png"
        status="Home"
        liga="/logoPiala.png"
        classname="max-w-[50px]"
      >
        <h1 className="text-lg font-semibold">
          PERSIJA JAKARTA
        </h1>
        <h1 className="text-lg font-semibold">
          Stadion Maguwoharjo
        </h1>
      </NextMatch>
      {/* <Table/> */}
    </div>
  );
};

export default MatchLayout;
