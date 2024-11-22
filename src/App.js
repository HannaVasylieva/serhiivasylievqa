import { About } from "./About/About.js";
import { Accessibility } from "./Accessibility/Accessibility.js";
import "./App.scss";
import { BackToTop } from "./BackToTop/BackToTop.js";
import { Contacts } from "./Contacts/Contacts.js";
import { Header } from "./Header/Header.js";
import { Home } from "./Home/Home.js";
import { Projects } from "./Projects/Projects.js";
import { Worked } from "./Worked/Worked.js";

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Home />
        <About />
        <Projects />
        <Worked />
        <Accessibility />
        <Contacts />
      </main>

      <BackToTop />
    </div>
  );
}

export default App;
