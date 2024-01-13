import ProjectCard from "src/components/layout/Projects/ProjectCard";
import "src/components/layout/Projects/Projects.css";

const Projects = () => {
  const data = [
    {
      title: "Plant Disease Detection",
      image: "plant-disease-detection.png",
      desc: "Final year project on Plant disease detection using Deep Learning.",
      from: "October 2022",
      to: "February 2023",
      repo: "https://github.com/Subhadeep0506/plant-disease-detection",
      tools: ["OpenCV", "Tensorflow", "Numpy", "Flask", "JQuery"],
      languages: [
        { name: "Python", icon: "python.svg" },
        {
          name: "JavaScript",
          icon: "javascript.svg",
        },
        { name: "HTML", icon: "html.svg" },
        { name: "CSS", icon: "css.svg" },
      ],
    },
    {
      title: "Peek-A-Geek",
      image: "peek-a-geek.png",
      desc: "Peek-A-Geek is a web-based platform for professionals, preciesely developers, to explore other developers' profile, their Github repositories and also communicate with them through posts. Our application is responsive, so you can open it in all kinds of devices.",
      from: "March 2022",
      to: "August 2022",
      repo: "https://github.com/Subhadeep0506/Peek-A-Geek",
      tools: ["React", "NodeJS", "Express", "MongoDB", "Bootstrap"],
      languages: [
        {
          name: "JavaScript",
          icon: "javascript.svg",
        },
        { name: "CSS", icon: "css.svg" },
      ],
    },
    {
      title: "Flask E-Commerce REST API",
      image: "flask-api.jpg",
      desc: "An ECommerce RESTful API, Using Flask, Flask SQLAlchemy, Marshmallow and other libraries.",
      from: "January 2022",
      to: "March 2022",
      repo: "https://github.com/Subhadeep0506/ECommerce-Store-REST-API",
      tools: ["Flask", "Flask-RESTful", "PostgreSQL", "Postman"],
      languages: [{ name: "Python", icon: "python.svg" }],
    },
    {
      title: "Movie Recommendation System",
      image: "movie-recommendation-system.jpg",
      desc: "A data driven AI movie recommendation system application that leverages Machine Learning to recommend movies to users, based on their likes.",
      from: "March 2022",
      to: "April 2022",
      repo: "https://github.com/Subhadeep0506/movie-recommendation-system",
      tools: ["Scikit-Learn", "Pandas", "Flask", "Flask-RESTful"],
      languages: [{ name: "Python", icon: "python.svg" }],
    },
    {
      title: "Flutter Test Application",
      image: "test-application.png",
      desc: "Timed test application using flutter framework.",
      from: "January 2022",
      to: "June 2022",
      repo: "https://github.com/Subhadeep0506/test-application",
      tools: ["Flutter"],
      languages: [{ name: "Dart", icon: "dart.svg" }],
    },
  ];

  return (
    data.length > 0 && (
      <div className="container">
        <div
          className="d-flex flex-column justify-content-end align-items-center"
          style={{ marginTop: "50px" }}
        >
          <h1>Projects</h1>
          <div className="row d-flex justify-content-around align-items-start projects-container">
            {data.map((d, idx) => (
              <ProjectCard data={d} key={idx} className="col" />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default Projects;
