import { useState } from "react";
import Bottomnavdec from "../Bottomnavdec";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

type Props = {};

const Menu = (props: Props) => {
  const [HamToogle, setHamtoogle] = useState(false);

  return (
    <>
      <Bottomnavdec>
        <GiHamburgerMenu
          onClick={() => {
            setHamtoogle(!HamToogle);
          }}
        />
      </Bottomnavdec>

      {HamToogle ? (
        <>
          <div
            className="w-full h-full fixed inset-0 bg-transparent"
            onClick={() => {
              setHamtoogle(!HamToogle);
            }}
          >
            dsadsads
          </div>

          <div className="fixed left-[30%]   md:left-[50%]  top-0 bottom-0 right-0 bg-secondary z-30">
            <div className="w-4/5 mx-auto mt-8">
              <div className="flex justify-end  ">
                <div
                  className="p-2 rounded-full bg-secondary "
                  onClick={() => {
                    setHamtoogle(!HamToogle);
                  }}
                >
                  <ImCross size={18} className="text-primary" />
                </div>
              </div>
              <div className="text-terinary flex flex-col gap-16 mt-12 text-lg font-bold">
                <div className="cursor-pointer"> Top Up</div>
                <div>Gift card</div>
                <div>Subscriptions</div>
                <div>Tiktok coins</div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Menu;
