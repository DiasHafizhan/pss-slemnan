import BeritaLayout from "./Berita";
import ChannelYt from "./ChannelYt";
import MatchLayout from "@/Components/Layout/Home/Match";
import Store from "./Store";
import SliderComponent from "./Slider";
const HomeLayout = () => {
  return (
    <>
      <SliderComponent />
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
