import Marquee from "react-fast-marquee";
import "src/components/layout/Skills/Skills.css";

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
        <img src="python.svg" className="skill-icons" />
        <img src="pytorch.svg" className="skill-icons" />
        <img src="tensorflow.svg" className="skill-icons" />
        <img src="flask.svg" className="skill-icons" />
        <img src="fastapi.svg" className="skill-icons" />
        <img src="html.svg" className="skill-icons" />
        <img src="css.svg" className="skill-icons" />
        <img src="javascript.svg" className="skill-icons" />
        <img src="react-skill.svg" className="skill-icons" />
        <img src="git.svg" className="skill-icons" />
        <img src="github-skill.svg" className="skill-icons" />
        <img src="gcp.svg" className="skill-icons" />
        <img src="azure.svg" className="skill-icons" />
        <img src="postgresql.svg" className="skill-icons" />
        <img src="postman.svg" className="skill-icons" />
        <img src="vscode.svg" className="skill-icons" />
      </Marquee>
    </div>
  );
}

export default Skills;
