import React, { useState } from "react";
import { auth, db } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

type LoginStates = {
  email: string;
  password: string;
};

type FormEvent = React.FormEvent<HTMLFormElement>;

const Home = () => {
  const [email, setEmail] = useState<LoginStates["email"]>("");
  const [password, setPassword] = useState<LoginStates["password"]>("");
  const [disableSubmitButton, setDisableSubmitButton] = useState(true);

  const handleLoginSubmit = (e: FormEvent) => {
    e.preventDefault();

    //create Account using Email and password
    // createUserWithWithEmailAndPassword(auth, email, password)
    // .then(userCredentials =>{
    //   console.log(userCredentials)
    // })
    // .catch(error => alert(error.message))

    // sing in with Email and Password
    // signInWithEmailAndPassword(auth, email, password)
    //   .then(userCredentials =>{
    //     console.log(userCredentials)
    //   })
    //   .catch(error => alert(error.message))

    // sign in with google provider
    let provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((userCredentials) => {
        console.log(userCredentials);
      })
      .catch((error) => alert(error.message));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }

    if (email.trim() !== "" && password.trim() !== "") {
      setDisableSubmitButton(false);
    } else {
      setDisableSubmitButton(true);
    }
  };

  return (
    <div className="flex align-center justify-center">
      <form
        action=""
        className="flex flex-col w-[300px] mx-auto my-[300px] p-5 border rounded-xl"
        onSubmit={(e: FormEvent) => handleLoginSubmit(e)}
      >
        <h1 className="py-3"> Login to access the features </h1>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border-b my-2 hover:border-b-2"
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border-b my-2 hover:border-b-2"
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        // disabled={disableSubmitButton}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Home;
