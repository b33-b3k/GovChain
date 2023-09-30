import { Link } from "react-router-dom";
import { MdLightMode } from "react-icons/md";
import { FaUserSecret, FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";
import { truncate, useGlobalState } from "../store";
import { connectWallet } from "../Blockchain.services";

const Header = () => {
  const [theme, setTheme] = useState(localStorage.theme);
  const themeColor = theme === "dark" ? "light" : "dark";
  const darken = theme === "dark" ? true : false;
  const [connectedAccount] = useGlobalState("connectedAccount");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(themeColor);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [themeColor, theme]);

  const toggleLight = () => {
    const root = window.document.documentElement;
    root.classList.remove(themeColor);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
    setTheme(themeColor);
  };

  return (
    <>
      <header id="start" className=" dark:text-[#F3F4F7]">
        <nav
          className="navbar fixed top-0 navbar-expand-lg   py-2  flex items-center w-full justify-between shadow-sm
      bg-white dark:bg-[#060709]"
        >
          <div className="px-6 w-full flex flex-wrap items-center justify-between">
            <div className="grow flex flex-row justify-between items-center p-2">
              <Link
                to={"/home"}
                className="flex flex-row justify-start items-center space-x-3"
              >
                <span className="invisible font-bold text-xl md:visible dark:text-[#F3F4F7]">
                  Gov-chain
                </span>
              </Link>

              <div className="flex flex-row justify-center items-center space-x-5">
               <Link to="/budget">Budget</Link>
                <Link to="/">About</Link>

                {darken ? (
                  <MdLightMode
                    className="cursor-pointer"
                    size={25}
                    onClick={toggleLight}
                  />
                ) : (
                  <FaMoon
                    className="cursor-pointer"
                    size={25}
                    onClick={toggleLight}
                  />
                )}

                {connectedAccount ? (
                  <button
                    className=" p-3 bg-blue-600 text-white
                  font-medium text-xs leading-tight uppercase
                  rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg
                  focus:bg-blue-700 focus:shadow-lg focus:outline-none
                  focus:ring-0 active:bg-blue-800 active:shadow-lg
                  transition duration-150 ease-in-out dark:text-blue-500
                  dark:border dark:border-blue-500 dark:bg-transparent"
                  >
                    {/* {truncate(connectedAccount, 4, 4, 11)} */}
                    Connected
                  </button>
                ) : (
                  <button
                    className=" bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-800  dark:bg-slate-600  dark:text-blue-300"
                    onClick={connectWallet}
                  >
                    Connect Wallet
                  </button>
                )}
              </div>
            </div>
          </div>
        </nav>
       
      </header>
    </>
  );
};

export default Header;
