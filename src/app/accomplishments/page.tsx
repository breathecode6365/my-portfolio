import CertificateCard from "../../components/CertificationCard";
import React from "react";

const page = () => {
    const CertificateData = [
      {
        title: "AI-ML(AWS) Virtual Internship - EduSkills",
        description:
          "This contains two courses. One is AWS Academy Cloud Foundations and AWS Academy Machine Learning Foundation. AWS Academy Machine Learning Foundation introduces students to the concepts and terminology of Artificial Intelligence and machine learning. By the end of this course, students will be able to select and apply machine learning services to resolve business problems. They will also be able to label, build, train, and deploy a custom machine learning model through a guided, hands-on approach.AWS Academy Cloud Foundations is intended for students who seek an overall understanding of cloud computing concepts, independent of specific technical roles. It provides a detailed overview of cloud concepts,AWS core services, security, architecture, pricing, and support.",
        image: "awsaiml.png",
        link: "https://www.credly.com/badges/31bc2241-2371-4a76-8a48-54b46228eb6f/public_url",
      },
    ];
  return (
    <div className="w-screen flex flex-col  gap-5 min-h-screen overflow-x-hidden">
      <span className="text-4xl mt-[50px] sn:text-xl w-full text-center font-bold text-[#ff4a2e] flex justify-center flex-wrap">
        Accomplishments
      </span>
      <div>
        {CertificateData.map((certificate, index) => {
          return (
            <CertificateCard
              key={index}
              title={certificate.title}
              description={certificate.description}
              image={certificate.image}
              link={certificate.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default page;
