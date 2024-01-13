import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "src/components/layout/Experience/Experience.css";

const ExperienceTimelineItem = ({ data }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <div
          className="tag"
          style={
            data.category === "Internship"
              ? { backgroundColor: "#FF9843" }
              : { backgroundColor: "#539165" }
          }
        >
          {data.category}
        </div>
        <p className="org">{data.org}</p>
        <p className="location">
          <img
            src="src/assets/images/location.svg"
            style={{ height: "20px" }}
          />
          {data.location}
        </p>
        <p className="description">Description</p>
        <ul className="description">
          {data.desc.map((item, idx) => {
            return <li key={idx}>{item}</li>;
          })}
        </ul>
        <span>
          <img
            src="src/assets/images/calendar.svg"
            style={{ height: "16px" }}
          />
          <time style={{ color: "#BE8ABF" }}>{data.from}</time> -{" "}
          <time style={{ color: "#BE8ABF" }}>{data.to}</time>
        </span>
        <span className="circle" />
      </div>
    </div>
  );
};

ExperienceTimelineItem.propTypes = {
  data: PropTypes.object,
};

const Experience = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("src/components/layout/Experience/experience-data.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    data.length > 0 && (
      <div
        className="d-flex flex-column justify-content-end align-items-center"
        style={{ marginTop: "50px" }}
      >
        <h1>Experiences</h1>
        <div className="timeline-container">
          {data.map((d, idx) => (
            <ExperienceTimelineItem data={d} key={idx} />
          ))}
        </div>
      </div>
    )
  );
};

export default Experience;
