import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.js";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Booknow from "./pages/Booknow";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Halls from "./components/Halls";
import Career from "./pages/Career";
import Register from "./pages/Register";
import Login from "./pages/login";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms/" element={<Rooms />} />
          <Route path="/about/" element={<About />} />
          <Route path="/services/" element={<Services />} />
          <Route path="/halls/" element={<Halls />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="/career/" element={<Career />} />
          <Route path="/register/" element={<Register />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/rooms/:slug" element={<SingleRoom />} />
          <Route exact path="/booknow/:slug" element={<Booknow />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
