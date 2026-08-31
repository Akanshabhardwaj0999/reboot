import { About } from "./components/About";
import { Blog } from "./components/Blog";
import { Footer } from "./components/common/Footer"
import Header from "./components/common/Header"
import { Contact } from "./components/Contact";
import { Home } from "./components/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
