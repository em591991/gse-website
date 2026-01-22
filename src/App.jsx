import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ElectricalServices from './pages/ElectricalServices';
import NewConstruction from './pages/NewConstruction';
import SecurityServices from './pages/SecurityServices';
import GeneratorServices from './pages/GeneratorServices';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/electrical-services" element={<ElectricalServices />} />
            <Route path="/new-construction" element={<NewConstruction />} />
            <Route path="/security-services" element={<SecurityServices />} />
            <Route path="/generator-services" element={<GeneratorServices />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
