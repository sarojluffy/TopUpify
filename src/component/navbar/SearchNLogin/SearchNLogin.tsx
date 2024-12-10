import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Searchpage from "./Searchpage/Searchpage";
type Props = {};

const SearchNLogin = () => {
  const [searchpage, setsearchpage] = useState<boolean>(false);
  return (
    <div className="flex items-center gap-6 ">
      <div className="text-terinery">
        <BsSearch
          onClick={() => {
            setsearchpage(!searchpage);
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
