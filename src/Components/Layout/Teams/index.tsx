import CardTeams from "./CardTeams";

const TeamsLayout = () => {
  return (
    <div className="container mt-10">
      <div className="mb-16">
        <h1 className="text-2xl text-primary font-semibold mb-3">
          PENJAGA GAWANG
        </h1>
        <div className="w-full flex flex-wrap justify-between">
          <CardTeams
            image="/kiper2.png"
            no={1}
            player="Dimas Fani"
            flag="/flagIdn.png"
          />
          <CardTeams
            image="/kiper2.png"
            no={1}
            player="Dimas Fani"
            flag="/flagIdn.png"
          />
          <CardTeams
            image="/kiper2.png"
            no={1}
            player="Dimas Fani"
            flag="/flagIdn.png"
          />
        </div>
      </div>
      <div className="mb-16">
        <h1 className="text-2xl text-primary font-semibold mb-3">
          PEMAIN BELAKANG
        </h1>
        <div className="w-full flex flex-wrap justify-between">
          <CardTeams
            image="/pemain2.png"
            no={1}
            player="Dimas Fani"
            flag="/flagIdn.png"
          />
          <CardTeams
            image="/pemain2.png"
            no={1}
            player="Dimas Fani"
            flag="/flagIdn.png"
          />
          <CardTeams
            image="/pemain2.png"
            no={1}
            player="Dimas Fani"
            flag="/flagIdn.png"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamsLayout;
