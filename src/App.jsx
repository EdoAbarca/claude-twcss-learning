import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Fundamentals from "./components/fundamentals/Fundamentals";
import NotFound from './NotFound';
import Home from "./Home";
import Navbar from './components/header/Navbar';
import Hero from './components/hero/Hero';
import Grid from './components/grid/Grid';
import Contact from './components/contact/Contact';
//import Footer from './components/footer/Footer';
import PortFooter from './components/footer/PortFooter';
import AltProject from './components/card/AltProject';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fundamentals" element={<Fundamentals />}/>
        <Route path="/navbar" element={<Navbar/>}/>
        <Route path="/hero" element={<Hero />} />
        <Route path="/grid" element={<Grid />} />
        <Route path="/card" element={<AltProject/>}/>
        <Route path="/footer" element={<PortFooter/>}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </Router>
  );
}