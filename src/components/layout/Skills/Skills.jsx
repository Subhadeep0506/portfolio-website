import Marquee from "react-fast-marquee";
import "./Skills.css";
function Skills() {
  return (
    <div className="skills">
      <h1 className="skills-heading">Skills and Tools I Work with</h1>
      <Marquee
        className="marquee"
        pauseOnHover={true}
        gradient={true}
        gradientColor={"#3b3b3b9e"}
      >
        <img src="src/assets/skills/python.svg" className="skill-icons" />
        <img src="src/assets/skills/pytorch.svg" className="skill-icons" />
        <img src="src/assets/skills/tensorflow.svg" className="skill-icons" />
        <img src="src/assets/skills/flask.svg" className="skill-icons" />
        <img src="src/assets/skills/fastapi.svg" className="skill-icons" />
        <img src="src/assets/skills/html.svg" className="skill-icons" />
        <img src="src/assets/skills/css.svg" className="skill-icons" />
        <img src="src/assets/skills/javascript.svg" className="skill-icons" />
        <img src="src/assets/skills/react.svg" className="skill-icons" />
        <img src="src/assets/skills/git.svg" className="skill-icons" />
        <img src="src/assets/skills/github.svg" className="skill-icons" />
        <img src="src/assets/skills/gcp.svg" className="skill-icons" />
        <img src="src/assets/skills/azure.svg" className="skill-icons" />
        <img src="src/assets/skills/postgresql.svg" className="skill-icons" />
        <img src="src/assets/skills/postman.svg" className="skill-icons" />
        <img src="src/assets/skills/vscode.svg" className="skill-icons" />
      </Marquee>
    </div>
  );
}

export default Skills;
