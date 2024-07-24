import dermaWashLogo from '../assets/img/logo-header.png';
import { useSpring, animated, SpringValues, useTransition } from '@react-spring/web';
import { useEffect, useState } from 'react';
import bgHeroSection1 from '../assets/img/hero-section.png';
import bgHeroSection2 from '../assets/img/hero-section.jpg';

function useSlideInAnimation(duration: number): SpringValues<{ opacity: number; transform: string }> {
    return useSpring({
      from: { opacity: 0, transform: 'translateX(-100%)' },
      to: { opacity: 1, transform: 'translateX(0%)' },
      config: {
        duration,
        easing: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)
      }
    });
  }

const Hero = () => {
    const [index, setIndex] = useState(0);
    const duration = 1000
    const slideIn = (duration: number) => useSlideInAnimation(duration);
    const transitions = useTransition(index, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration },
      });
      const backgrounds = [bgHeroSection1, bgHeroSection2];

      useEffect(() => {
        const intervalBackground = setInterval(() => {
          setIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
        }, 4000);
    
        return () => clearInterval(intervalBackground);
      }, [backgrounds.length]);

      

    return (
        <div id='hero-section' className='hero-section' style={{ position: 'relative' }}>
        {transitions((style, i) => (
          <animated.div
            className='bg-hero'
            key={i}
            style={{
              ...style,
              backgroundImage: `url(${backgrounds[i]})`,
            }}
          />
        ))}
        <div id='nav' style={{ position: 'relative', zIndex: 1 }}>
          <nav>
            <a href="/">
              <div className='logo'>
                <center>
                  <img src={dermaWashLogo} alt="derma wash logo" />
                </center>
              </div>
            </a>
            <div className='nav-item'>
              <a href="#hero-section"><li>Home</li></a>
              <a href="#about-section"><li>About</li></a>
              <a href="#product-list"><li>Shop</li></a>
              <a href="#contact-us"><li>Contact</li></a>
            </div>
          </nav>
        </div>

        <div className='title-hero'>
          <animated.h1 style={{ ...slideIn(1000), color: "black", fontWeight: "bold" }}>DERMAWASH</animated.h1>
          <animated.h2 style={{ ...slideIn(1070) }}>
            Inovasi Sabun Cair Berbasis VCO dengan Ekstrak Daun Sirih Sebagai Alternatif Pengobatan Akibat Inflamasi Tinea yang Efektif.
          </animated.h2>
          <animated.div className="button-hero-section" style={{ ...slideIn(1070), display: "flex", gap: "20px" }}>
            <a href="#about-section" className='learn-more' style={{ textDecoration: "none" }}>Learn More</a>
            <a href="#product-list-section" className='buy-now' style={{ textDecoration: "none" }}>Buy Now</a>
          </animated.div>
        </div>
      </div>
    );
}

export default Hero;