import Address from "../Address/Address";
import Button from "../Button/Button";
import "./about-me.scss";
import Download from "../../assets/download.svg?react";
import resume from "../../assets/resume.pdf";
import Stats from "../Stats/Stats";

export default function AboutMe() {
  const data = [
    { count: 1, text: "Years Work Experience" },
    { count: 5, text: "Company Projects" },
    { count: 5, text: "Personal Projects" },
  ];

  return (
    <div className="about-me spacing">
      <div className="container mx-auto">
        <h2 className="section-title font-display">About Me</h2>
        <div className="wrapper">
          <p className="greetings base">
            Greetings! I’m Rein Abrera, a Software Developer
          </p>
          <div className="flex content-wrapper">
            <div className="content base">
              <p>
                Formerly a Junior WordPress Developer where I honed my skills in
                building and maintaining numerous WordPress websites. My journey
                in web development has led me to specialize in creating dynamic
                and interactive websites using PHP, CSS/SASS, JS, and, just
                recently, diving into other framework, languages and tools such as  C#, ASP.NET, EF Core, and more to fully expand my skills and
                knowledge in web development.
              </p>
              <p>
                Driven by a passion for learning and a thirst for challenges,
                I'm on a constant journey to elevate my skills and embrace best
                practices. My ultimate goal? To deliver top-notch projects
                characterized by high-quality, efficiency, responsive and
                pixel-perfection.
              </p>
              <p>
                Productivity and accountability are among my greatest strengths,
                coupled with an unwavering dedication to continuous improvement.
                I'm always eager to learn, improve and contribute to building
                something truly remarkable!
              </p>
            </div>
            <div>
              <Address />
              <Button>
                <a
                  href={resume}
                  download="ABRERA, REIN, D. - Resume"
                  className="flex items-center"
                >
                  Download my Resume <Download/>
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="stats-wrapper flex flex-center">
          <Stats data={data} />
        </div>
      </div>
    </div>
  );
}
