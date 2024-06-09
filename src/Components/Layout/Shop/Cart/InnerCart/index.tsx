import Link from "next/link";

const InnerCart = () => {
  return (
    <div className="w-full fixed z-50 bottom-0">
      <div className="w-full bg-white py-8">
        <div className="flex items-center justify-center gap-5">
          <div className="">
            <Link href="/store/checkout">2 items</Link>
          </div>
          <div className="">
            <p>Rp. 2.500.000</p>
          </div>
          <div className="">
            <button className="px-8 py-2 bg-primary hover:bg-white hover:text-primary hover: border hover:border-primary text-white rounded-full transition-all duration-500 font-medium">
              <Link href="/store/cart">Check Out</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerCart;
