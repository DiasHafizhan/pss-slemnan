type TypesProps = {
  Appearances: number;
  Starts: number;
  MinsPlayed: number;
  CleanSheets?: number;
  Goalsconceded?: number;
  Goals?: number;
  Assists?: number;
  TGoals?: string;
  TAssists?: string;
  TCleanSheets?: string;
  TGoalsconceded?: string;
};

const Statistik = (props: TypesProps) => {
  const {
    Appearances,
    Starts,
    MinsPlayed,
    CleanSheets,
    Goalsconceded,
    Goals,
    Assists,
    TGoals,
    TAssists,
    TCleanSheets,
    TGoalsconceded,
  } = props;
  return (
    <div className="w-full bio rounded-lg mb-24 pt-5 pb-8 text-primary">
      <h2 className="text-center text-3xl font-semibold mb-10">
        Season Overview
      </h2>
      <div className="flex items-center w-full">
        <div className="flex flex-col items-center w-1/5">
          <h1 className="text-4xl font-semibold mb-3">{Appearances}</h1>
          <p className="font-semibold">Appearances</p>
        </div>
        <div className="flex flex-col items-center w-1/5">
          <h1 className="text-4xl font-semibold mb-3">{Starts}</h1>
          <p className="font-semibold">Starts</p>
        </div>
        <div className="flex flex-col items-center w-1/5">
          <h1 className="text-4xl font-semibold mb-3">{MinsPlayed}</h1>
          <p className="font-semibold">Mins Played</p>
        </div>
        <div className="flex flex-col items-center w-1/5">
          <h1 className="text-4xl font-semibold mb-3">
            {CleanSheets ? CleanSheets : Goals}
          </h1>
          <p className="font-semibold">
            {TCleanSheets ? TCleanSheets : TGoals}
          </p>
        </div>
        <div className="flex flex-col items-center w-1/5">
          <h1 className="text-4xl font-semibold mb-3">
            {Goalsconceded ? Goalsconceded : Assists}
          </h1>
          <p className="font-semibold">{TGoalsconceded ? TGoalsconceded : TAssists}</p>
        </div>
      </div>
    </div>
  );
};

export default Statistik;
