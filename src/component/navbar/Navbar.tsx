import useMediaQuery from "../../shared/mediaquery";
import { BsSearch } from "react-icons/bs";
import SearchNLogin from "./SearchNLogin/SearchNLogin";
type Props = {};

const Navbar = (props: Props) => {
  const AboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <>
      <nav className="w-full h-full py-6 text-primary text-xl shadow-lg top-0 fixed z-30">
        <div className="w-5/6 mx-auto flex justify-between gap-16">
          {/* logo */}
          <h1 className="text-2xl font-bold">TopUpify</h1>

          {/* nav items and login */}

          {AboveMediumScreens ? (
            <>
              {" "}
              <div className="flex w-full justify-between">
                {/* navitems  */}

                <div className="flex w-full gap-14">
                  {" "}
                  <div className="cursor-pointer"> Top Up</div>
                  <div>Gift card</div>
                  <div>Subscriptions</div>
                  <div>Tiktok coins</div>
                </div>
                {/* login */}
                <SearchNLogin />
              </div>
            </>
          ) : (
            <SearchNLogin />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
