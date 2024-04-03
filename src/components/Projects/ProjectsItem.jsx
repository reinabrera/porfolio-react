import { useState } from "react";
import view from "../../assets/view.svg";
import code from "../../assets/code.svg";
import { isMobile } from "react-device-detect";

export default function ProjectsItem({ data }) {
  const [isHidden, setIsHidden] = useState(true);

  const handleMouseOver = () => {
    setIsHidden((prev) => !prev);
  };

  return (
    <div className="item flex" onMouseEnter={!isMobile ? handleMouseOver : null} onMouseLeave={!isMobile ? handleMouseOver : null} onClick={isMobile ? handleMouseOver : null}>
      <div className="content">
        <div className="featured-img--wrapper relative">
          <div
            key={"is-hidden-" + isHidden}
            className={`absolute overlay flex items-center flex-center ${isHidden ? "hidden" : ""}`}
          >
            <div className="links--wrapper">
              <div className="links flex flex-center align-center">
                {data.preview && (
                  <div className="link--wrapper">
                    <a href={data.preview} target="_blank">
                      <img src={view} alt="preview icon" />
                    </a>
                  </div>
                )}
                {data.code && (
                  <div className="link--wrapper">
                    <a href={data.code} target="_blank">
                      <img src={code} alt="code icon" />
                    </a>
                  </div>
                )}
              </div>
            </div>
            <div className="skills-used">
              <div className="flex items-center flex-center">
                {data.skills.map((skill, index) => {
                  return (
                    <div key={"project-skill-item-"+ index} className="img">
                      <img
                        key={"skill-item-" + index}
                        className={"img-" + index}
                        src={skill}
                        alt="skill icon"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <img
            className={`featured-img ${data.customCss ? data.customCss : ''}`}
            src={data.img}
            alt={data.name + " " + "image"}
          />
        </div>
        <div className="wrapper">
          <h4 className="project-title base">{data.name}</h4>
          <p className="description small">{data.description}</p>
        </div>
      </div>
    </div>
  );
}
