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

type Props = {
  src: string;
  alt: string;
};

const GamesSlider = () => {
  const gameslider: Props[] = [
    { src: brawl, alt: "brawl" },
    { src: coc, alt: "coc" },
    { src: cod, alt: "cod" },
    { src: EF, alt: "EF" },
    { src: FC, alt: "FC" },
    { src: ml, alt: "ml" },
    { src: pubgl, alt: "pubgl" },
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
        <div className="w-5/6 mx-auto pb-5">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            speed={1000}
          >
            {gameslider.map((slider, i) => {
              return (
                <SwiperSlide key={i}>
                  <img
                    src={slider.src}
                    alt={slider.alt}
                    className="rounded-md"
                  ></img>
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
