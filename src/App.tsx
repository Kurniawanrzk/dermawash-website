import React, { useState, useEffect } from 'react';
import { useSpring, animated, SpringValues, useTransition } from '@react-spring/web';
import dermaWashLogo from './assets/img/logo-header.png';
import bgHeroSection1 from './assets/img/hero-section.png';
import bgHeroSection2 from './assets/img/hero-section.jpg';
import citrusProduct from './assets/img/green.png';
import lavenderProduct from './assets/img/purple.png';
import sakuraProduct from './assets/img/pink.png';

interface AppProps {
  duration?: number;
}

const App: React.FC<AppProps> = ({ duration = 1000 }) => {
  const [index, setIndex] = useState(0);
  const [idxAboutProduct, setIdxAboutProduct] = useState(0);
  const backgrounds = [bgHeroSection1, bgHeroSection2];
  const productAbout = [
    {
      img:citrusProduct,
      shadow:'rgba(83, 115, 67, 0.4) -5px 5px, rgba(83, 115, 67, 0.3) -10px 10px, rgba(83, 115, 67, 0.2) -15px 15px, rgba(83, 115, 67, 0.1) -20px 20px, rgba(83, 115, 67, 0.05) -25px 25px'
    },
    {
      img:lavenderProduct,
      shadow:'rgba(164, 90, 194, 0.4) -5px 5px, rgba(164, 90, 194, 0.3) -10px 10px, rgba(164, 90, 194, 0.2) -15px 15px, rgba(164, 90, 194, 0.1) -20px 20px, rgba(164, 90, 194, 0.05) -25px 25px'
    },
    {
      img:sakuraProduct,
      shadow:'rgba(204, 164, 168, 0.4) -5px 5px, rgba(204, 164, 168, 0.3) -10px 10px, rgba(204, 164, 168, 0.2) -15px 15px, rgba(204, 164, 168, 0.1) -20px 20px, rgba(204, 164, 168, 0.05) -25px 25px'
    }
  ];
  const colorAboutDescription = ['#537343', '#A45AC2', '#CCA4A8'];

  const transitions = useTransition(index, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration },
  });

  const transitionAboutProducts = useTransition(idxAboutProduct, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration },
  });

  const transitionDescriptionColor = useTransition(idxAboutProduct, {
    from: { color: colorAboutDescription[(idxAboutProduct + colorAboutDescription.length - 1) % colorAboutDescription.length] },
    enter: { color: colorAboutDescription[idxAboutProduct] },
    leave: { color: colorAboutDescription[(idxAboutProduct + 1) % colorAboutDescription.length] },
    config: { duration },
  });

  useEffect(() => {
    const intervalBackground = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 7000);

    return () => clearInterval(intervalBackground);
  }, [backgrounds.length]);

  useEffect(() => {
    const intervalProductAbout = setInterval(() => {
      setIdxAboutProduct((prev) => (prev + 1) % productAbout.length);
    }, 4000);

    return () => clearInterval(intervalProductAbout);
  }, [productAbout.length]);

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
              <div className='logo'>
                <center>
                  <img src={dermaWashLogo} alt="derma wash logo" />
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
          <animated.h1 style={{ ...slideIn(1000), color: "black", fontWeight: "bold" }}>DERMAWASH</animated.h1>
          <animated.h2 style={{ ...slideIn(1070) }}>
            Inovasi Sabun Cair Berbasis VCO dengan Ekstrak Daun Sirih Sebagai Alternatif Pengobatan Akibat Inflamasi Tinea yang Efektif.
          </animated.h2>
          <animated.div className="button-hero-section" style={{ ...slideIn(1070), display: "flex", gap: "20px" }}>
            <a href="#about-section" className='learn-more' style={{ textDecoration: "none" }}>Learn More</a>
            <a href="#" className='buy-now' style={{ textDecoration: "none" }}>Buy Now</a>
          </animated.div>
        </div>
      </div>

      <div id='about-section' className='about-section'>
        <div className='content-about'>
          <div className='product-image-container' style={{ position: "relative", width: "400px" }}>
            {transitionAboutProducts((style, i) => (
              <animated.img className="img-about-product" style={{ ...style, position: "absolute",boxShadow:`${productAbout[i].shadow}` }} src={productAbout[i].img} width={400} alt="" />
            ))}
          </div>
          <div className='description-about'>
            <div className='text-description'>
              {transitionDescriptionColor((style, i) => (
                <animated.div style={{...style, position:"relative"}} key={i}>
                  <h3 style={{position:"absolute", fontSize:"50px", letterSpacing:"4px"}}>About Dermawash</h3>
                </animated.div>
              ))}
              <br />
              <p>DERMAWASH merupakan liquid bodywash menggunakan 100% bahan alami. Yang mengandung 43-52% <b>asam laurat</b>, <b>Vitamin E</b>, <b>Minyak Atsiri</b> dan <b>Sikloogenase</b> yang menjadi kandungan aktif dalam mencegah, merawat serta mendukung penyembuhan inflamasi Tinea Corporis (Kurap).</p>
            </div>
          </div>
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
