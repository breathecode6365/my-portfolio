"use client";
import React, { useEffect, useState } from "react";
import dp from "../../public/dpunith.png";
import Image from "next/image";
import CodeForces from "../../public/icons/codeforces.png";
import leetcode from "../../public/icons/leetcodepng.png";
import codechef from "../../public/icons/codechef.png";
import herobg from "../../public/herobg.svg";
import usericon from "../../public/icons/user.png";
import closeicon from "../../public/icons/close.png";

const HeroCard = () => {
  const [showAbout, setShowAbout] = useState(false);

  const handleClick = () => {
    if (showAbout) setShowAbout(false);
    else {
      if (window.innerWidth < 700) {
        return;
      }
      setShowAbout(true);
    }
  };
  useEffect(() => {
    if (showAbout) {
      const timer = setTimeout(() => {
        setShowAbout(false);
      }, 15000);
      return () => clearTimeout(timer);
    }
  }, [showAbout, setShowAbout]);

  return (
    <div
      style={{
        backgroundImage: `url(/herobg.svg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex  sp:items-center overflow-hidden sp:justify-center sn:items-center  sn:justify-center se:justify-center se:items-center flex-row se:w-screen  sp:w-screen  sp:mx-auto sn:w-screen  sn:mx-auto tabhor:w-[600px] 2xl:w-[900px] w-[800px] se:h-[250px] sp:h-[200px] sn:h-[200px] tabhor:h-[325px] 2xl:h-[500px] h-[400px] si:mx-auto si:w-screen sr:mx-auto sr:w-[900px]  sp:ml-0 sn:ml-0 se:mx-auto tabhor:ml-[290px] ml-[320px] shadow-xl text-center 2xl:ml-[450px]">
      {showAbout ? (
        <button
          onClick={handleClick}
          id="about me"
          className={
            showAbout
              ? "sp:hidden se:hidden twirl flex flex-col  tabhor:mt-[25px] 2xl:w-[450px] tabhor:w-[411px] w-[350px] tabhor:ml-[40px] ml-[50px] mt-[50px] text-justify"
              : "twirlout flex flex-col sp:w-screen se:w-screen sp:ml-0 se:ml-0  w-[350px] tabhor:mt-[25px] ml-[50px] mt-[50px] sp:mt-0 se:mt-0 text-justify"
          }>
          <p className="sp:text-sm se:text-sm tabhor:text-sm 2xl:text-lg">
            Punith is a self-motivated and passionate individual who has diverse
            skills in UI/UX Design, Web Development, and Competitive
            Programming. He is a quick learner and a team player who is always
            ready to learn new things and work on challenging projects. He is
            passionate about Artificial Intelligence and Machine Learning. He
            enjoys research and development in the field of AI and ML. He is a
            good team player and a quick learner. He is always ready to learn
            new things and work on challenging projects.
          </p>
        </button>
      ) : (
        <button
          onClick={handleClick}
          id="intro"
          className={
            showAbout
              ? "twirl flex flex-col sp:mx-auto sn:mx-auto se:mx-auto se:items-center se:justify-center  sp:items-center sn:items-center se:p-3 sp:p-2 sn:p-2 p-10 "
              : "twirlout flex flex-col sp:mx-auto sn:mx-auto se:justify-center sp:justify-center sp:items-center sn:justify-center sn:items-center se:p-3 sp:p-2 sn:p-2 p-10 "
          }>
          <div className="se:mx-auto flex flex-col w-max sp:h-full sn:h-full se:h-full sp:justify-center sn:justify-center se:justify-center sp:items-center se:items-center  h-[300px] tabhor:mt-[50px] md:mt-[100px] text-left sp:text-center sn:text-center se:text-center ">
            <span className="font-[800] sp:text-lg sn:text-lg se:text-lg  text-3xl 2xl:text-5xl">
              I&apos;m Punith Dandluri
            </span>
            <div id="dynamic-text">
              <span className="font-[800] sp:text-sm sn:text-sm se:text-sm text-xl 2xl:text-3xl">
                Aspiring{" "}
                <span className="text-[#ff4a2e] "> AI Research Scientist</span>
              </span>
            </div>
          </div>
          <div className="flex-col flex gap-3 sp:mt-[20px] sn:mt-[20px] ">
            <span className="text-gray-300 font-[600] text-sm 2xl:text-xl">
              Contest Ratings
            </span>
            <div className="flex-row  flex gap-8 xl:gap-10 sp:gap-10 sn:gap-10 se:gap-10 sp:scale-75 sn:scale-75 se:scale-75">
              <a
                className="flex flex-col hover:translate-y-1 hover:scale-110 transition-all duration-500 ease-in-out"
                href="https://codeforces.com/profile/loganwick.jr"
                rel="noreferrer noopener"
                target="_blank">
                <span className="text-gray-600 font-[800] 2xl:text-lg">
                  #854
                </span>
                <Image
                  src={CodeForces}
                  width={50}
                  height={50}
                  alt="codeforces"
                  className="cpicons scale-110"
                />
              </a>
              <a
                className="flex flex-col  hover:translate-y-1 hover:scale-110 transition-all duration-500 ease-in-out"
                href="https://leetcode.com/breathe_code/"
                rel="noreferrer noopener"
                target="_blank">
                <span className="text-gray-600 font-[800] 2xl:text-lg">
                  #1446
                </span>
                <Image src={leetcode} className="cpicons" alt="leetcode" />
              </a>
              <a
                className="flex flex-col hover:translate-y-1 hover:scale-110 transition-all duration-500 ease-in-out"
                href="https://www.codechef.com/users/breathe_code"
                rel="noreferrer noopener"
                target="_blank">
                <span className="text-gray-600 font-[800] 2xl:text-lg">
                  #1294
                </span>
                <Image src={codechef} alt="code chef" className="cpicons" />
              </a>
            </div>
          </div>
        </button>
      )}
      <div className="flex overflow-hidden  justify-end pr-5  np:hidden sp:hidden sn:hidden se:hidden ">
        <Image
          src={dp}
          alt="Hero Image"
          className="h-auto w-auto flex-shrink-0 right-0 bottom-0"
        />
      </div>
    </div>
  );
};

export default HeroCard;
