import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Fundamentals from "./components/fundamentals/Fundamentals";
import Home from "./Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fundamentals" element={<Fundamentals/>}/>
        {/*<Route path="/about" element={<About />} />*/}
        {/*<Route path="*" element={<NotFound />} />  Catch-all route */}
      </Routes>
    </Router>
  );
}