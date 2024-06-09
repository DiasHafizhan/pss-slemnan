import Image from "next/image";
import Link from "next/link";

type PropsTypes = {
  image: string;
  price: number;
  title: string;
};

const CardShop = (props: PropsTypes) => {
  const { image, price, title } = props;

  return (
    <div className="w-1/3 p-5">
      <div className="shadow-md p-2">
        <Image
          alt=""
          src={image}
          width={900}
          height={900}
          className="w-full mb-5"
        />
        <div className="max-w-[300px]">
          <p className="text-white-secondary text-base mb-2">{price}</p>
          <h2 className="text-base truncate text-primary font-semibold mb-3">
            {title}
          </h2>
        </div>
        <button className="w-full bg-primary text-white font-semibold mb-3 rounded-lg py-2">
          <Link href="/store/detail">Beli Sekarang</Link>
        </button>
      </div>
    </div>
  );
};

export default CardShop;
