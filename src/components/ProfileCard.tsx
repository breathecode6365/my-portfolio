import React from "react";
import dp from "../../public/punith.svg";
import Image from "next/image";
import insta from "../../public/icons/Icons-instagram.svg";
import x from "../../public/icons/Icons-twitter.svg";
import linkedIn from "../../public/icons/linkedin.png";
import github from "../../public/icons/github.png";
import email from "../../public/icons/email.png";
import herobg from "../../public/herobg.svg";
import usericon from "../../public/icons/user.png";

function ProfileCard() {
  return (
    <section className="lg:fixed se:mx-auto lg:left-0  bg-white rounded-sm flex flex-col justify-center se:px-[70px] se:py-[30px] sp:px-[50px] sp:py-[30px] sn:px-[40px] sn:py-[20px] si:px-[100px] si:py-[50px] sr:px-[100px] sr:py-[50px] px-8 sp:w-screen sn:w-screen se:w-[100vw] si:w-screen si:mx-auto sr:w-[900px] sr:mx-auto  lg:w-[250px] 2xl:w-[300px] min-h-screen xl:h-screen ">
      <Image
        className="mx-auto  border-[2px] 2xl:border-[3px] border-[#FF4A2E] 2xl:w-[160px] 2xl:h-[160px] rounded-full p-1 2xl:p-2 si:w-[200px] si:h-[200px] sr:w-[250px] sr:h-[250px]"
        src={dp}
        alt="dp"
        width={110}
        height={110}
      />
      <div className="mt-[15px] 2xl:mt-[20px] xl:scale-95 si:mt-[25px] sr:mt-[30px] flex flex-col gap-[10px] si:gap-[20px] sr:gap-[25px] text-center se:justify-center sp:justify-center sn:justify-center">
        <div>
          <p className="font-[600]  text-[18px] si:text-2xl sr:text-3xl 2xl:text-3xl ">
            Punith Dandluri
          </p>
          <p className="font-[400] text-gray-600  text-sm si:text-xl sr:text-2xl 2xl:text-xl">
            Full-Time Undergraduate
          </p>
        </div>
        <div className="flex  flex-row gap-[5px] si:gap-[15px] sr:gap-[20px] 2xl:gap-[20px] justify-center">
          <a
            href="https://www.instagram.com/bad_captain_punith/"
            rel="noreferrer noopener"
            target="_blank"
            className="bg-[#FF4A2E] flex-shrink-0 bg-opacity-80 rounded-full p-[5px] ">
            <Image
              src={insta}
              alt="instagram"
              className="si:w-[25px] si:h-[25px]  sr:w-[30px] sr:h-[30px] 2xl:w-[20px] 2xl:h-[20px]"
            />
          </a>
          <a
            href="https://twitter.com/punithdandluri/"
            rel="noreferrer noopener"
            target="_blank"
            className="bg-[#FF4A2E] bg-opacity-80 flex-shrink-0 rounded-full p-[5px]">
            <Image
              src={x}
              alt="Twitter"
              className="si:w-[25px] si:h-[25px] sr:w-[30px] sr:h-[30px]  2xl:w-[20px] 2xl:h-[20px]"
            />
          </a>
          <a
            href="https://linkedin.com/in/punithdandluri/"
            rel="noreferrer noopener"
            target="_blank"
            className="bg-[#FF4A2E] bg-opacity-80 rounded-full flex-shrink-0 p-[5px]">
            <Image
              src={linkedIn}
              alt="linkedIn"
              width={15}
              className="si:w-[25px] si:h-[25px] sr:w-[30px] sr:h-[30px]  2xl:w-[20px] 2xl:h-[20px]"
            />
          </a>
          <a
            href="https://github.com/breathecode6365/"
            rel="noreferrer noopener"
            target="_blank"
            className="flex-shrink-0  bg-[#FF4A2E] bg-opacity-80 rounded-full p-[5px]">
            <Image
              src={github}
              alt="github"
              width={15}
              className="si:w-[25px]  si:h-[25px] sr:w-[30px] sr:h-[30px]  2xl:w-[20px] 2xl:h-[20px]"
            />
          </a>
          <a
            href="mailto:dandluripunith@gmail.com"
            rel="noreferrer noopener"
            target="_blank"
            className="bg-[#FF4A2E] flex-shrink-0 bg-opacity-80 rounded-full p-[5px]">
            <Image
              src={email}
              alt="email"
              width={15}
              className="si:w-[25px] si:h-[25px] sr:w-[30px] sr:h-[30px]  2xl:w-[20px] 2xl:h-[20px]"
            />
          </a>
        </div>
        <hr />
        <div className="flex flex-col text-[12px] si:text-lg sr:text-xl 2xl:text-[16px] gap-[10px] text-left">
          <div className="flex justify-between items-center">
            <span className="whitespace-pre  bg-[#FF4A2E] pl-1 pr-2 rounded-sm">
              {" "}
              Age:{" "}
            </span>
            <span className=" ">
              {" "}
              {new Date().getFullYear() - new Date("2004-01-14").getFullYear()}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="whitespace-pre  bg-[#FF4A2E] pl-1 pr-2 rounded-sm">
              {" "}
              Gender:{" "}
            </span>
            <span className=" "> Male</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="whitespace-pre  bg-[#FF4A2E] pl-1 pr-2 rounded-sm">
              {" "}
              Nationality:{" "}
            </span>
            <span className=""> Indian</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="whitespace-pre  bg-[#FF4A2E] pl-1 pr-2 rounded-sm">
              {" "}
              Status:{" "}
            </span>
            <span className="text-[#7EB942] flex-wrap"> Project Intern</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="whitespace-pre  bg-[#FF4A2E] pl-1 pr-2 rounded-sm"></span>
            <span className="text-[#7EB942] flex-wrap -mt-3">@ORACLE</span>
          </div>
        </div>
        <hr />
        <div className="flex flex-col text-gray-400 se:gap-4 sp:gap-3 sn:gap-2 sr:gap-5 si:text-lg sr:text-xl text-[12px] 2xl:text-lg">
          <p className="font-semibold text-black text-l si:text-lg sr:text-xl text-left mb-[15px]">
            Languages
          </p>
          <div>
            <div className="flex flex-row justify-between">
              <span className=" text-sm  ">Telugu</span>
              <span className=" text-sm  ">Native</span>
            </div>
            <div>
              <progress
                value={99}
                max={100}
                className="progress w-full rounded-sm "
              />
            </div>
          </div>
          <div>
            <div className="flex flex-row justify-between">
              <span className=" text-sm  ">English</span>
              <span className=" text-sm  ">Professional</span>
            </div>
            <div>
              <progress
                value={99}
                max={100}
                className="progress w-full rounded-sm"
              />
            </div>
          </div>
          <div>
            <div className="flex flex-row justify-between">
              <span className=" text-sm  ">Kannada</span>
              <span className=" text-sm  ">Conversational</span>
            </div>
            <div>
              <progress
                value={50}
                max={100}
                className="progress w-full rounded-sm"
              />
            </div>
          </div>
          <div>
            <div className="flex flex-row justify-between">
              <span className=" text-sm  ">Hindi</span>
              <span className=" text-sm  ">Beginner</span>
            </div>
            <div>
              <progress
                value={25}
                max={100}
                className="progress w-full rounded-sm"
              />
            </div>
          </div>
        </div>
        <hr />
        <a
          href="/PunithResume.pdf"
          download={true}
          className="bg-[#ff4a2e]  text-sm 2xl:text-lg text-white font-[600] sp:p-4 sn:p-3 se:p-4 py-2 px-2 2xl:p-3 si:py-4 sr:py-5 rounded-[8px] hover:translate-y-1 hover:scale-110 transition-all duration-500 ease-in-out">
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default ProfileCard;
