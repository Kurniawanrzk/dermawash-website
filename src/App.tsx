import { useState, useEffect } from 'react';
import Footer from './components/footer';
import ProductList from './components/productList';
import beforeAbout from './assets/img/bgBeforeAbout.png'
import Testimonial from './components/testimonial';
import About from './components/about';
import Advantage from './components/advantage';
import Hero from './components/hero';
import arrow from './assets/img/arrow.svg'
import AOS from 'aos'
import 'aos/dist/aos.css';

const App = () => {
  const [showArrow, setShowArrow] = useState(false);
  useEffect(() => {
    AOS.init();

    const handleScroll = () => {
      const heroSection = document.getElementById('hero-section');
      const aboutSection = document.getElementById('about-section');
  
      if (!heroSection || !aboutSection) return;
  
      const heroSectionOffset = heroSection.offsetTop;
      const aboutSectionOffset = aboutSection.offsetTop;
  
      if (window.scrollY + window.innerHeight < aboutSectionOffset && window.scrollY + window.innerHeight > heroSectionOffset) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className='container'>
         {showArrow && (
        <div className='arrow-container'>
          <a href="#nav">
            <div className='arrow'>
              <img src={arrow} width={20} alt="" />
            </div>
          </a>
        </div>
      )}
      <Hero />
      <div className='before-about' style={{ display: "flex", justifyContent: "center", alignItems: "center", background: `url(${beforeAbout})`, marginTop: "100px", marginBottom: "100px", height: "550px", backgroundSize: "cover" }}>
        <h1 style={{ color: "#537343" }}>Dermawash</h1>
      </div>
      <About />
      <Advantage />
      <ProductList />
      <Testimonial />
      <Footer />
    </div>
  );
};
export default App;
