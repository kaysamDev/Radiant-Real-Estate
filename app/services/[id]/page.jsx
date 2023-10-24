import Project from "@/app/Project";
import CallToAction from "@/app/components/CallToAction";
import { ArrowBigLeftIcon } from "lucide-react";
import Image from "next/image";

export default function page({ params }) {
  const serviceList = [
    {
        id: 1,
        url: "/images/services/market-analysis.png",
        header: "Rarket Analysis and Strategy",
        list: [
          "Market research and competitor analysis",
          "Risk assessment and mitigation",
          "Strategic positioning and product conceptualization",
        ],
        alt: "market analysis image",
        img: "/images/single-service.png"
      },
      {
        id: 2,
        url: "/images/services/finance-planing.png",
        header: "Project Feasibility and Financial Planning",
        list: [
          "Feasibility studies and financial modeling",
          "Site selection and acquisition",
          "Legal and regulatory compliance",
        ],
        alt: "finance planning image",
        img: "/images/single-service.png"
      },
      {
        id: 3,
        url: "/images/services/project-management.png",
        header: "Project and Customer Management",
        list: [
          "Project management, delivery and execution",
          "Sales & Marketing Strategy",
          "CRM setup and post-sales support",
        ],
        alt: "project management image",
        img: "/images/single-service.png"
      },
      {
        id: 4,
        url: "/images/services/market-analysis.png",
        header: "Integrated Real Estate Services",
        list: [
          "Real Estate Development",
          "Facilities Management",
          "Owners Association Management",
        ],
        alt: "market analysis image",
        img: "/images/single-service.png"
      },
  ];

  const myId = params.id;
  const findService = serviceList.find((service) => service.id == myId);
  return (
    <>
        <div className="container my-16">
          <div className="bg-foundation-primary px-4 py-4">
            <div
              className="
            w-10
            aspect-square
            bg-blue
            rounded-full
            text-white
            flex
            items-center
            justify-center
            "
            >
              <ArrowBigLeftIcon fill="white" />
            </div>
            <div className="
            flex
            flex-col
            lg:flex-row
            items-center
            justify-center
            md:justify-between
            px-4
            py-4
            md:px-8">
              <div className="max-w-[40rem]">
                <h2 className="text-black mb-8 hidden lg:block">{findService.header}</h2>
                <p className="mb-6">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores rerum autem dolorum inventore provident, dicta voluptas
                  voluptatibus ipsa. quia in rerum autem dolorum inventore
                  provident, dicta voluptas voluptatibus ipsa.
                </p>
                <p className="mb-6">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores rerum autem dolorum inventore provident, dicta voluptas
                  voluptatibus ipsa. quia in rerum autem dolorum inventore
                  provident, dicta voluptas voluptatibus ipsa. voluptatibus ipsa.
                  quia in rerum autem dolorum inventore provident, dicta voluptas
                  voluptatibus ipsa.
                </p>
              </div>
              <div>
                <Image
                  src={findService.img}
                  alt={findService.alt}
                  width={396}
                  height={396}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Browse projects */}
        <div className="bg-foundation-primary py-4">
            <Project/>
        </div>
        {/* Browse projects */}

        {/* Call to action */}
        <div className="pt-44 pb-28 overflow-x-hidden">
            <CallToAction />
        </div>
        {/* Call to action */}
    </>
  );
}
