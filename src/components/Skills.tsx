import React from "react";
import Image from "next/image";

const Skills = () => {
  const skillData = [
    {
      name: "C",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/695px-C_Programming_Language.svg.png",
      level: "Intermediate",
    },
    {
      name: "Python",
      img: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
      level: "Intermediate",
    },
    {
      name: "Java",
      img: "https://cdn.worldvectorlogo.com/logos/java.svg",
      level: "Intermediate",
    },
    {
      name: "C++",
      img: "https://cdn.worldvectorlogo.com/logos/c.svg",
      level: "Intermediate",
    },
    {
      name: "Next JS",
      img: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
      level: "Intermediate",
    },
    {
      name: "Tailwind CSS",
      img: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
      level: "Intermediate",
    },
    {
      name: "Spring Boot",
      img: "https://cdn.worldvectorlogo.com/logos/spring-3.svg",
      level: "Intermediate",
    },
    {
      name: "TypeScript",
      img: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
      level: "Intermediate",
    },
    {
      name: "Git",
      img: "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
      level: "Intermediate",
    },
    {
      name: "GitHub",
      img: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
      level: "Intermediate",
    },
    {
      name: "MySQL",
      img: "https://cdn.worldvectorlogo.com/logos/mysql-6.svg",
      level: "Intermediate",
    },

    {
      name: "Figma",
      img: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
      level: "Beginner",
    },
    {
      name: "Linux",
      img: "https://cdn.worldvectorlogo.com/logos/linux-tux.svg",
      level: "Beginner",
    },
    {
      name: "Leadership",
      img: "https://stephenblandino.com/wp-content/uploads/2021/07/leadership-icon-png-12.jpg.png",
    },
    {
      name: "Teamwork",
      img: "https://cdn-icons-png.flaticon.com/512/1116/1116827.png",
    },
    {
      name: "Communication",
      img: "https://cdn-icons-png.flaticon.com/512/1239/1239669.png",
    },
    {
      name: "Problem Solving",
      img: "https://cdn-icons-png.flaticon.com/512/6487/6487594.png",
    },
    {
      name: "Decision Making",
      img: "https://cdn-icons-png.flaticon.com/512/2755/2755557.png",
    },
    {
      name: "UI/UX Design",
      img: "https://cdn-icons-png.flaticon.com/512/2721/2721304.png",
    },
  ];

  return (
    <div className="gap-1 py-[20px]  2xl:py-[20px]  mt-2 flex flex-col items-start se:w-[100vw] sp:w-screen sn:w-screen sp:mx-auto sp:p-2 sn:mx-auto sn:pl-4 tabhor:w-[650px] si:w-screen 2xl:w-[900px] w-[800px] se:h-[250px] sp:h-[200px] sn:h-[200px] tabhor:h-[325px]  si:mx-auto sr:mx-auto sr:w-[900px] sp:ml-0 sn:ml-0 se:mx-auto tabhor:ml-[290px] mx-auto ">
      <span className="text-gray-600 si:w-screen si:text-center font-[700] text-lg sp:mx-auto sn:mx-auto se:mx-auto">
        Skills
      </span>
      <div className="grid grid-cols-5  si:grid-cols-4 tabhor:grid-cols-4 sp:grid-cols-3  sn:grid-cols-3  se:grid-cols-3 tabhor:gap-3 gap-1 w-full mt-4 ">
        {skillData.map((skill, index) => (
          <div
            key={index}
            id="skillcardmain"
            className="flex flex-col  justify-center items-center bg-white mr-2 py-2 px-3 text-center  text-sm h-[120px]  rounded-xl">
            <span className="font-[600] text-gray-800 sp:text-[12px] sn:text-[12px] se:text-[12px]">
              {skill.name}
            </span>
            <Image
              src={skill.img}
              alt={skill.name}
              className="p-3"
              width={50}
              height={50}
            />
            <span className="font-[600] text-gray-500 text-[10px]">
              {skill.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
