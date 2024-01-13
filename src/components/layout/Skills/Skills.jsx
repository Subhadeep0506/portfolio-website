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
        <img src="src/assets/images/python.svg" className="skill-icons" />
        <img src="src/assets/images/pytorch.svg" className="skill-icons" />
        <img src="src/assets/images/tensorflow.svg" className="skill-icons" />
        <img src="src/assets/images/flask.svg" className="skill-icons" />
        <img src="src/assets/images/fastapi.svg" className="skill-icons" />
        <img src="src/assets/images/html.svg" className="skill-icons" />
        <img src="src/assets/images/css.svg" className="skill-icons" />
        <img src="src/assets/images/javascript.svg" className="skill-icons" />
        <img src="src/assets/images/react-skill.svg" className="skill-icons" />
        <img src="src/assets/images/git.svg" className="skill-icons" />
        <img src="src/assets/images/github-skill.svg" className="skill-icons" />
        <img src="src/assets/images/gcp.svg" className="skill-icons" />
        <img src="src/assets/images/azure.svg" className="skill-icons" />
        <img src="src/assets/images/postgresql.svg" className="skill-icons" />
        <img src="src/assets/images/postman.svg" className="skill-icons" />
        <img src="src/assets/images/vscode.svg" className="skill-icons" />
      </Marquee>
    </div>
  );
}

export default Skills;
