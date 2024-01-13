import "src/App.css";
import Education from "src/components/layout/Education/Education";
import Experience from "src/components/layout/Experience/Experience";
import Footer from "src/components/layout/Footer/Footer";
import Header from "src/components/layout/Header/Header";
import Profile from "src/components/layout/Profile/Profile";
import Projects from "src/components/layout/Projects/Projects";
import Skills from "src/components/layout/Skills/Skills";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Profile />
        <Skills />
        <Education />
        <Experience />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
