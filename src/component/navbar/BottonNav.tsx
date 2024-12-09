import { AiFillHome } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";

import { CiUser } from "react-icons/ci";

import Bottomnavdec from "./subnav/Bottomnavdec";
import Menu from "./subnav/bottomNavComp/Menu";

type Props = {};

const BottonNav = (props: Props) => {
  return (
    <>
      <div className="w-full bottom-0 fixed shadow-md pt-6 ">
        <div className=" w-5/6 mx-auto flex  items-center justify-between ">
          <Bottomnavdec>
            <AiFillHome />
          </Bottomnavdec>
          <Bottomnavdec>
            <FaCartShopping />
          </Bottomnavdec>
          <Bottomnavdec>
            <CiUser />
          </Bottomnavdec>

          <Menu />
        </div>
      </div>
    </>
  );
};

export default BottonNav;
