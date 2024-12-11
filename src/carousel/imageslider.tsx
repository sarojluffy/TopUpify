import pubgimg from "/images/pubg.jpg";
import codimg from "/images/cod.jpg";
import ffimg from "/images/ff.jpg";

import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
// import { useState } from "react";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import "swiper/css/navigation";
import "swiper/swiper-bundle.css"; // all will be imported?
import "swiper/css/autoplay";

type Props = { img: string; alt: string };

const Imageslider = () => {
  const imageArr: Props[] = [
    { img: pubgimg, alt: "pubgimage" },
    { img: codimg, alt: "codimg" },
    { img: ffimg, alt: "ffimg" },
  ];

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
                  src={images.img}
                  alt={images.alt}
                  key={images.alt}
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
