import pubgimg from "../../public/images/pubg.jpg";
import codimg from "../../public/images/cod.jpg";
import ffimg from "../../public/images/ff.jpg";

import {
  MdOutlineChevronLeft,
  MdOutlineChevronRight,
  MdOutlineChevronright,
} from "react-icons/md";
import { useState } from "react";

type Props = {};

const Imageslider = (props: Props) => {
  const imageArr = [
    { img: pubgimg, alt: "pubgimage" },
    { img: codimg, alt: "codimg" },
    { img: ffimg, alt: "ffimg" },
  ];
  const [indexvalue, setindexvalue] = useState<number>(0);
  const RightClick = () => {
    if (indexvalue === imageArr.length - 1) setindexvalue(0);
    else setindexvalue(indexvalue + 1);
  };
  const LeftClick = () => {
    if (indexvalue === 0) setindexvalue(imageArr.length - 1);
    else setindexvalue(indexvalue - 1);
  };
  console.log(indexvalue);
  return (
    <div className="w-full h-full mt-8   ">
      <div className="w-5/6 h-full mx-auto flex relative overflow-hidden md:w-10/12 lg:w-9/12 xl:w-7/12 z-0 ">
        <div
          className="w-full mx-auto flex "
          style={{ transform: `translateX(-${100 * indexvalue}%)` }}
        >
          {imageArr.map((img) => {
            return (
              //   <div key={img.img}>
              <img
                key={img.img}
                src={img.img}
                className="w-full rounded-2xl "
                alt="img.alt"
              ></img>
              //   </div>
            );
          })}
        </div>
        <div className="absolute flex top-[50%] w-full justify-between ">
          <MdOutlineChevronLeft
            className="text-black bg-white rounded-full"
            size={30}
            onClick={LeftClick}
          />
          <MdOutlineChevronRight
            onClick={RightClick}
            className="text-black bg-white rounded-full "
            size={30}
          />
        </div>
      </div>
    </div>
  );
};

export default Imageslider;
