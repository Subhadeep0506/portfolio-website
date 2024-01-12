import "./App.css";
import Education from "./components/layout/Education/Education";
import Experience from "./components/layout/Experience/Experience";
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import Profile from "./components/layout/Profile/Profile";
import Skills from "./components/layout/Skills/Skills";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Profile />
        <Skills />
        <Education />
        <Experience />
      </div>
      <Footer />
    </div>
  );
}

export default App;
