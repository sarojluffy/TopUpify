import { authh } from "../../Firebase/firebase";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { FirebaseError } from "firebase/app";

import {
  signInWithEmailAndPassword,
  browserLocalPersistence,
  browserSessionPersistence,
  setPersistence,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
interface Formvalues {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<Formvalues>();

  const Submit = async (data: Formvalues) => {
    try {
      //   await setPersistence(authh, browserLocalPersistence);
      const userCredential = await signInWithEmailAndPassword(
        authh,
        data.email,
        data.password
      );

      //   const userToken = await userCredential.user.getIdToken(); // unique id token paucha
      //   localStorage.setItem("authToken", userToken);
      alert("login successfully");
      //   console.log(userToken);
      navigate("/");
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.log(error.message); // Safe to access `message` and Firebase-specific properties
      } else if (error instanceof Error) {
        console.log(error.message); // If it's a generic Error
      } else {
        console.log("An unknown error occurred.");
      }
    }
  };

  return (
    <>
      <div> this is login</div>
      <div>
        <form noValidate onSubmit={handleSubmit(Submit)}>
          <label htmlFor="email">email</label>
          <input type="text" {...register("email")}></input>

          <label htmlFor="password">password</label>
          <input type="password" {...register("password")}></input>

          <button type="submit">click me </button>
        </form>

        <button
          onClick={() => {
            navigate("/register");
          }}
        >
          register
        </button>
        <DevTool control={control} />
      </div>
    </>
  );
};

export default Login;
//dasddddddddddddddddddddddddddddd
