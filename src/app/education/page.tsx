import EduCard from "@/components/EduCard";
import React from "react";

const page = () => {
  const EduData = [
    {
      id: 1,
      head: "B.Tech · CSE - AIML",
      where: "GITAM (Deemed to be University), Bengaluru",
      info: "Currently in the 4th year (8th semester) of my undergraduate education at GITAM (Deemed to be University), Bengaluru. In this courses, I have gained a strong foundation in the core concepts of computer science and engineering, including programming, data structures, algorithms, operating systems, computer networks, database management systems, and software engineering.I have learnt how to solve problems using Data Structures and Algorithms, and how to design and develop software applications using Object-Oriented Programming. I have also gained a solid understanding of the fundamentals of Artificial Intelligence and Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, and Data Science.",
      date: "2021 - Present",
      marks: "SGPA: 9.7/10",
      aggregate: "CGPA : 9.47/10",
    },
    {
      id: 2,
      head: "Higher Secondary (Board of Intermediate Education, Andhra Pradesh)",
      where: "Kuppam Junior College, Kuppam ",
    info: "Successfully completed the INERMEDIATE PUBLIC examination conducted by Board of Intermediate Education, Andhra Pradesh. I had subjects like Mathematics, Physics, Chemistry and English. This achievement showcases my understanding and proficiency in the core subjects related to Science and Mathematics.",
      date: "2019-2021",
      marks: "Marks : 945/1000",
      aggregate: "Percentage : 94.5%",
    },
    {
      id: 3,
      head: "High School (Board of Secondary Education, Andhra Pradesh)",
      where: "Kuppam Public School, Kuppam",
      date: "2019",
      info: "Achieved a GPA of 9.7/10 in the Class-10th examination at Kuppam Public School. This accomplishment demonstrates my consistent dedication to academic excellence and sets the foundation for my subsequent educational achievements.",
      marks: "GPA : 9.7/10",
      aggregate: "",
    },
  ];
  return (
    <main className="flex flex-col w-screen justify-center items-center min-h-screen mb-5 2xl:mb-0 ">
      <span className="text-[#ff4a2e] font-[800] text-3xl text-left m-[30px]">
        Education
      </span>
      <div className="grid grid-cols-2 sp:grid-cols-1 sn:grid-cols-1  se:grid-cols-1 si:grid-cols-1 sr:grid-cols-1 tabhor:ml-[-40px]  gap-5">
        {EduData.map((data) => (
          <EduCard
            key={data.id}
            head={data.head}
            where={data.where}
            info={data.info}
            date={data.date}
            marks={data.marks}
            aggregate={data.aggregate}
          />
        ))}
      </div>
    </main>
  );
};

export default page;
