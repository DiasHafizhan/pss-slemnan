import BeritaLayout from "./Berita";
import ChannelYt from "./ChannelYt";
import Carousel from "./Slider/Carousel";
import MatchLayout from "@/Components/Layout/Home/Match";
import Store from "./Store";
const HomeLayout = () => {
  return (
    <>
      <Carousel />
      <div className="container mt-4">
        <MatchLayout />
        <BeritaLayout />
      </div>
      <ChannelYt />
      <div className="container mt-4">
        <Store/>
      </div>
    </>
  );
};

export default HomeLayout;
