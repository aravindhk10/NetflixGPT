import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { LOGO, USER_LOGO } from "../utils/constants";

const Header = () => {
  const logggedin = useSelector((store) => store.user);
  const [dropdown, setdropdown] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(
          addUser({
            Name: displayName,
            UserId: uid,
            Email: email,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  const handlesignout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <div className="absolute w-full pl-4 pt-2 bg-black flex justify-between items-center z-10">
      <div className=" text-white">
        <img src={LOGO} alt="logo" className="w-44" />
      </div>
      <div className="">
        {logggedin && (
          <img
            src={USER_LOGO}
            alt="userlogo"
            className="w-15 h-10 mr-8 cursor-pointer"
            onClick={() => setdropdown(!dropdown)}
          />
        )}
        {dropdown && (
          <div className="mt-2 absolute shadow-2xl  bg-white p-3 rounded-lg">
            <button
              className="text-red-600 cursor-pointer rounded-md font-bold hover:bg-black  text-sm p-1"
              onClick={handlesignout}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
