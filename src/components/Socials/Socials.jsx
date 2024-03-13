import "./socials.scss";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";

export default function Socials() {
  const data = [
    { img: github, url: "https://github.com/reinabrera/" },
    { img: linkedin, url: "https://www.linkedin.com/in/abrerarein/" },
  ];
  return (
    <div className="socials flex items-center">
      {data.map((social, index) => {
        return (
          <div key={"social-item-" + index}>
            <a href={social.url} target="_blank">
              <img src={social.img} />
            </a>
          </div>
        );
      })}
    </div>
  );
}
