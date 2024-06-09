import Image from "next/image";

const PaymentComponent = () => {
  return (
    <div className="">
      <div className="w-full p-5 rounded-t-lg border border-black flex items-center justify-between">
        <h1 className="text-lg">Payments By Xendit</h1>
        <div className="flex items-center gap-3">
          <Image
            src="/payment1.png"
            alt=""
            width={900}
            height={900}
            className="w-[40px]"
          />
          <Image
            src="/payment2.png"
            alt=""
            width={900}
            height={900}
            className="w-[40px]"
          />
          <Image
            src="/payment3.png"
            alt=""
            width={900}
            height={900}
            className="w-[40px]"
          />
          <Image
            src="/payment4.png"
            alt=""
            width={900}
            height={900}
            className="w-[40px]"
          />
        </div>
      </div>
      <div className="flex flex-col items-center bg-white-three py-9">
        <i className="bx bx-credit-card text-[15rem]" />
        <p className="max-w-[420px] text-center text-lg">After clicking “Pay now”, you will be redirected to Payments By Xendit to complete your purchase securely.</p>
      </div>
      <button className="mt-10 w-full bg-primary text-white py-3 rounded-lg">Pay now</button>
    </div>
  );
};

export default PaymentComponent;
