import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../Appauth/Login/Login";
import Home from "../Pages/Home";
import Register from "../Appauth/Register/Register";
import Protectedpage from "../component/Protectedpage";
import { useEffect, useState } from "react";
import { authh } from "../Firebase/firebase";
import { User } from "firebase/auth";
import Notfound from "../component/Notfound";

type Props = {};

const RouteSS = (props: Props) => {
  const [userS, setUsers] = useState<User | null>();

  useEffect(() => {
    authh.onAuthStateChanged((user) => {
      if (user) {
        setUsers(user);
      } else {
        setUsers(null);
      }
    });
    console.log(userS);
  });
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>

      <Route
        path="/"
        element={userS ? <Navigate to="/home" /> : <Login />}
      ></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/home" element={userS ? <Home /> : <Login />}></Route>
      <Route path="*" element={<Notfound />}></Route>
    </Routes>
  );
};

export default RouteSS;
// </Protectedpage>
