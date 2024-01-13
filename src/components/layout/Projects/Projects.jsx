import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const Projects = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("src/components/layout/Projects/projects-data.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

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
