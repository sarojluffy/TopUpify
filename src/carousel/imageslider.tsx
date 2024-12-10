import pubgimg from "../../public/images/pubg.jpg";
import codimg from "../../public/images/cod.jpg";
import ffimg from "../../public/images/ff.jpg";

import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
// import { useState } from "react";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import "swiper/css/navigation";
import "swiper/swiper-bundle.css"; // all will be imported?

type Props = {};

const SliderMethod = () => {
  const swiper = useSwiper();

  return (
    <>
      <div className="flex w-full  justify-end gap-4">
        <div
          className="p-3 bg-white"
          onClick={() => {
            swiper.slidePrev();
          }}
        >
          <MdOutlineChevronLeft />
        </div>
        <div
          className="p-3 bg-white"
          onClick={() => {
            swiper.slideNext();
          }}
        >
          <MdOutlineChevronRight />
        </div>
      </div>
    </>
  );
};

const Imageslider = (props: Props) => {
  const imageArr = [
    { img: pubgimg, alt: "pubgimage" },
    { img: codimg, alt: "codimg" },
    { img: ffimg, alt: "ffimg" },
  ];

  return (
    <div className="w-full h-full pt-32 ">
      <div className="w-4/5 mx-auto h-[60vh]">
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={1500}
          loop={true} //loops
          // navigation={true}
          className="relative py-6 h-full rounded-lg"
        >
          <div className="top-3  absolute left-0 w-full z-10">
            <SliderMethod />
          </div>

          {imageArr.map((images) => {
            return (
              <SwiperSlide className="my-10">
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
