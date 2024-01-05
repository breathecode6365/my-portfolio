"use client";
import React, { useEffect } from "react";
import Image from "next/image";

export type CertificationCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const CertificationCard = (props: CertificationCardProps) => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.addEventListener("contextmenu", (e) => {
        if ((e.target as HTMLElement).nodeName === "IMG") {
          e.preventDefault();
        }
      });
    }
  }, []);
  
  return (
    <div className="bg-white flex rounded-md p-2 sp:w-[350px] sn:w-[250px] se:w-[400px]  w-[800px]  mx-auto">
      <div className="border flex sp:justify-center se:justify-center sn:justify-center items-center justify-between w-full flex-row sp:flex-col se:flex-col sn:flex-col">
        <a
          href={props.link}
          rel="noreferrer noopener"
          target="_blank"
          className="w-[300px] sp:w-[200px] sn:w-[200px] se:w-[250px] h-full sp:h-max se:h-max sn:h-max overflow-hidden flex flex-shrink-0  p-2">
          <Image
            onClick={(e) => {
              e.preventDefault();
            }}
            onTouchStart={(e) => {
              e.preventDefault();
            }}
            alt="certificate"
            draggable={false}
            contentEditable={false}
            width={300}
            height={200}
            className="object-scale-down w-full h-full"
            src={`/certificates/${props.image}`}
            about="Certificate"
          />
        </a>
        <div className="flex-col flex p-2 gap-3">
          <span className="font-[600] text-[#ff4a2e] sn:text-[12px] sp:text-sm se:text-sm text-lg">
            {props.title}
          </span>
          <p className="text-[12px] sn:text-[10px] text-gray-500">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;
