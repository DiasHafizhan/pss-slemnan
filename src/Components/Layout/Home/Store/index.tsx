import Button from "../../Ui/Button";
import CartShop from "./Cart";

const Store = () => {
  return (
    <div className="mb-16">
      <h1 className="text-3xl text-primary font-semibold mb-5">
        Official Club Store
      </h1>
      <div className="flex justify-between">
        <CartShop image="/shirtH.png" title="23/24 HOME KIT" />
        <CartShop image="/shirtA.png" title="23/24 AWAY KIT" />
        <CartShop image="/shirtT.png" title="23/24 THIRD KIT" />
      </div>
      <div className="flex justify-center mt-14">
        <Button classname="border border-primary hover:bg-primary hover:text-white transition-all duration-300">
          Kunjungi Toko
        </Button>
      </div>
    </div>
  );
};

export default Store;
