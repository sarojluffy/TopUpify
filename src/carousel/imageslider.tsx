import { imageArr } from "../shared/Data";
// import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import "swiper/css/navigation";
import "swiper/swiper-bundle.css"; // all will be imported?
import "swiper/css/autoplay";

const Imageslider = () => {
  return (
    <div className="w-full h-full py-20 ">
      <div className="w-4/5 mx-auto h-[60vh]">
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={1000}
          loop={true} //loops
          navigation={true}
          className="relative py-6 h-full rounded-lg"
        >
          {imageArr.map((images) => {
            return (
              <SwiperSlide className="my-16">
                <img
                  src={images.src}
                  alt={images.alt}
                  key={images.name}
                  className="rounded-lg  w-full "
                ></img>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Imageslider;
