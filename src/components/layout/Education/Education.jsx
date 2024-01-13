import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./Education.css";

const EducationTimelineItem = ({ data }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <div className="tag">
          {data.category === "school" ? (
            <img src="src/assets/images/school.svg" style={{ height: "50px" }} />
          ) : (
            <img src="src/assets/images/university.svg" style={{ height: "50px" }} />
          )}
        </div>
        <p className="school">{data.school}</p>
        <span>
          <img src="src/assets/images/calendar.svg" style={{ height: "16px" }} />
          <time style={{ color: "#BE8ABF" }}>{data.from}</time> -{" "}
          <time style={{ color: "#BE8ABF" }}>{data.to}</time>
        </span>
        <p className="location">
          <img src="src/assets/images/location.svg" style={{ height: "20px" }} />
          {data.location}
        </p>
        <h6 style={{ color: "#FFE0AC" }}>
          <img src="src/assets/images/graduation.svg" style={{ height: "20px" }} />
          {data.degree}
        </h6>
        <p style={{ color: "#FFAAA5" }}>Grade: {data.grade}</p>
        <span className="circle" />
      </div>
    </div>
  );
};

EducationTimelineItem.propTypes = {
  data: PropTypes.object,
};

const Education = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("src/components/layout/Education/education-data.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    data.length > 0 && (
      <div className="d-flex flex-column justify-content-end align-items-center">
        <h1>Education</h1>
        <div className="timeline-container">
          {data.map((d, idx) => (
            <EducationTimelineItem data={d} key={idx} />
          ))}
        </div>
      </div>
    )
  );
};

export default Education;
