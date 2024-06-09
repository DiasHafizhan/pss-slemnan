import Image from "next/image";

type PropsTypes = {
  image: string
  no: number
  player: string
  flag: string
}

const CardTeams = (props: PropsTypes) => {
  const {image, no, player, flag} = props

  return (
    <div className="w-[33%] relative cursor-pointer">
      <Image alt="" src={image} width={900} height={900} />
      <div className="absolute w-full h-[100%] top-0">
        <p className="px-2 pt-4 text-3xl">{no}</p>
        <div className="absolute bottom-0 w-full px-2 flex justify-between items-center bg-primary text-white">
          <h1 className="text-xl font-semibold">{player}</h1>
          <Image
            alt=""
            src={flag}
            className="w-[30px]"
            width={900}
            height={900}
          />
        </div>
      </div>
    </div>
  );
};

export default CardTeams;
