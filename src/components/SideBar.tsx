"use client";
import React, { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import home from "../../public/icons/Icons/Home.svg";
import education from "../../public/icons/Icons/cv.svg";
import projectsicon from "../../public/icons/Icons/projects.png";
import certificateicon from "../../public/icons/Icons/certificates.png";
import closeicon from "../../public/icons/close.png";
import menu from "../../public/icons/menu.png";
import Link from "next/link";

const SideBar = () => {
  const sidebarRef = useRef<HTMLDivElement>(null); // Initialize useRef with the correct type
  const [open, setOpen] = React.useState(false);
  const toggleSidebar = () => {
    setOpen(!open);
  };

  const closeSidebar = () => {
    setOpen(false);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      sidebarRef.current.contains(event.target as Node) && // Use contains method on sidebarRef.current
      event.target instanceof HTMLElement &&
      !event.target.classList.contains("navbar-button")
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="fixed">
      <button
        onClick={toggleSidebar}
        className="fixed p-5 lg:hidden z-50 bg-[#FF4A2E] rounded-[50%] top-2 right-2">
        <Image
          alt="close button"
          src={open ? closeicon : menu}
          width={15}
          height={15}
        />
      </button>
      <div
        id="overlay"
        className={`${
          open ? "block" : "hidden"
        } fixed inset-0 bg-black opacity-50 backdrop-blur-md`}></div>
      <div
        id="sidebar-mobile"
        ref={sidebarRef}
        className={`lg:hidden flex flex-col  text-xl gap-10 font-[700] justify-center items-center h-screen ${
          open ? "w-[250px]" : "w-0"
        } duration-500 z-40 fixed right-0 bg-white backdrop-blur-xl  overflow-hidden `}>
        <a
          href="/"
          className={`rounded-lg w-[200px] h-[50px] ${
            usePathname() !== "/" ? "bg-[#f0f0f6]" : "bg-[#ff4a2e]"
          } items-center flex justify-center`}>
          <span>Home</span>
        </a>
        <a
          href="/education"
          className={`rounded-lg w-[200px] h-[50px] ${
            usePathname() !== "/education" ? "bg-[#f0f0f6]" : "bg-[#ff4a2e]"
          } items-center flex justify-center`}>
          <span>Education</span>
        </a>
        <a
          href="/projects"
          className={`rounded-lg w-[200px] h-[50px] ${
            usePathname() !== "/projects" ? "bg-[#f0f0f6]" : "bg-[#ff4a2e]"
          } items-center flex justify-center`}>
          <span>Projects</span>
        </a>
        <a
          href="/accomplishments"
          className={`rounded-lg w-[200px] h-[50px] ${
            usePathname() !== "/accomplishments" ? "bg-[#f0f0f6]" : "bg-[#ff4a2e]"
          } items-center flex justify-center`}>
          <span>Accomplishments</span>
        </a>
      </div>
      <div className="hidden lg:fixed lg:right-0 lg:flex lg:flex-col lg:bg-white lg:h-screen lg:items-center lg:justify-center  lg:w-[100px] ">
        <div className="flex flex-col items-center text-center justify-center gap-10">
          <a href="/" className="iconer tooltip">
            <div
              className={`flex items-center text-center justify-center hover:bg-[#FF4A2E] ${
                usePathname() !== "/"
                  ? "bg-[#f0f0f6] hover:bg-[#FF4A2E]"
                  : "bg-[#ff4a2e]"
              } rounded-[50%] p-2 `}>
              <Image src={home} alt="home icon" width={20} height={20} />
            </div>
            <span className="tooltiptext text-sm">Home</span>
          </a>
          <a  href="/education" className="iconer tooltip relative">
            <div
              className={`flex items-center text-center justify-center hover:bg-[#FF4A2E] ${
                usePathname() !== "/education"
                  ? "bg-[#f0f0f6] hover:bg-[#FF4A2E]"
                  : "bg-[#ff4a2e]"
              } rounded-[50%] p-2 `}>
              <Image
                src={education}
                alt="education icon"
                width={20}
                height={20}
              />
            </div>
            <span className="tooltiptext text-sm">Education</span>
          </a>
          <a href="/projects" className="iconer tooltip relative">
            <div
              className={`flex items-center text-center justify-center hover:bg-[#FF4A2E] ${
                usePathname() !== "/projects"
                  ? "bg-[#f0f0f6] hover:bg-[#FF4A2E]"
                  : "bg-[#ff4a2e]"
              } rounded-[50%] p-2 `}>
              <Image
                src={projectsicon}
                alt="Projects icon"
                width={20}
                height={20}
              />
            </div>
            <span className="tooltiptext text-sm">Projects</span>
          </a>
          <a href="accomplishments" className="iconer tooltip relative">
            <div
              className={`flex items-center text-center justify-center  ${
                usePathname() !== "/accomplishments"
                  ? "bg-[#f0f0f6] hover:bg-[#FF4A2E]"
                  : "bg-[#ff4a2e]"
              } rounded-[50%] p-2 `}>
              <Image
                src={certificateicon}
                alt="Certificates icon"
                width={21}
                height={21}
              />
            </div>
            <span className="tooltiptext text-sm">Accomplishments</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
