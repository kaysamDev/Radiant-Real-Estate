import Image from "next/image";

export default function ServiceList() {
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
    },
  ];
  return (
    <>
      {serviceList.map((list) => (
        <div
          className="max-w-[300px] w-full min-h-[400px] px-4 py-8 shadow-md rounded-2xl"
          key={list.id}
        >
          {/* icon */}
          <div className="bg-foundation-primary w-12 aspect-square rounded-full grid place-content-center">
            <Image src={list.url} width={28} height={28} />
          </div>
          <div className="py-4">
            <h6>{list.header}</h6>
          </div>
          <ul className="pl-4">
            <li className="pb-4 list-disc"><small>{list.list[0]}</small></li>
            <li className="pb-4 list-disc"><small>{list.list[1]}</small></li>
            <li className="pb-4 list-disc"><small>{list.list[2]}</small></li>
          </ul>
        </div>
      ))}
    </>
  );
}
