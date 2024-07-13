import React, { useState, useEffect } from 'react';
import { useSpring, animated, SpringValues, useTransition } from '@react-spring/web';
import dermaWashLogo from './assets/img/dermawash logo.png';
import bgHeroSection1 from './assets/img/hero-section.png';
import bgHeroSection2 from './assets/img/hero-section.jpg';

interface AppProps {
  duration?: number;
}

const App: React.FC<AppProps> = ({ duration = 1000 }) => {
  const [index, setIndex] = useState(0);
  const backgrounds = [bgHeroSection1, bgHeroSection2];

  const transitions = useTransition(index, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 7000); // Change background every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const slideIn = (duration: number) => useSlideInAnimation(duration);

  return (
    <div className='container'>
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
           <div className='logo' >
            <center>
            <img src={dermaWashLogo} alt="derma wash logo" width={50} />
            </center>
              {/* <p style={{color:"#7A7438"}}>DERMAWASH</p> */}
            </div>
           </a>
            <div className='nav-item'>
              <a href="#hero-section"><li style={{ borderBottom: "solid #537343 3px" }}>Home</li></a>
              <a href=""><li>About</li></a>
              <a href=""><li>Contact</li></a>
              <a href=""><li>Shop</li></a>
            </div>
          </nav>
        </div>

        <div className='title-hero'>
          <animated.h1 style={{ ...slideIn(1000),  color: "#537343", fontWeight: "bold" }}>DERMAWASH</animated.h1>
          <animated.h2 style={{ ...slideIn(1070)}}>
            Inovasi Sabun Cair Berbasis VCO dengan Ekstrak Daun Sirih Sebagai Alternatif Pengobatan Akibat Inflamasi Tinea yang Efektif.
          </animated.h2>
        </div>
      </div>
    </div>
  );
};

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

export default App;
