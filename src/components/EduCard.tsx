import React from "react";

export type EduCardProps = {
  head: string;
  where: string;
  info: string;
  date: string;
  marks: string;
  aggregate: string;
};

const EduCard = (props: EduCardProps) => {
  return (
    <div className=" w-[500px] tabhor:w-[400px] 2xl:w-[600px] se:w-[400px] sp:w-[350px]  sn:w-[260px] h-max m-0 rounded-xl shadow-xl">
      <div className=" bg-white  rounded-tl-xl rounded-tr-xl flex flex-row justify-between p-2">
        <div className="flex flex-col p-2 ">
          <h1 className="font-bold text-xl 2xl:text-2xl  text-[#ff4a2e]">
            {props.head}
          </h1>
          <h1 className="font-semibold text-lg 2xl:text-xl text-gray-400 ">
            {props.where}
          </h1>
        </div>
        <div className=" bg-gray-100 tabhor:w-[150px] sp:text-[8px] sn:text-[8px] text-[12px] 2xl:text-[14px] 2xl:w-[150px] w-[100px] sp:w-[120px] se:w-[120px] h-max text-center p-1 ">
          <p>{props.date}</p>
        </div>
      </div>
      <div className="p-2 bg-gray-100 text-left text-[12px]">
        <p className="text-gray-500">{props.info}</p>
      </div>
      <div className="bg-[#fff] flex flex-row justify-between p-2">
        <span className="text-gray-500 text-xs font-bold">
          {" "}
          {props.marks ? props.marks.split(":")[0] + " : " : ""}
          <span className="text-[#ff4a2e]">
            {props.marks ? props.marks.split(":")[1] : ""}
          </span>
        </span>
        <span className="text-gray-500 text-xs font-bold">
          {" "}
          {props.aggregate ? props.aggregate.split(":")[0] + " : " : ""}
          <span className="text-[#ff4a2e]">
            {props.aggregate ? props.aggregate.split(":")[1] : ""}
          </span>
        </span>
      </div>
    </div>
  );
};

export default EduCard;
