import Image from "next/image";
import Link from "next/link";

type PropsTypes = {
  image: string;
  title: string;
};

const CartShop = (props: PropsTypes) => {
  const { image, title } = props;

  return (
    <div className="w-1/4 text-primary font-semibold">
      <Image alt="" src={image} width={900} height={900} className="w-full" />
      <div className="mt-5 text-center">
        <p>{title}</p>
        <div className="flex items-center gap-2 justify-center">
          <div className="hover:border-b hover:border-primary">
            <i className="bx bxs-t-shirt" />
            <Link href="">
              SHOP NOW
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartShop;
