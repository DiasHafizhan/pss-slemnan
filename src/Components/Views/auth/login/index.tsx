import InputComponnet from "@/Components/Layout/Ui/Input";
import Image from "next/image";
import Link from "next/link";


const LoginView = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <div className="min-w-[30%] p-20">
        <div className="text-center mx-auto flex flex-col justify-center items-center mb-10">
          <Image
            src="/logoPss.png"
            alt=""
            width={900}
            height={900}
            className="w-[90px] mb-8"
          />
          <h1 className="text-4xl text-primary font-semibold mb-5">Welcome!</h1>
          <p className="text-primary">Sign in or create your account:</p>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <InputComponnet label="Username" type="text" name="username" />
          <InputComponnet label="Password" type="password" name="password" />
          <button className="w-full bg-primary hover:bg-secondary-green text-white py-3 rounded-lg text-lg font-medium mb-8">
            Continue
          </button>
          <p>
            Don't have a account ? Sign up
            <Link href="" className="text-primary font-semibold">
              {" "}
              Here
            </Link>
          </p>
          <hr className="border-t border-primary my-4" />
          <div className="w-full">
            <button className="flex items-center justify-center gap-3 w-full bg-primary hover:bg-secondary-green text-white py-3 rounded-lg text-lg font-medium text-center">
              <i className="bx bxl-google" />
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginView;