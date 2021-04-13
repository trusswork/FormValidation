import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";
import "./App.scss";
import { AnimatePresence } from "framer-motion";
import Header from "./pages/Header"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route>
          <AnimatePresence  exitBeforeEnter>
            <Switch>
              <Route exact path="/" render={() => <Home />} />
            </Switch>
            <Switch>
              <Route exact path="/Form" render={() => <Form />} />
            </Switch>
          </AnimatePresence>
        </Route>
      </Router>
    </div>
  );
}

export default App;
