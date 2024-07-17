import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Notfound404 from "./Components/Notfound404";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="*" element={<Notfound404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
