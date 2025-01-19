import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MyWork from './pages/MyWork'
import AboutMe from './pages/AboutMe'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Impressum from './pages/Impressum';
import Datenschutzerkl from './pages/Datenschutzerkl';
import ScrollToTop from "./components/ScrollToTop";


function App() {


  return (
    <div>
      <Router>
        <ScrollToTop />
        <Navbar />
        <div className='px-4 sm:px-[5ve] md:px-[7vw] lg:px-[9vw]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/meine-arbeit" element={<MyWork />} />
            <Route path="/ueber-mich" element={<AboutMe />} />
            <Route path="/galerie" element={<Gallery />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutzerkl />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App
