import "./skills.scss";
import javascript from "../../assets/js.png";
import css from "../../assets/css.png";
import html from "../../assets/html.png";
import scss from "../../assets/scss.png";
import git from "../../assets/git.png";
import node from "../../assets/node.js.png";
import react from "../../assets/react.js.png";
import wp from "../../assets/wp.png";
import php from "../../assets/php.png";
import python from "../../assets/python.png";
import tailwind from "../../assets/tailwind.png";
import uikit from "../../assets/uikit.png";
import postgre from "../../assets/postgre.png";
import figma from "../../assets/figma.png";
import passport from "../../assets/passport.js.png";
import SkillsItems from "./SkillsItem";

export default function Skills() {
  const data = [
    { name: "Javascript", img: javascript },
    { name: "CSS", img: css },
    { name: "HTML", img: html },
    { name: "SCSS", img: scss },
    { name: "Git", img: git },
    { name: "Node.js", img: node },
    { name: "React.js", img: react },
    { name: "WordPress", img: wp },
    { name: "PHP", img: php },
    { name: "Python", img: python },
    { name: "Passport.js", img: passport},
    { name: "Tailwind CSS", img: tailwind },
    { name: "UIkit", img: uikit },
    { name: "PostgreSQL", img: postgre },
    { name: "Figma", img: figma },
  ];

  return (
    <div className="skills spacing">
      <div className="container mx-auto">
        <h2 className="section-title">Skills</h2>
        <div className="skills-items--wrapper mx-auto">
          <div className="skills-items flex">
            {data.map((skill, index) => {
              return <SkillsItems key={index} data={skill} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
