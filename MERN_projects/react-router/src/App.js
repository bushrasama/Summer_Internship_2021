import "./styles.css";
import { Route, Switch, Link } from "react-router-dom";
import About from "./Components/About";
import Service from "./Components/Service";
import Contact from "./Components/Contact";

export default function App() {
  return (
    <div className="App">
      <h1>
        <Link to="/"> About </Link>
      </h1>
      <h1>
        <Link to="/service"> Service </Link>
      </h1>
      <h1>
        <Link to="/contact"> Contact </Link>
      </h1>
      <Switch>
        <Route exact path="/" component={About} />
        <Route
          path="/service"
          component={() => {
            return <Service name="Services" />;
          }}
        />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}
