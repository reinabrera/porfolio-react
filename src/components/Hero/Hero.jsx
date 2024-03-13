import Button from "../Button/Button";
import "./hero.scss";
import DownArrow from "../../assets/down-arrow.svg?react";
import YourSvg from '../../assets/download.svg?react';
import resume from "../../assets/resume.pdf";

export default function Hero() {
  return (
    <div className="hero">
      <div className="container mx-auto text-center">
        <span className="tag small">Hey there, I’m Rein</span>
        <h1 className="title font-display">Front-end React.js Developer</h1>
        <p className="description base mx-auto">
          I’m passionate about building interactive and responsive websites. My
          current focus lies in mastering and exploring React.js for frontend
          web development.
        </p>  
        <div className="hero-btns flex flex-center">
          <div className="download-btn">
            <Button>
              <a
                href={resume}
                className="flex items-center flex-center"
                download="renamed.pdf"
              >
                Download my Resume 
                <YourSvg />
              </a>
            </Button>
          </div>
          <div className="projects-btn">
            <Button>
              <a href="#projects" className="flex items-center flex-center">
                See my projects <DownArrow />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
