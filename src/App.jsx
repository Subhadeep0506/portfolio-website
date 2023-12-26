import "./App.css";
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
      </div>
    </div>
  );
}

export default App;
