import Navbar from "./Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import AppRoute from "./AppRoute";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/app/:appId" component={AppRoute} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
    </>
  );
}

export default App;
