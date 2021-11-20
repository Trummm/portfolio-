import Home from "./Home/Home";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProjectPage from "./components/ProjectPage/ProjectPage";
import { AnimatePresence } from "framer-motion";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Router>
          <Switch>
            <Route exact path="/project">
              <ProjectPage />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/skills">
              <Skills />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AnimatePresence>
    </>
  );
}

export default App;
