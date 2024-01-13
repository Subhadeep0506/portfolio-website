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
          <img src="location.svg" style={{ height: "20px" }} />
          {data.location}
        </p>
        <p className="description">Description</p>
        <ul className="description">
          {data.desc.map((item, idx) => {
            return <li key={idx}>{item}</li>;
          })}
        </ul>
        <span>
          <img src="calendar.svg" style={{ height: "16px" }} />
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
  const data = [
    {
      role: "Data Scientist",
      org: "Genpact LLC.",
      desc: [],
      from: "January 2024",
      to: "Present",
      location: "Bangalore. Karnataka",
      category: "Full-Time",
      skills: [],
    },
    {
      role: "Data Science Intern",
      org: "Genpact LLC.",
      desc: [
        "Developed state-of-the-art vision transformers for medical and industrial applications. Created explainable AI solutions to visualise and interpret model performance.",
        "Designed and built a Flask web application with an HTML user interface to efficiently utilise the model and provide real-time results. Conducted experiments with MONAI Deploy SDK for model deployment in the medical domain.",
        "Generated a comprehensive report comparing models based on key metrics such as performance, accuracy, training time, and inference time.",
        "Explored vision-language models tailored for medical applications.",
        "Developed smart agent based solution with Langchain to automate Doc QnA, Source Retrieval and Summarization with RAG, as a part of Genpact's Inhouse Hackathon.",
        "Explored few Multimodal VLMs for Visual Question Answering, focusing medical domain.",
        "Developed model for detecting AI generated text. Developed Gradio and FastAPI based User Interface utilizing the models.",
        "Experimented with Nvidia's RIVA framework and OOTB models for S2T, T2S and NMT tasks. Created a comprehensive report comparing performance of Nvidia's and open source audio models.",
      ],
      from: "July 2023",
      to: "December 2023",
      location: "Bangalore. Karnataka",
      category: "Internship",
    },
    {
      role: "Data Science Intern",
      org: "iNeuron.ai",
      desc: [
        "Built a stock price prediction model using Machine Learning. Developed the pipeline using Machine Learning algorithms like Decision Tree and XGBoost.",
        "Built a sentiment classification system using NLP and Logistic Regression, using twitter data.",
      ],
      from: "August 2022",
      to: "October 2022",
      location: "Bangalore, Karnataka [remote]",
      category: "Internship",
    },
    {
      role: "Flutter Development Intern",
      org: "Indian Institute of Technology, Bombay",
      desc: [
        "Developed a Fashion application with Flutter. Worked mainly on UI-UX, user Data Caching and other features.",
        "Learnt about Flutter BLoC design pattern, integrating RESTful API with Flutter and persisting data locally using Flutter Hive.",
      ],
      from: "January 2022",
      to: "June 2022",
      location: "Mumbai, Maharashtra [remote]",
      category: "Internship",
    },
    {
      role: "App Development Intern",
      org: "The Sparks Foundation",
      desc: [
        "Developed a mobile banking application using Java and Android SDK. Integrated functionalities like login with social media, money transfer between multiple users.",
        "Learnt about authentication and authorization, persisting data locally in SQLite database and designing responsive interface to support mobile and tablet devices.",
      ],
      from: "July 2021",
      to: "August 2021",
      location: "Remote",
      category: "Internship",
    },
  ];

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
