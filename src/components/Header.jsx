import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { lang, LOGO, USER_LOGO } from "../utils/constants";
import { togglinggpt } from "../utils/gptSlice";
import { addPreferredLanguage } from "../utils/configSlice";

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

  const handleGptSearch = () => {
    dispatch(togglinggpt());
  };

  const preferredlanguagesetting = (e) => {
    dispatch(addPreferredLanguage(e.target.value));
  };
  const selecttogglegptbtn = useSelector((store) => store.gpt.gpttoggle);
  return (
    <div className="absolute w-full pl-4 pt-2 bg-black flex justify-between items-center z-30">
      <div className=" text-white">
        <img src={LOGO} alt="logo" className="w-44" />
      </div>

      {logggedin && (
        <div className="flex">
          {selecttogglegptbtn && (
            <select
              className="bg-red-900 mr-5 p-2 rounded-md outline-none border-none cursor-pointer"
              onChange={preferredlanguagesetting}
            >
              {lang.map((l) => (
                <option
                  key={l.id}
                  value={l.id}
                  className="cursor-pointer hover:bg-red-400 "
                >
                  {l.name}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={() => handleGptSearch()}
            className="bg-red-600 text-black font-semibold text-lg px-2 rounded-md mr-5 cursor-pointer"
          >
            {selecttogglegptbtn ? "Home" : "GPT Search"}
          </button>

          <img
            src={USER_LOGO}
            alt="userlogo"
            className="w-15 h-10 mr-8 cursor-pointer"
            onClick={() => setdropdown(!dropdown)}
          />

          {dropdown && (
            <div className="absolute shadow-2xl bg-white p-3 rounded-lg top-17 right-5 hover:bg-red-500 ">
              <button
                className="text-black cursor-pointer rounded-md font-bold text-sm  "
                onClick={handlesignout}
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
