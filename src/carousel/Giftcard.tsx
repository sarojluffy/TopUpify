import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderMethod } from "./GamesSlider";
import { GiftArray } from "../shared/Data";
import { Link } from "react-router-dom";
// const buttonstyl = "p-3 bg-terinary rounded-full text-primary cursor-pointer";

const Giftcard = () => {
  return (
    <>
      <div className="w-full h-full py-8 relative z-0">
        <div className="w-5/6 mx-auto pb-5">
          {/* SliderMethod goes here for above the slider */}
          {/* <div className="absolute -top-6 left-7 w-full z-10">
            <SliderMethod />
          </div> */}

          <Swiper
            spaceBetween={50}
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            speed={500}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 10 },
              640: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 30 },
            }}
            loop={true}
            // onReachBeginning={() => console.log("Reached the beginning")}
            // onReachEnd={() => console.log("Reached the end")}
          >
            <div className="absolute top-0 right-0 z-10 w-full">
              <SliderMethod>Giftcard</SliderMethod>
            </div>

            {GiftArray.map((slider, i) => (
              <SwiperSlide
                key={i}
                className="my-20 bg-red-200 shadow-sm shadow-terinary"
              >
                <Link to={`/description/${slider.id}`}>
                  <img
                    src={slider.src}
                    alt={slider.alt}
                    className="rounded-md"
                  />
                  <p className="text-center py-2 text-terinary bg-primary rounded-b-md">
                    {slider.name}
                  </p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Giftcard;
