import ProjectCard from "@/components/ProjectCard";
import React from "react";

const page = () => {
  const projectData = [
    {
      title: "VMN : Venture Mentor Network",
      tags: ["full-stack","next-js", "spring-boot", "postgre-sql"],
      description:
        "A platform for connecting aspiring Entrepreneur (students) with mentors. Its is an Internship project for the Department of VDC, GITAM University. I have learnt and implemented Project Management techniques called Agile. I have did full-stack development using Next Js for front-end. Spring Boot for back-end and PostgreSql for database. We have used Git for version control and Jira for Project Management. I have tried to implement some practices like JWT Authentication, Role based access control, State Management.",
      link: "https://vmn-vdc.vercel.app/",
      github: "https://github.com/c-code-x/vmn-frontend/",
      img: "vmn.png",
    },
    {
      title: "Codex Club Website",
      tags: ["front-end","next-js"],
      description:
        "My first project as a web developer. I have used Next Js for front-end and As a beginner I have started transformation from React Js to Next Js. I have used CSS for styling and implemented Responsive Design. I have used Git for version control. I have learnt API calls and implemented it.",
      link: "https://codex-gitam.vercel.app/",
      github: "https://github.com/c-code-x/codex-website/",
      img: "codex.png",
    },
  ];
  return (
    <div className="flex flex-col  gap-5 min-h-screen overflow-x-hidden">
      <span className="text-4xl mt-[50px] w-full text-center font-bold text-[#ff4a2e]">
        Projects
      </span>
      <span className="text-2xl font-bold text-[#ff4a2e] w-screen sp:ml-0 sn:ml-0 se:ml-0 se:text-center ml-5 sp:text-center sn:text-center  border-b-2">
        Real-Time
      </span>
      <div
        id="scroller"
        className=" inline-flex overflow-x-scroll h-[600px]  scroll-smooth pl-2">
        {projectData.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              heading={project.title}
              tags={project.tags}
              description={project.description}
              link={project.link}
              github={project.github}
              img={project.img}
            />
          );
        })}
      </div>
    </div>
  );
};

export default page;
