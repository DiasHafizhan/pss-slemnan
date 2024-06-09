import Image from "next/image";
import Link from "next/link";

const CartLayout = () => {
  return (
    <div className="container mb-28">
      <h1 className="mt-20 mb-14 text-4xl font-semibold text-primary text-center te">
        CART
      </h1>

      <div className="">
        <table className="w-full">
          <thead className="pb-20 border-b border-b-black">
            <tr className="text-lg">
              <th className="text-center">Item</th>
              <th className="text-left">Price</th>
              <th className="text-left">Quantity</th>
              <th className="text-left">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="flex items-center gap-2 mt-6">
                <Image
                  src="/shirtA.png"
                  alt=""
                  width={900}
                  height={900}
                  className="w-[100px]"
                />
                <div className="flex flex-col text-[17px]">
                  <p>Jersey PSS Sleman 2023 Authentic - Away</p>
                  <p>L</p>
                </div>
              </td>
              <td>
                <p>Rp. 389.000</p>
              </td>
              <td>
                <p>2</p>
              </td>
              <td>
                <p>Rp. 900.000</p>
              </td>
            </tr>
            <tr>
              <td className="flex items-center gap-2 my-6">
                <Image
                  src="/shirtH.png"
                  alt=""
                  width={900}
                  height={900}
                  className="w-[100px]"
                />
                <div className="flex flex-col text-[17px]">
                  <p>Jersey PSS Sleman 2023 Authentic - Away</p>
                  <p>L</p>
                </div>
              </td>
              <td>
                <p>Rp. 389.000</p>
              </td>
              <td>
                <p>2</p>
              </td>
              <td>
                <p>Rp. 900.000</p>
              </td>
            </tr>
          </tbody>
          <tfoot className="border-t border-t-black">
            <tr className="w-full flex justify-end items-center mt-5">
              <td className="text-center">
                <h1 className="text-xl font-semibold pb-4">
                  SUBTOTAL <span className="text-primary">RP. 2.000.000</span>
                </h1>
                <p className="text-sm pb-4">
                  Shipping, taxes, and discount codes calculated at checkout.
                </p>
                <button className="px-8 py-2 bg-primary hover:bg-white hover:text-primary hover: border hover:border-primary text-white rounded-full transition-all duration-500 font-medium">
                  <Link href="/store/checkout">Check Out</Link>
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default CartLayout;
