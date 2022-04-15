// pages
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";
import Contact from "./Pages/Contact";
import Faq from "./Pages/Faq";
import Navbar from './Components/Navbar'
import Footer from "./Components/Footer";
import { BrowserRouter as Router  , Routes , Route} from 'react-router-dom'
function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<Faq />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      <Footer />
    </Router>
  );
}
export default App;
