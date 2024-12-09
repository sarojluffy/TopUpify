import { authh } from "../Firebase/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/navbar/Navbar";
import useMediaQuery from "../shared/mediaquery";
import BottonNav from "../component/navbar/BottonNav";
import Imageslider from "../carousel/imageslider";
import { useState } from "react";
import GamesSlider from "../carousel/GamesSlider";

type Props = {};

const Home = (props: Props) => {
  const AboveMediumScreens = useMediaQuery("(min-width:1060px)");

  const navigate = useNavigate();
  const aboveSmallScreen = useMediaQuery("(min-width:540px)");

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
    <div>
      <Navbar />

      <Imageslider />

      <GamesSlider />

      {!AboveMediumScreens ? <BottonNav /> : null}
    </div>
  );

  {
    /* <button onClick={SignO}>Sign Out</button> */
  }
};

export default Home;
