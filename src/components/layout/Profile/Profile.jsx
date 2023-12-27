import "./Profile.css";

function Profile() {
  return (
    <>
      <div className="profile">
        <div className="avatar">
          <img src="src/assets/avatar.jpeg" alt="Avatar" />
        </div>
        <img src="src/assets/images/arrow.png" className="arrow"></img>
        <div className="avatar-title">
          <div className="avatar-title-content">
            <h1>
              Hi <img src="src/assets/hello.gif"></img>, I am Subhadeep
            </h1>
            <br />
            <h2>Data Science</h2>
            <h2>AI/ML</h2>
            <h2>Softwere Development</h2>
            <br />
            <h3>
              <img src="src/assets/location.svg"></img> Bangalore, India
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
