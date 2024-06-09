import PertandinganLayout from "@/Components/Layout/Pertandingan";
import { useRouter } from "next/router";
import Tab from "./tab";

const PertandinganPage = () => {
  return (
    <div className="container mb-96">
      <Tab/>
      <PertandinganLayout />
    </div>
  );
};

export default PertandinganPage;
