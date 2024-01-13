import PropTypes from "prop-types";
import "./Projects.css";

const ProjectCard = ({ data }) => {
  return (
    <div className="project-card">
      <div className="project-card-image">
        <img src={data.image} />
      </div>
      <div className="project-card-content">
        <h2 className="project-title">{data.title}</h2>
        <p className="project-desc">{data.desc}</p>
        <span className="d-flex align-items-center">
          <img src="calendar.svg" style={{ height: "16px" }} />
          <time style={{ color: "#BE8ABF" }}>{data.from}</time> -{" "}
          <time style={{ color: "#BE8ABF" }}>{data.to}</time>
        </span>
        <div className="project-tools">
          <h5>Tools Used:</h5>
          <ul className="row d-flex flex-row justify-content-around align-items-start tools-row">
            {data.tools.map((tool, idx) => {
              return (
                <li key={idx} className="col tools-item">
                  {tool}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="project-languages">
          <h5>Languages Used:</h5>
          <ul className="languages-row">
            {data.languages.map((tool, idx) => {
              return (
                <li key={idx} className="language-item">
                  <img src={tool.icon} />
                </li>
              );
            })}
          </ul>
        </div>
        <a
          className="repo-button"
          href={data.repo}
          rel="noreferrer"
          target="_blank"
        >
          Github
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  data: PropTypes.object,
};
export default ProjectCard;
