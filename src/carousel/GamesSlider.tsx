import { Children, ReactNode, useState } from "react";
import brawl from "/images/brawl.jpeg";
import coc from "/images/Coc.jpg";
import cod from "/images/CODMob.jpeg";
import EF from "/images/EF.jpg";
import FC from "/images/FC.jpg";
import ml from "/images/ML.png";
import pubgl from "/images/pubglte.jpg";

import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";

import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import CarauselButtons from "../shared/CarauselButtons";

type Props = {
  src: string;
  alt: string;
  game: string;
};
interface Childrn {
  children: ReactNode;
}

const buttonstyl = "p-3 bg-terinary rounded-full text-primary cursor-pointer";

export const SliderMethod = ({ children }: Childrn) => {
  const swiper = useSwiper();

  return (
    <>
      <div className=" flex justify-between">
        <h1 className=" font-semibold text-terinary text-xl">{children}</h1>
        <div className="flex gap-3">
          <div
            className={`${buttonstyl}`}
            onClick={() => {
              swiper.slidePrev();
            }}
          >
            <MdOutlineChevronLeft />
          </div>

          <div
            className={`${buttonstyl}`}
            onClick={() => {
              swiper.slideNext();
            }}
          >
            <MdOutlineChevronRight />
          </div>
        </div>
      </div>
    </>
  );
};

const GamesSlider = () => {
  const gameslider: Props[] = [
    { src: brawl, alt: "brawl", game: "Brawlstars" },
    { src: coc, alt: "coc", game: "Clash of clans" },
    { src: cod, alt: "cod", game: "Call of duty" },
    { src: EF, alt: "EF", game: "Efootball" },
    { src: FC, alt: "FC", game: "FC mobile" },
    { src: ml, alt: "ml", game: "Mobile legends" },
    { src: pubgl, alt: "pubgl", game: "Pubglite" },
  ];
  // const [indexvalue, setindexvalue] = useState<number>(0);
  // const RightClick = () => {
  //   if (indexvalue === gameslider.length - 1) setindexvalue(0);
  //   else setindexvalue(indexvalue + 1);
  // };
  // const LeftClick = () => {
  //   if (indexvalue === 0) setindexvalue(gameslider.length - 1);
  //   else setindexvalue(indexvalue - 1);
  // };

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
            onReachBeginning={() => console.log("Reached the beginning")}
            onReachEnd={() => console.log("Reached the end")}
          >
            <div className="absolute top-0 right-0 z-10 w-full">
              <SliderMethod>Mobile games</SliderMethod>
            </div>

            {gameslider.map((slider, i) => (
              <SwiperSlide
                key={i}
                className="my-20 bg-red-200 shadow-sm shadow-terinary"
              >
                <img src={slider.src} alt={slider.alt} className="rounded-md" />
                <p className="text-center py-2 text-terinary bg-primary rounded-b-md">
                  {slider.game}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default GamesSlider;
