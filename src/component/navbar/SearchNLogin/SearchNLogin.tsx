import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import Searchpage from "./Searchpage/Searchpage";
import { useDispatch } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import { changeBG } from "../../../shared/Redux/slices/BgScroll";
type Props = {};

const SearchNLogin = () => {
  const [searchpage, setsearchpage] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(changeBG(searchpage));
  });
  return (
    <div className="flex items-center gap-6 ">
      <div
        onClick={() => {
          navigate("/cart");
        }}
      >
        <FaCartShopping />
      </div>

      <div className="text-terinery">
        <BsSearch
          onClick={() => {
            setsearchpage(!searchpage);
            dispatch(changeBG(searchpage));
          }}
        />
      </div>
      <div>Login </div>

      {searchpage ? (
        <Searchpage searchpage={searchpage} setsearchpage={setsearchpage} />
      ) : null}
    </div>
  );
};

export default SearchNLogin;
