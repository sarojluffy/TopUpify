import { useState } from "react";
import brawl from "../../public/images/brawl.jpeg";
import coc from "../../public/images/Coc.jpg";
import cod from "../../public/images/CODMob.jpeg";
import EF from "../../public/images/EF.jpg";
import FC from "../../public/images/FC.jpg";
import ml from "../../public/images/ML.png";
import pubgl from "../../public/images/pubglte.jpg";

import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

type Props = {
  src: string;
  alt: string;
  game: string;
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
  const [indexvalue, setindexvalue] = useState<number>(0);
  const RightClick = () => {
    if (indexvalue === gameslider.length - 1) setindexvalue(0);
    else setindexvalue(indexvalue + 1);
  };
  const LeftClick = () => {
    if (indexvalue === 0) setindexvalue(gameslider.length - 1);
    else setindexvalue(indexvalue - 1);
  };

  console.log(indexvalue);
  return (
    <>
      <div className="w-full h-full py-8 relative z-0 ">
        <div className="w-5/6 mx-auto pb-5 ">
          <h1 className="pb-6 font-semibold text-terinary text-xl">
            {" "}
            Mobile Games
          </h1>
          <Swiper
            spaceBetween={50}
            // slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Pagination, Autoplay]}
            // pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            speed={1000}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 3, // Show 2 slides on screens >= 640px width
                spaceBetween: 20, // Adjust space between slides
              },
              1024: {
                slidesPerView: 4, // Show 3 slides on screens >= 1024px width
                spaceBetween: 30,
              },
            }}
          >
            {gameslider.map((slider, i) => {
              return (
                <SwiperSlide
                  key={i}
                  className=" my-6 mx-6 shadow-sm shadow-terinary"
                >
                  <img
                    src={slider.src}
                    alt={slider.alt}
                    className="rounded-md "
                  ></img>
                  <p className="text-center py-2 text-terinary bg-primary rounded-b-md ">
                    {slider.game}
                  </p>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default GamesSlider;
