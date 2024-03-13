import "./timeline.scss";
import TimelineItem from "./TimelineItem";
import Offshorly from "../../assets/offshorly_logo.svg?react";
import FeuLogo from "../../assets/feu_logo.svg?react";
import Briefcase from "../../assets/briefcase.svg?react";
import Graduate from "../../assets/graduate.svg?react";
import Diamond from "../../assets/diamond.svg?react";

export default function Timeline() {
  const data = [
    {
      date: "September 2022 - June 2023",
      job_title: "Junior WordPress Developer",
      description:
        "Built several WordPress custom themes, website expansion, redesign and maintain WordPress websites.",
      company_name: "Offshorly",
      company_logo: Offshorly,
      icon: Briefcase,
    },
    {
      date: "April 2022 - August 2022",
      job_title: "WordPress Developer Intern",
      company_name: "Offshorly",
      description:
        "Familiarize myself to WordPress ecosystem, boilerplate and CSS frameworks.",
      company_logo: Offshorly,
      icon: Briefcase,
    },
    {
      date: "September 2018 - February 2023",
      description: "Graduate with a Bachelor of Science in Computer Engineering",
      company_name: "FEU Alabang",
      company_logo: FeuLogo,
      icon: Graduate,
    },
  ];

  return (
    <div className="my-timeline spacing">
      <div className="container mx-auto">
        <div className="flex content-wrapper">
          <h2 className="section-title font-display">My timeline</h2>
          <div className="wrapper">
            <div className="timeline-items--wrapper">
              <div className="timeline-items">
                {data.map((item, index) => {
                  return (
                    <TimelineItem key={"timeline-item-" + index} data={item} />
                  );
                })}
              </div>
              <div className="diamond top">
                <Diamond />
              </div>
              <div className="diamond bottom">
                <Diamond />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
