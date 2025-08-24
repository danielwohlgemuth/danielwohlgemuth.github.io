import Navbar from "./Navbar";
import { Routes, Route } from "react-router";
import Home from "./Home";
import About from "./About";
import AppRoute from "./AppRoute";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/app/:appId" element={<AppRoute />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
