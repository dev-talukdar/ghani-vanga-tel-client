"use client";
import { useGetServiceQuery } from "@/redux/features/serviceApi/serviceApi";
import Image from "next/image";
import React from "react";

const ServiceDetailsPage = ({ params }: any) => {
  const { data: service } = useGetServiceQuery(params.id);
  console.log(service);

  const splitText = (text: any) => {
    const sentences = text.split(". ");
    const groups: any = [];
    let currentGroup = "";

    sentences.forEach((sentence: any, index: any) => {
      currentGroup += sentence + ". ";

      // After every third sentence or if it's the last sentence
      if ((index + 1) % 3 === 0 || index === sentences.length - 1) {
        groups.push(currentGroup.trim());
        currentGroup = "";
      }
    });

    return groups;
  };

  // Splitting description1 and description2 into groups
  const description1Groups = splitText(service?.data?.description1 || "");
  const description2Groups = splitText(service?.data?.description2 || "");

  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <div>
        <p className="text-center my-4 text-3xl font-bold text-slate-600">
          {service?.data?.title}
        </p>
        <div className="text-justify mb-8 text-slate-600">
          {description1Groups.map((group: any, index: any) => (
            <p key={index} className="mb-4">
              {group}
            </p>
          ))}
        </div>
      </div>
      <Image
        src={service?.data?.servicePhoto}
        height={1000}
        width={640}
        alt="Cash Flow Management"
        className="w-full h-auto mb-8"
      />
      <div className="text-justify mb-8 text-slate-600">
        {description2Groups.map((group: any, index: any) => (
          <p key={index} className="mb-4">
            {group}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
