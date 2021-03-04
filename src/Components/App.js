import Navbar from "./Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
    </>
  );
}

export default App;
