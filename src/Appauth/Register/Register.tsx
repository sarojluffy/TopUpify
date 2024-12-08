import { authh } from "../../Firebase/firebase";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { FirebaseError } from "firebase/app";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
interface Formvalues {
  email: string;
  password: string;
}

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<Formvalues>();

  const Submit = async (data: Formvalues) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        authh,
        data.email,
        data.password
      );

      alert("registered successfully");
      console.log(userCredential);
      navigate("/login");
    } catch (error) {
      if (error instanceof FirebaseError) {
        alert(error.message); // Safe to access `message` and Firebase-specific properties
      } else if (error instanceof Error) {
        alert(error.message); // If it's a generic Error
      } else {
        alert("An unknown error occurred.");
      }
    }
  };

  return (
    <>
      <div>this is register section</div>
      <div>
        <form noValidate onSubmit={handleSubmit(Submit)}>
          <label htmlFor="email">email</label>
          <input type="text" {...register("email")}></input>

          <label htmlFor="password">password</label>
          <input type="password" {...register("password")}></input>

          <button type="submit">click me </button>
        </form>
        <DevTool control={control} />
        <button
          onClick={() => {
            navigate("/login", { replace: true });
          }}
        >
          go to login{" "}
        </button>
      </div>
    </>
  );
};

export default Register;

//dasdadasdadasdadasda
