import Button from "@/Components/Layout/Ui/Button";
import Link from "next/link";
import { useRouter } from "next/router";

const Tab = () => {
  const router = useRouter()
  return (
    <div className="flex gap-4 justify-center mt-10 mb-8">
      <Button
        classname={`${
          router.pathname == "/pertandingan"
            ? "bg-primary text-white"
            : "text-primary"
        } active:bg-primary active:text-white`}
      >
        <Link href="/pertandingan">Jadwal & Hasil</Link>
      </Button>
      <Button
        classname={`${
          router.pathname == "/pertandingan/klasemen"
            ? "bg-primary text-white"
            : "text-primary"
        } active:bg-primary active:text-white`}
      >
        <Link href="/pertandingan/klasemen">Klasemen</Link>
      </Button>
    </div>
  );
};

export default Tab
