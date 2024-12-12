import useMediaQuery from "../../shared/mediaquery";
import SearchNLogin from "./SearchNLogin/SearchNLogin";

const Navbar = () => {
  const AboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <>
      <nav className="w-full py-6 text-terinary text-md shadow-sm shadow-primary top-0 fixed z-10 bg-secondary  bg-opacity-95 ">
        {/* z-30 */}
        <div className="w-5/6 mx-auto flex justify-between gap-16 items-center">
          {/* logo */}
          <h1 className="text-3xl   font-bold drop-shadow-lg text-terinary ">
            TopUpify
          </h1>

          {/* nav items and login */}

          {AboveMediumScreens ? (
            <>
              {" "}
              <div className="flex w-full justify-between">
                {/* navitems  */}

                <div className="flex w-full gap-10">
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
