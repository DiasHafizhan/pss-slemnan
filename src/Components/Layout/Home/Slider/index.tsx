import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Carousel from "./Carousel";

const SliderComponent = () => {
  return (
    <div className="">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Carousel
            image="/artikel.png"
            title="COACH HUDA: UJI TANDING HADAPI TIMNAS U16, INI KESEMPATAN BAGUS BAGI KAMI"
            desc="Menjalani uji tanding dengan Timnas U16 bagi Muhammad Nur Huda menjadi media pembelajaran bagi para pemainnya dan tentu saja jajaran pelatih Tim PSS U16. Menurutnya hal sangat menguntungkan bagi seluruh komponen Tim PSS U167."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Carousel
            image="/artikel.png"
            title="COACH HUDA: UJI TANDING HADAPI TIMNAS U16, INI KESEMPATAN BAGUS BAGI KAMI"
            desc="Menjalani uji tanding dengan Timnas U16 bagi Muhammad Nur Huda menjadi media pembelajaran bagi para pemainnya dan tentu saja jajaran pelatih Tim PSS U16. Menurutnya hal sangat menguntungkan bagi seluruh komponen Tim PSS U167."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Carousel
            image="/artikel.png"
            title="COACH HUDA: UJI TANDING HADAPI TIMNAS U16, INI KESEMPATAN BAGUS BAGI KAMI"
            desc="Menjalani uji tanding dengan Timnas U16 bagi Muhammad Nur Huda menjadi media pembelajaran bagi para pemainnya dan tentu saja jajaran pelatih Tim PSS U16. Menurutnya hal sangat menguntungkan bagi seluruh komponen Tim PSS U167."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderComponent;
