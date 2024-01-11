import "./Profile.css";
import Tilt from "react-parallax-tilt";

function Profile() {
  return (
    <>
      <div className="profile">
        <Tilt
          // className="parallax-effect-glare-scale"
          // perspective={500}
          // glareEnable={true}
          // glareMaxOpacity={0.45}
          // scale={1.02}
          className="parallax-effect-img"
          tiltMaxAngleX={40}
          tiltMaxAngleY={40}
          perspective={800}
          transitionSpeed={1500}
          scale={1.1}
          gyroscope={true}
        >
          <div className="avatar">
            <img src="src/assets/avatar.jpeg" alt="Avatar" />
          </div>
        </Tilt>
        <div className="avatar-title">
          <div className="avatar-title-content">
            <h1 style={{ color: "#FF9843" }}>
              Hi <img src="src/assets/hello.gif"></img>, I am{" "}
              <span style={{ color: "#7ED7C1", marginLeft: "6px"}}>Subhadeep</span>
            </h1>
            <h1 style={{ color: "#FF9843" }}>Mandal</h1>
            <br />
            <h2 style={{ color: "#A1EEBD" }}>Data Science</h2>
            <h2 style={{ color: "#F6F7C4" }}>AI/ML</h2>
            <h2 style={{ color: "#F6D6D6" }}>Softwere Development</h2>
            <br />
            <h3 style={{ color: "#FF8080" }}>
              <img src="src/assets/location.svg"></img> Bangalore, India
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
