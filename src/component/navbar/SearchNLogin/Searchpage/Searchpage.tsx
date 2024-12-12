import { CombinedData } from "../../../../shared/Data";
import { ImCross } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

type Props = {
  setsearchpage: React.Dispatch<React.SetStateAction<boolean>>;

  searchpage: boolean;
};

const Searchpage = ({ searchpage, setsearchpage }: Props) => {
  // const [searchtext,setsearchtext]= useState("")

  return (
    <div className="fixed  inset-0  bg-primary z-30 overflow-auto w-full  py-32">
      <div className="w-4/5 mx-auto ">
        <div className="w-4/5  flex justify-end fixed py-8 bg-primary top-0">
          <div className="w-full ">
            <form className="flex items-center w-full justify-center gap-4">
              <input type="text" className="w-2/4"></input>
              <FaSearch />
            </form>
          </div>
          <div
            className="text-terinary"
            onClick={() => {
              setsearchpage(!searchpage);
            }}
          >
            <ImCross />
          </div>
        </div>

        <div className="grid grid-cols-2   gap-6 w-4/5 mx-auto pt-16">
          {CombinedData.map((abc) => {
            return (
              <>
                <div className="">
                  <img src={abc.src}></img>
                  <p>{abc.name}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Searchpage;
