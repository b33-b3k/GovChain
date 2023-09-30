// import Header from "../components/Header";
import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <Header />
      <div className="  landingPage w-full h-[85vh]  flex flex-wrap pt-[50px] justify-center  items-center dark:bg-[#212936">
        <article className="px-5 flex flex-col gap-3 justify-center items-start">
          <h1 className="  text-center text-7xl dark:text-[#F6E3DF]  font-bold ">
            Gov-chain
          </h1>
          <p
            className="
         text-sm  text-gray-400 dark:text-[#F6E3DF] w-[50ch] "
          >
            Decentralized autonomous organization (DAO) , a type of bottom-up
            entity structure with no central authority.
          </p>
          <Link to="/home">
            <button
              className="
            bg-blue-500 font-bold text-white p-2 rounded-md hover:bg-blue-800 dark:bg-[#2AB1DE]  dark:text-[#0A0718]"
            >
              Get started
            </button>
          </Link>
        </article>
        <img
          className=""
          src="https://th.bing.com/th/id/R.d3bf3e070ccd07d8e245ad7c43ab0307?rik=i1EMGYVivlt0Tw&riu=http%3a%2f%2fwww.dream71.com%2fwp-content%2fuploads%2f2019%2f04%2fE-Governance-300x297.png&ehk=4%2fCx%2bBV1j2UBtAuBK%2byJqnl3PT%2bdbS1l7iey%2bNiQyKo%3d&risl=&pid=ImgRaw&r=0"
          alt=""
        />
          </div>
          <Footer/>
    </>
  );
};

export default LandingPage;
