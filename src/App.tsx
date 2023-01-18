import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Service from './pages/service';
import ContactUs from './pages/contactUs';
import PageNotFound from './pages/pageNotFound';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:id" element={<Service />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
