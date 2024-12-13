import { CombinedData } from "../../../../shared/Data";
import { RootState } from "../../../../shared/Redux/store";
import { ImCross } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { initialArray } from "../../../../shared/Redux/slices/SearchSlice";
import { searchedArray } from "../../../../shared/Redux/slices/SearchSlice";

type Props = {
  setsearchpage: React.Dispatch<React.SetStateAction<boolean>>;
  searchpage: boolean;
};

const Searchpage = ({ searchpage, setsearchpage }: Props) => {
  // const [searchtext,setsearchtext]= useState("")
  const [inputfielddtaa, setinputfielddtaa] = useState<string>("");

  const SubmitData = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<SVGElement, MouseEvent>
  ) => {
    e.preventDefault();
    console.log("submitted");
    dispatch(searchedArray(inputfielddtaa));
  };
  const selectorData = useSelector((state: RootState) => state.search.items);
  const searchedselectorData = useSelector(
    (state: RootState) => state.search.searcheditems
  );
  const DisplayArraydata =
    searchedselectorData.length === 0 ? selectorData : searchedselectorData;

  console.log(DisplayArraydata);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialArray(CombinedData));
  });
  // useEffect(() => {
  //   dispatch(searchedArray(inputfielddtaa));
  // }, [inputfielddtaa]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log("Dispatching search query:", inputfielddtaa);
      dispatch(searchedArray(inputfielddtaa));
    }, 1000); // Debounce timeout of 300ms

    return () => {
      // Clear timeout when the component unmounts or before the effect re-runs
      clearTimeout(timeoutId);
    };
  }, [inputfielddtaa, dispatch]);

  return (
    <div className="fixed  inset-0  bg-primary z-30 overflow-auto w-full  py-32">
      <div className="w-4/5 mx-auto ">
        <div className="w-4/5  flex justify-end fixed py-8 bg-primary top-0">
          <div className="w-full ">
            <form
              className="flex items-center w-full justify-center gap-4"
              onSubmit={SubmitData}
            >
              <input
                type="text"
                className="w-2/4 text-primary"
                onChange={(e) => {
                  setinputfielddtaa(e.target.value);
                }}
              ></input>
              <FaSearch onClick={SubmitData} />
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

        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6 w-4/5 mx-auto pt-16 place-items-center">
          {searchedselectorData.length === 0 && inputfielddtaa ? (
            <>
              <div>notfound</div>
            </>
          ) : (
            <>
              {DisplayArraydata.map((abc) => {
                return (
                  <>
                    <div className="border-b-[1px] border-terinary w-2/4 rounded-lg flex whitespace-nowrap gap-4">
                      <img className="rounded-lg" src={abc.src}></img>
                      <p className="text-end">{abc.name}</p>
                    </div>
                  </>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Searchpage;
