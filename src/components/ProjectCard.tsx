import React from "react";
import Image from "next/image";
export type ProjectCardProps = {
  heading: string;
  tags: string[];
  description: string;
  link: string;
  github: string;
  img: string;
};

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div className="flex mr-5 bg-white h-max sn:mx-auto shadow-lg rounded-md p-1 w-[350px] flex-shrink-0 sn:w-[260px] ">
      <div className=" flex flex-col border p-2 gap-2 ">
        <Image
          alt="project-image"
          rel="noreferrer noopener"
          src={`/projects/${props.img}`}
          width={322}
          height={250}
          className="border sn:w-[300px]"
        />
        <span className="text-xl text-[#ff4a2e] font-[600]">
          {props.heading}
        </span>
        <div className="flex flex-wrap h-[60px] gap-2">
          {props.tags.map((tag, index) => {
            return (
              <span
                key={index}
                className="bg-[#ff4a2e] border-[#ff4a2e] border-[1px] bg-opacity-20 h-max w-max py-1 px-2 rounded-xl text-[#ff4a2e] font-[600] text-[12px]">
                {`#` + { tag }.tag}
              </span>
            );
          })}
        </div>
        <div className="text-[12px] text-gray-500 font-[600] h-full text-left">
          {props.description}
        </div>
        <div className="flex w-full p-1 justify-between items-center bottom-0 ">
          <a href={props.github} rel="noreferrer noopener" target="_blank">
            <Image
              alt="github-logo"
              title="Github Link"
              className="border-black border rounded-[50%] p-1 "
              src={"https://cdn-icons-png.flaticon.com/512/25/25231.png"}
              width={30}
              height={30}
            />
          </a>
          <a href={props.link} rel="noreferrer noopener" target="_blank">
            <Image
              alt="Live Link"
              title="Live Link"
              className="border-black border rounded-[50%] p-1"
              src={"https://cdn-icons-png.flaticon.com/128/3214/3214746.png"}
              width={30}
              height={30}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
