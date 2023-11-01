import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
import Home from "../src/pages/home"
import Menu from "../src/pages/menu"
// import Contact from "../src/pages/contact"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes >
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Menu />}/>
          <Route path="*" element = {<h2> Page not found </h2>} />
        </Routes>
      </Router>
      {/* <Contact />
      <Menu /> */}
    </div>
  );
}

export default App;
