import PropTypes from "prop-types";

import "src/components/layout/Education/Education.css";

const EducationTimelineItem = ({ data }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <div className="tag">
          {data.category === "school" ? (
            <img src="school.svg" style={{ height: "50px" }} />
          ) : (
            <img src="university.svg" style={{ height: "50px" }} />
          )}
        </div>
        <p className="school">{data.school}</p>
        <span>
          <img src="calendar.svg" style={{ height: "16px" }} />
          <time style={{ color: "#BE8ABF" }}>{data.from}</time> -{" "}
          <time style={{ color: "#BE8ABF" }}>{data.to}</time>
        </span>
        <p className="location">
          <img src="location.svg" style={{ height: "20px" }} />
          {data.location}
        </p>
        <h6 style={{ color: "#FFE0AC" }}>
          <img src="graduation.svg" style={{ height: "20px" }} />
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
  const data = [
    {
      school: "Haldia Institute of Technology",
      degree: "Bachelor of Technology, Computer Science [MAKAUT]",
      from: "July 2019",
      to: "June 2023",
      location: "Haldia, West Bengal",
      grade: "9.15 CGPA",
      category: "university",
    },
    {
      school: "Sri Chaitanya Educational Institution, Steel Plant Campus",
      degree: "Higher Secondary Education [BIEAP]",
      from: "June 2017",
      to: "May 2019",
      location: "Visakhapatnam, Andhra Pradesh",
      grade: "8.23 CGPA",
      category: "school",
    },
    {
      school: "De Paul School, Visakhapatnam",
      degree: "Secondary Education [CISCE]",
      from: "June 2013",
      to: "May 2017",
      location: "Visakhapatnam, Andhra Pradesh",
      grade: "91.8%",
      category: "school",
    },
  ];

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
