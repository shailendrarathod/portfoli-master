import "./portfolio.css";

import IMG1 from "../../assets/img 1.png";
import IMG2 from "../../assets/img 3.png";
import IMG3 from "../../assets/img 4.png";
import IMG4 from "../../assets/img 2.png";
import IMG5 from "../../assets/Jokes Project.jpg";
import IMG6 from "../../assets/Project4.jpg";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Rapido Website",
      img: IMG1,
      description:
        "An Rapido  website is a huge interactive platform to present various information for people.",
      technologies: "Html | CSS | Javascript",
      link: "https://shailendrarathod.github.io/rapido-website/",
      github: "https://github.com/shailendrarathod/rapido-website",
    },
    {
      id: 2,
      title: "Todo App",
      img: IMG4,
      description:
        "The Todo Tracking Project collects and publishes the most complete testing data available for all areas of the world.",
      technologies: "React | Redux",
      link: "https://react-todo-app-eta-sepia.vercel.app/",
      github: "https://github.com/shailendrarathod/react-todo-app",
    },
    {
      id: 3,
      title: "Authcation",
      img: IMG2,
      description: "This Authcation is a kind of social media platform. You can register and share your posts.",
      technologies: "React | Redux",
      link: "https://authcation-git-main-shailendrarathod.vercel.app/",
      github: "https://github.com/shailendrarathod/auth",
    },
    {
      id: 4,
      title: "E-Commerce website",
      img: IMG3,
      description:
        "E-commerce website in online product sale",
      technologies: "Html | CSS | JavaScript | React Js",
      link: "https://ecommerce-website-git-main-shailendrarathod.vercel.app/",
      github: "https://github.com/shailendrarathod/Ecommerce-website",
    },
    {
      id: 5,
      title: "Jokes Project with Typescript",
      img: IMG5,
      description:
        "For when you need a fast funny joke, here are some short jokes to get anyone giggling.",
      technologies: "Html | Styled-components | Typescript",
      link: "https://jokes-project.vercel.app/",
      github: "https://github.com/Rasif-Taghizada/Joke-App",
    },
    {
      id: 6,
      title: "Fs Poster Website",
      img: IMG6,
      description:
        "Real-world group project which is still in progress and will provide educational platform for future young developers",
      technologies: "Html | Scss | Javascript",
      link: "https://fs-poster-project.vercel.app/",
      github: "https://github.com/Rasif-Taghizada/Fs-Poster-Project",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
