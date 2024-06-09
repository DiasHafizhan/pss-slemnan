import Image from "next/image";
import PaymentComponent from "./payment";

const CheckoutLayout = () => {
  return (
    <div className="bg-white-three">
      <div className="container">
        <div className="mt-10 w-full p-10 bg-white ">
          <h1 className="text-xl text-primary mb-5">
            <i className="bx bxs-map" />
            Alamat Pengiriman
          </h1>
          <div className="flex items-center justify-between">
            <p>Dias Hafizhan</p>
            <p>
              Jalan Jengki Gang Sahabat No.6, RT.1/RW.2, Kebon, Makasar, KOTA
              JAKARTA TIMUR - MAKASAR, DKI JAKARTA, ID 13650
            </p>
            <button className="px-2 py-2 border border-primary rounded-lg">
              Ubah
            </button>
          </div>
        </div>
        <div className="mt-10 w-full p-10 bg-white">
          <table className="w-full p-5 text-left border-b-2 border-white-three">
            <thead>
              <tr>
                <th>
                  <h1>Produk Dipesan</h1>
                </th>
                <th>Harga satuan</th>
                <th>Jumlah</th>
                <th>Subtotal Produk</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="flex items-center gap-3">
                  <Image
                    src="/shirtA.png"
                    alt=""
                    width={900}
                    height={900}
                    className="w-[60px]"
                  />
                  <p className="text-base">
                    Jersey PSS Sleman 2023 Authentic - Away
                  </p>
                </td>
                <td>
                  <p>Rp. 635.000</p>
                </td>
                <td>
                  <p>1</p>
                </td>
                <td>
                  <p>Rp. 635.000</p>
                </td>
              </tr>
              <tr>
                <td className="flex items-center gap-3">
                  <Image
                    src="/shirtH.png"
                    alt=""
                    width={900}
                    height={900}
                    className="w-[60px]"
                  />
                  <p className="text-base">
                    Jersey PSS Sleman 2023 Authentic - Home
                  </p>
                </td>
                <td className="mt-10">
                  <p>Rp. 635.000</p>
                </td>
                <td>
                  <p>1</p>
                </td>
                <td>
                  <p>Rp. 635.000</p>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="w-full flex justify-end items-center gap-3 mt-5 pr-28">
            <p>Total pesanan (2 Produk):</p>
            <p className="text-primary font-semibold text-lg">Rp. 1.270.000</p>
          </div>
        </div>
        <div className="mt-10 w-full p-10 bg-white ">
          <h1 className="text-xl font-semibold text-primary mb-3">Payment</h1>
          <p className="text-white-secondary">All transactions are secure and encrypted.</p>
          <div className="mt-5">
            <PaymentComponent/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutLayout;
