import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Fundamentals from "./components/fundamentals/Fundamentals";
import NotFound from './NotFound';
import Home from "./Home";
import FloatingNavbar from './components/header/FloatingNavbar';
//import Navbar from './components/header/ClaudeNavbar';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fundamentals" element={<Fundamentals/>}/>
        <Route path="/navbar" element={<FloatingNavbar/>}/>
        {/*<Route path="/about" element={<About />} />*/}
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </Router>
  );
}