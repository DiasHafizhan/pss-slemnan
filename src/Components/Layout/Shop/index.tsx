import CardShop from "./CardShop";
import { productWithImage } from "@/pages/store";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

interface ShopLayoutprops {
  jerseyProduct: productWithImage[] | null;
  teamwear: productWithImage[] | null;
}

const ShopLayout = ({ jerseyProduct, teamwear }: ShopLayoutprops) => {
  return (
    <div className="container">
      <div className="mb-20">
        <h1 className="text-3xl font-semibold text-primary mb-5">
          JERSEY PSS SLEMAN 23/24
        </h1>
        <div className="w-full flex flex-wrap">
          {jerseyProduct
            ? jerseyProduct?.map((data) => (
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  freeMode={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[FreeMode, Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <CardShop
                      image={data.productImg[1].url}
                      price={data.price}
                      title={data.title}
                    />
                  </SwiperSlide>
                </Swiper>
              ))
            : null}
        </div>
      </div>
      <div className="mb-20">
        <h1 className="text-3xl font-semibold text-primary mb-5">
          JERSEY TEAMWEAR
        </h1>
        <div className="w-full flex flex-wrap">
          {teamwear
            ? teamwear?.map((data) => (
                <CardShop
                  image={data.productImg[0].url || ""}
                  price={data.price}
                  title={data.title}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default ShopLayout;
