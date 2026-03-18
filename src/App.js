import './App.css';
import './MediaQueries.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import Header from './Components/Header';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import About from './Pages/About';
import UpcomingEvents from './Pages/UpcomingEvents';
import Gallery from './Pages/Gallery';
import Artists from './Pages/Artists';
import ReserveTable from './Pages/ReserveTable';
import Contact from './Pages/Contact';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsConditions from './Pages/TermsConditions';

function App() {
  return (
  <BrowserRouter>
     <ScrollToTop />
     <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About/>} />
        <Route path="/upcoming-events" element={<UpcomingEvents/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/artists" element={<Artists/>} />
        <Route path="/reserve-a-table" element={<ReserveTable/>} />
        <Route path="/contact-us" element={<Contact/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
         <Route path="/terms-and-conditions" element={<TermsConditions/>} />
      </Routes>
      <Footer />
      </BrowserRouter>
  );
}

export default App;
