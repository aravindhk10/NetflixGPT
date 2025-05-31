import React, { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [togglesignup, settogglesignup] = useState(true);
  const [errormssg, seterrormssg] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const handletogglesignup = () => {
    settogglesignup(!togglesignup);
  };

  const handlesignin = () => {
    const nameValue = togglesignup ? null : name.current.value || "";
    const mssg = validate(
      email.current.value,
      password.current.value,
      nameValue
    );
    seterrormssg(mssg);
    if (mssg) return;

    if (!togglesignup) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          updateProfile(auth.currentUser, {
            displayName: nameValue,
          })
            .then(() => {
              const { uid, displayName, email } = auth.currentUser;
              dispatch(
                addUser({
                  Name: displayName,
                  UserId: uid,
                  Email: email,
                })
              );
            })
            .catch((error) => {
              seterrormssg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormssg(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === "auth/invalid-credential") {
            seterrormssg("Email or Password is incorrect");
          }
          console.log(errorMessage);
        });
    }
  };

  return (
    <div className="relative">
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/98df3030-1c2b-4bd1-a2f5-13c611857edb/web/IN-en-20250331-TRIFECTA-perspective_247b6f06-c36d-4dff-a8eb-4013325c3f8e_large.jpg"
        alt="background-pic"
      />

      <div className="absolute bottom-0 top-0 right-0 left-0 mx-auto my-auto w-3/12 h-3/5 bg-black/80  rounded-md p-10 text-white text-center">
        <h1 className="text-2xl text-left mb-4 font-bold">
          {togglesignup ? "Sign In" : "Sign Up"}
        </h1>
        <p className="font-bold text-red-600">{errormssg}</p>
        <form onSubmit={(e) => e.preventDefault()}>
          {!togglesignup && (
            <input
              type="text"
              ref={name}
              placeholder="Full Name"
              className="p-2 mt-3 mb-2 w-full rounded-sm border border-white h-14"
            />
          )}
          <input
            type="text"
            ref={email}
            placeholder="Email or mobile number"
            className="p-2 mt-3 mb-2 w-full rounded-sm border border-white h-14"
          />
          <input
            type="password"
            ref={password}
            placeholder="Password"
            className="p-2 mt-3 mb-2 w-full border rounded-sm border-white h-14"
          />
          <button
            onClick={handlesignin}
            className="bg-red-600 rounded-sm mt-3 mb-2 p-2 w-full cursor-pointer font-bold hover:opacity-80"
          >
            {togglesignup ? "Sign In" : "Sign Up"}
          </button>
        </form>
        <p
          className="mt-3 cursor-pointer hover:underline"
          onClick={handletogglesignup}
        >
          {togglesignup
            ? "New to Netflix? Sign up now."
            : "Already have an account? Sign in."}
        </p>
      </div>
    </div>
  );
};

export default Login;
