"use client";
import React, { useEffect, useState } from "react";
import dp from "../../public/dpunith.png";
import Image from "next/image";
import CodeForces from "../../public/icons/codeforces.png";
import leetcode from "../../public/icons/leetcodepng.png";
import codechef from "../../public/icons/codechef.png";
import { codeChefApiRes } from "@/types/ApiResType";
import {
  RatingData,
  codeForcesApiResData,
  leetCodeApiResData,
} from "@/types/DataTypes";
import axios, { AxiosError, AxiosResponse } from "axios";
import Spinner from "./Spinner";

class CallAPi {
  CodeforcesApi = async (): Promise<number> => {
    return await axios
      .get<codeChefApiRes>(
        "https://codeforces.com/api/user.rating?handle=loganwick.jr"
      )
      .then((res: AxiosResponse<codeChefApiRes>) => {
        var data: codeChefApiRes = res.data;
        var lastedChange: codeForcesApiResData | undefined = data.result?.[
          data.result.length - 1
        ] as codeForcesApiResData;
        console.log("Latest change", lastedChange);
        var latestRating: number = lastedChange?.newRating as number;
        console.log("Latest Rating", latestRating);
        return latestRating;
      })
      .catch((err: AxiosError) => {
        console.log(err);
        return 0; // Return a default value in case of error
      });
  };
  LeetcodeApi = async (): Promise<number> => {
    return await axios
      .get("https://coderme.vercel.app/leetcode/breathe_code")
      .then((res: AxiosResponse<leetCodeApiResData>) => {
        const rating = res.data.rating;
        console.log("Leetcode Rating", rating);
        return rating ?? 0;
      })
      .catch((err: AxiosError) => {
        console.log(err);
        return 0; // Return a default value in case of error
      });
  };
}

const HeroCard = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [stableData, setStableData] = useState({
    codeChef: 0,
    codeForces: 0,
    leetCode: 0,
  } as RatingData);
  const myApi = new CallAPi();
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
    const fetchRanking = async () => {
      const codeForce = await myApi.CodeforcesApi();
      const codeChef = await axios
        .get("/api/data")
        .then((res) => {
          console.log(res.data, "API response data");
          return res.data;
        })
        .catch((err) => {
          console.log(err);
          return 0;
        });
      console.log("Codechef", codeChef);
      const data = codeChef?.ranking || 0;
      const leetCode = await myApi.LeetcodeApi();
      setStableData({
        leetCode: leetCode,
        codeForces: codeForce,
        codeChef: data,
      });
    };
    fetchRanking();
  }, []);
  useEffect(() => {
    if (showAbout) {
      const timer = setTimeout(() => {
        setShowAbout(false);
      }, 15000);
      return () => clearTimeout(timer);
    }
  }, [showAbout, setShowAbout]);
  const tagLines = [
    "Aspiring SDE",
    "Full-Stack Web Developer",
    "Newbie Competitive Programmer",
  ];
  const [tagLineIndex, setTagLineIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setTagLineIndex((tagLineIndex + 1) % tagLines.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [tagLineIndex]);

  return (
    <div
      style={{
        backgroundImage: `url(/herobg.svg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex  sp:items-center sp:justify-center sn:items-center  sn:justify-center se:justify-center se:items-center flex-row se:w-screen  sp:w-screen  sp:mx-auto sn:w-screen  sn:mx-auto tabhor:w-[600px] 2xl:w-[925px] w-[800px] se:h-[250px] sp:h-[200px] sn:h-[200px] tabhor:h-[325px] 2xl:h-[500px] h-[400px] si:mx-auto si:w-screen sr:mx-auto sr:w-[900px]   se:mx-auto  shadow-xl text-center mx-auto 2xl:justify-between">
      {showAbout ? (
        <button
          onClick={handleClick}
          id="about me"
          className={
            showAbout
              ? "twirl w-[450px] 2xl:w-[500px] flex-shrink-0 px-4 "
              : "twirlout"
          }>
          <p className="text-justify  2xl:text-lg  ">
            Punith is a self-motivated and passionate individual who has diverse
            skills in Full Stack Web Development, a beginner in Competitive
            Programming. He is a quick learner and a team player who is always
            ready to learn new things and work on challenging projects. Dreaming
            to become a SDE, who can code clean, develop scalable applications,
            and solve real-world problems. He enjoys research and development
            while working on solution.
          </p>
        </button>
      ) : (
        <button
          onClick={handleClick}
          id="intro"
          className={
            showAbout
              ? "twirl flex flex-col w-[450px] 2xl:w-[525px] sp:mx-auto sn:mx-auto se:mx-auto se:items-center se:justify-center  sp:items-center sn:items-center se:p-3 sp:p-2 sn:p-2 p-10 "
              : "twirlout flex flex-col  sp:mx-auto sn:mx-auto se:justify-center sp:justify-center sp:items-center sn:justify-center sn:items-center se:p-3 sp:p-2 sn:p-2 p-10 "
          }>
          <div className="se:mx-auto flex flex-col items-center   sp:h-full sn:h-full se:h-full sp:justify-center sn:justify-center se:justify-center sp:items-center se:items-center  h-[300px] tabhor:mt-[50px] md:mt-[100px] text-left sp:text-center sn:text-center se:text-center ">
            <span className="font-[800] sp:text-lg sn:text-lg se:text-lg  text-3xl 2xl:text-4xl">
              I&apos;m Punith Dandluri
            </span>
            <div id="dynamic-text">
              <span className="font-[800] sp:text-sm sn:text-sm se:text-sm text-xl 2xl:text-2xl">
                {tagLines[tagLineIndex].split(" ")[0]}{" "}
                <span className="text-[#ff4a2e] ">
                  {tagLines[tagLineIndex].replace(
                    tagLines[tagLineIndex].split(" ")[0],
                    ""
                  )}
                </span>
              </span>
            </div>
          </div>
          <div className="flex-col items-center flex gap-3 sp:mt-[20px] sn:mt-[20px] ">
            <div className="text-gray-300  font-[600] text-sm 2xl:text-xl">
              Contest Ratings
            </div>
            <div className="flex-row  flex gap-8 xl:gap-10 sp:gap-10 sn:gap-10 se:gap-10 sp:scale-75 sn:scale-75 se:scale-75">
              <a
                className="flex flex-col hover:translate-y-1 hover:scale-110 transition-all duration-500 ease-in-out"
                href="https://codeforces.com/profile/loganwick.jr"
                rel="noreferrer noopener"
                target="_blank">
                <span className="text-gray-600 font-[800] 2xl:text-lg">
                  {stableData.codeForces === 0 ||
                  stableData.codeForces === undefined ? (
                    <Spinner />
                  ) : (
                    "# " + stableData.codeForces
                  )}
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
                  {stableData.leetCode === 0 ||
                  stableData.leetCode === undefined ? (
                    <Spinner />
                  ) : (
                    "# " + stableData.leetCode
                  )}
                </span>
                <Image src={leetcode} className="cpicons" alt="leetcode" />
              </a>
              <a
                className="flex flex-col hover:translate-y-1 hover:scale-110 transition-all duration-500 ease-in-out"
                href="https://www.codechef.com/users/breathe_code"
                rel="noreferrer noopener"
                target="_blank">
                <span className="text-gray-600 font-[800] 2xl:text-lg">
                  <span className="text-gray-600 font-[800] 2xl:text-lg">
                    {stableData.codeChef === 0 ||
                    stableData.codeChef === undefined ? (
                      <Spinner />
                    ) : (
                      "# " + stableData.codeChef
                    )}
                  </span>
                </span>
                <Image src={codechef} alt="code chef" className="cpicons" />
              </a>
            </div>
          </div>
        </button>
      )}
      <div className="np:hidden flex-shrink-0 relative sp:hidden sn:hidden se:hidden w-[350px] 2xl:w-[375px] ">
        <div className="relative w-full h-full">
          <Image
            src={dp}
            alt="Hero Image"
            //w-[276px] h-[376px]
            className="w-[289px] h-[394px] absolute bottom-0 right-3 2xl:w-[372px] 2xl:h-[507px] "
          />
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
