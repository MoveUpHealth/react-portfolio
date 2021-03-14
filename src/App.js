import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio"
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/react-portfolio" component={Home} />
      <Route exact path="/aboutme" component={Home} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/contact" component={Contact} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
