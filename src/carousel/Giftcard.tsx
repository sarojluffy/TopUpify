import amzon from "/giftcards/amzon (1).jpg";
import google from "/giftcards/googlecardart (1).png";
import itunes from "/giftcards/ituens-card (1).jpg";
import playst from "/giftcards/spotify.jpeg";
import steam from "/giftcards/steam.jpeg";
import xbox from "/giftcards/xbox.jpeg";

import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import { SliderMethod } from "./GamesSlider";

const buttonstyl = "p-3 bg-terinary rounded-full text-primary cursor-pointer";

type Props = {
  src: string;
  alt: string;
  card: string;
};

const Giftcard = () => {
  const GiftArray: Props[] = [
    {
      src: amzon,
      alt: "amzon",
      card: "Amazon GiftCard",
    },
    {
      src: google,
      alt: "google",
      card: "google GiftCard",
    },
    {
      src: itunes,
      alt: "itunes",
      card: "Itunes",
    },
    {
      src: playst,
      alt: "playst",
      card: "Playstation GiftCard",
    },
    {
      src: steam,
      alt: "steam",
      card: "Steam",
    },
    {
      src: xbox,
      alt: "xbox",
      card: "Xbox GiftCard",
    },
  ];

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
              <SliderMethod>Giftcard</SliderMethod>
            </div>

            {GiftArray.map((slider, i) => (
              <SwiperSlide
                key={i}
                className="my-20 bg-red-200 shadow-sm shadow-terinary"
              >
                <img src={slider.src} alt={slider.alt} className="rounded-md" />
                <p className="text-center py-2 text-terinary bg-primary rounded-b-md">
                  {slider.card}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Giftcard;
