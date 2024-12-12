import { authh } from "../Firebase/firebase";
import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/navbar/Navbar";
import useMediaQuery from "../shared/mediaquery";
import BottonNav from "../component/navbar/BottonNav";
import Imageslider from "../carousel/imageslider";
import GamesSlider from "../carousel/GamesSlider";
import Giftcard from "../carousel/Giftcard";
import { RootState } from "../shared/Redux/store";
import { useSelector } from "react-redux";

type Props = {};

const Home = (props: Props) => {
  const AboveMediumScreens = useMediaQuery("(min-width:1060px)");

  const navigate = useNavigate();
  const aboveSmallScreen = useMediaQuery("(min-width:540px)");

  const BgReduxVal = useSelector((state: RootState) => state.Bgscroll.value);

  // const BgReduxBool = BgReduxVal && "overflow-hidden";

  useEffect(() => {
    // BgReduxVal && document.body.classList.add("overflow-hidden");
    if (BgReduxVal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  });

  // const count = useSelector((state: RootState) => state.counter.value)

  //   const SignO = async () => {
  //     try {
  //       await signOut(authh);
  //       alert("Signed out successfully");
  //       navigate("/login"); // Redirect to login page after sign-out
  //     } catch (error) {
  //       console.error("Error signing out:", error);
  //       alert("Failed to sign out. Please try again.");
  //     }
  //   };

  return (
    <div className={`bg-radial-gradient from-primary overflow-hidden `}>
      <Navbar />

      <Imageslider />

      <GamesSlider />
      <Giftcard />

      {!AboveMediumScreens ? <BottonNav /> : null}
    </div>
  );

  {
    /* <button onClick={SignO}>Sign Out</button> */
  }
};

export default Home;
