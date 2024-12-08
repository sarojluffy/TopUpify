import { authh } from "../Firebase/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

type Props = {};

const Home = (props: Props) => {
  const navigate = useNavigate();

  const SignO = async () => {
    try {
      await signOut(authh);
      alert("Signed out successfully");
      navigate("/login"); // Redirect to login page after sign-out
    } catch (error) {
      console.error("Error signing out:", error);
      alert("Failed to sign out. Please try again.");
    }
  };

  return (
    <div>
      <h1>Welcome to Home</h1>
      <button onClick={SignO}>Sign Out</button>
    </div>
  );
};

export default Home;
