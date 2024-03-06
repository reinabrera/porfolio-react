import "./projects.scss";
import javascript from "../../assets/js.png";
import css from "../../assets/css.png";
import html from "../../assets/html.png";
import node from "../../assets/node.js.png";
import react from "../../assets/react.js.png";
import tailwind from "../../assets/tailwind.png";
import postgre from "../../assets/postgre.png";
import udemyClone from "../../assets/udemy-clone.png";
import simpleAnimeBrowser from "../../assets/simple-anime-browser.png";
import todoApp from "../../assets/todo-app.png";
import ProjectsItem from "./ProjectsItem";

export default function Projects() {
  const data = [
    {
      name: "Udemy Clone",
      img: udemyClone,
      description:
        "This project is a simple udemy clone webapp that primarily focused on the front-end development. React.js fundamentals were explored and applied throughout the development process. Additionaly, Tailwind CSS was exlored and utilized for the CSS framework used in this project. ",
      skills: [html, css, javascript, react, tailwind],
      preview: "https://udemy-clone-kappa.vercel.app/",
      code: "https://github.com/reinabrera/udemy-clone",
    },
    {
      name: "Simple Anime Browser",
      img: simpleAnimeBrowser,
      description:
        "This project is a simple anime browser that lets you search anime, shows the top upcoming anime and the top anime for the last 365 days. This project primarily focuses in front-end development with EJS rendering and express for API fetching.",
      skills: [html, javascript, node],
      preview: "https://simple-anime-browse.adaptable.app/",
      code: "https://github.com/reinabrera/simple-anime-browse",
    },
    {
      name: "Todo/Keeper App",
      img: todoApp,
      description:
        "This Todo App project is a template from Angela Yu's Web Development bootcamp. Primarly focuses in front-end development with React.js, this project helped me explore and learn the developmental process of React.js",
      skills: [react],
      preview: "https://todo-react-q6ufksrl1-reins-projects-dcb38f74.vercel.app/",
      code: "https://github.com/reinabrera/todo-react-app",
    },
  ];
  return (
    <div id="projects" className="projects spacing">
      <div className="container mx-auto">
        <h2 className="section-title">Personal Projects</h2>
        <div className="projects-items flex">
          {data.map((project, index) => {
            return <ProjectsItem key={"project-item-" + index} data={project} />
          })}
        </div>
      </div>
    </div>
  );
}
