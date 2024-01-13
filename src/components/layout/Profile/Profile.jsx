import "src/components/layout/Profile/Profile.css";
import Tilt from "react-parallax-tilt";

function Profile() {
  return (
    <>
      <div className="profile">
        <Tilt
          className="parallax-effect-img"
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          transitionSpeed={1000}
          scale={1.05}
          gyroscope={true}
        >
          <div className="avatar">
            <img src="src/assets/images/avatar.jpeg" alt="Avatar" />
          </div>
        </Tilt>
        <div className="avatar-title">
          <div className="avatar-title-content">
            <h1 style={{ color: "#FF9843" }}>
              Hi <img src="src/assets/images/hello.gif"></img>, I am{" "}
              <span style={{ color: "#7ED7C1", marginLeft: "6px" }}>
                Subhadeep
              </span>
            </h1>
            <h1 style={{ color: "#FF9843" }}>Mandal</h1>
            <br />
            <h2 style={{ color: "#A1EEBD" }}>
              <img
                style={{ height: "32px" }}
                src="src/assets/images/data-science.svg"
              />
              Data Science
            </h2>
            <h2 style={{ color: "#F6F7C4" }}>
              <img style={{ height: "32px" }} src="src/assets/images/ai.svg" />
              AI/ML
            </h2>
            <h2 style={{ color: "#F6D6D6" }}>
              <img
                style={{ height: "32px" }}
                src="src/assets/images/development.svg"
              />
              Softwere Development
            </h2>
            <br />
            <h3 style={{ color: "#FF8080" }}>
              <img src="src/assets/images/location.svg"></img> Bangalore, India
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
