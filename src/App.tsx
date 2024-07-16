import React, { useState, useEffect } from 'react';
import { useSpring, animated, SpringValues, useTransition } from '@react-spring/web';
import dermaWashLogo from './assets/img/logo-header.png';
import bgHeroSection1 from './assets/img/hero-section.png';
import bgHeroSection2 from './assets/img/hero-section.jpg';
import citrusProduct from './assets/img/green.png';
import lavenderProduct from './assets/img/purple.png';
import sakuraProduct from './assets/img/pink.png';
import firstAdvantage from './assets/img/47.png'
import secondAdvantage from './assets/img/48.png'
import thirdAdvantage from './assets/img/49.png'
import fourthAdvantage from './assets/img/50.png'
import fifthAdvantage from './assets/img/51.png'
import beforeAbout from './assets/img/bgBeforeAbout.png'
import rightAdvantage from './assets/img/advantage-right.png'
import citrusLg from './assets/img/dermawash-product/citrus-lg.png'
import sakuraLg from './assets/img/dermawash-product/sakura-lg.png'
import lavenderLg from './assets/img/dermawash-product/lavender-lg.png'
import citrusSm from './assets/img/dermawash-product/citrus-sm.png'
import sakuraSm from './assets/img/dermawash-product/sakura-sm.png'
import lavenderSm from './assets/img/dermawash-product/sakura-sm.png'
import AOS from 'aos'
import 'aos/dist/aos.css';
interface AppProps {
  duration?: number;
}
const App: React.FC<AppProps> = ({ duration = 1000 }) => {
  useEffect(() => {
    AOS.init()
    },[])
  const [index, setIndex] = useState(0);
  const [idxAboutProduct, setIdxAboutProduct] = useState(0);
  const backgrounds = [bgHeroSection1, bgHeroSection2];
  const productAbout = [
    {
      img:citrusProduct,
      shadow:'rgba(83, 115, 67, 0.4) 0px 5px, rgba(83, 115, 67, 0.3) 0px 10px, rgba(83, 115, 67, 0.2) 0px 15px, rgba(83, 115, 67, 0.1) 0px 20px, rgba(83, 115, 67, 0.05) 0px 25px'
    },
    {
      img:lavenderProduct,
      shadow:'rgba(164, 90, 194, 0.4) 0px 5px, rgba(164, 90, 194, 0.3) 0px 10px, rgba(164, 90, 194, 0.2) 0px 15px, rgba(164, 90, 194, 0.1) 0px 20px, rgba(164, 90, 194, 0.05) 0px 25px'
    },
    {
      img:sakuraProduct,
      shadow:'rgba(204, 164, 168, 0.4) 0px 5px, rgba(204, 164, 168, 0.3) 0px 10px, rgba(204, 164, 168, 0.2) 0px 15px, rgba(204, 164, 168, 0.1) 0px 20px, rgba(204, 164, 168, 0.05) 0px 25px'
    }
  ];
  const colorAboutDescription = ['black','black','black'];

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
              </div>
            </a>
            <div className='nav-item'>
              <a href="#hero-section"><li>Home</li></a>
              <a href="#about-section"><li>About</li></a>
              <a href="#product-list"><li>Shop</li></a>
              <a href=""><li>Contact</li></a>
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

      <div className='before-about' style={{display:"flex",justifyContent:"center",alignItems:"center",background:`url(${beforeAbout})`,marginTop:"100px", marginBottom:"100px",height:"550px",backgroundSize:"cover"}}>
        <h1   style={{ color:"#537343"}}>Dermawash</h1>
      </div>
      <div data-aos='zoom-in-down'  data-aos-duration="900" id='about-section' className='about-section'>
        <div className='content-about'>
          <div className='product-image-container' style={{ position: "relative"}}>
            {transitionAboutProducts((style, i) => (
              <animated.img className="img-about-product" style={{ ...style, position: "absolute",boxShadow:`${productAbout[i].shadow}` }} src={productAbout[i].img} alt="" />
            ))}
          </div>
          <div className='description-about' style={{backgroundColor:"#D6E6CC", padding:"20px"}}>
            <div className='text-description'>
              {transitionDescriptionColor((style, i) => (
                <animated.div style={{...style, position:"relative"}} key={i}>
                  <h3 className='title-about' style={{position:"absolute"}}>About Dermawash</h3>
                </animated.div>
              ))}
              <br />
              <p className="desc-down"><span id='dermawash-span-about'>DERMAWASH</span> merupakan liquid bodywash menggunakan 100% bahan alami. Yang mengandung 43-52% <b>asam laurat</b>, <b>Vitamin E</b>, <b>Minyak Atsiri</b> dan <b>Sikloogenase</b> yang menjadi kandungan aktif dalam mencegah, merawat serta mendukung penyembuhan inflamasi Tinea Corporis (Kurap).</p>
            </div>
          </div>
        </div>
      </div>

      <div 
      id="advantage-section" 
      className="advantage-section" 
      style={{
        display:"flex", 
        justifyContent:"center", 
        alignItems:"center",
        marginBottom:"70px"
        }}>
        <div
        >
              <div 
              className="advantage-item">
                <div
                >
                  <figure data-aos='fade-down'  data-aos-duration="900">
                    <center>
                    <img  src={firstAdvantage} alt="" className='img-adv' />
                    <p style={{fontSize:"25px"}}>Alcohol & SLS <br />Free</p>
                    </center>
                  </figure>
                  <figure data-aos='fade-down'  data-aos-duration="900">
                    <center>
                    <img src={secondAdvantage} alt="" className='img-adv' />
                    <p style={{fontSize:"25px"}}>Antibacterial <br /> formula</p>
                    </center>
                  </figure>
                  <figure data-aos='fade-down'  data-aos-duration="900"> 
                    <center>
                    <img src={thirdAdvantage} alt="" className='img-adv' />
                    <p style={{fontSize:"25px"}}>Vitamin E</p>
                    </center>
                  </figure>
                </div>
                <div
                >
                    <figure data-aos='fade-down'  data-aos-duration="900">
                    <center>
                    <img src={fourthAdvantage} alt="" className='img-adv' />
                    <p style={{fontSize:"25px"}}>Melembabkan</p>
                    </center>
                  </figure>
                  <figure data-aos='fade-down'  data-aos-duration="900"> 
                    <center>
                    <img src={fifthAdvantage} alt="" className='img-adv' />
                    <p style={{fontSize:"25px"}}>Efektif terhadap <br/>kurap</p>
                    </center>
                  </figure>
                </div>
              </div>
              <div data-aos='fade-down'  data-aos-duration="900" className="advetage-right">
                <img src={rightAdvantage} alt="right-image-advantage"/>
              </div>
        </div>
      </div>

      <div 
       data-aos='fade-down'  data-aos-duration="900"
      style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        paddingTop:"100px",
        paddingBottom:"100px"

      }}
      className="product-list-section" id="product-list-section">
        <div>
          <div 
          id="product-list"
          className='product-list'
          style={{
            display:"flex",
            justifyContent:"space-around",
            overflowX:"scroll",
            gap:"20px",
            borderRadius:"20px",
            paddingBottom:"10px"
          }}
          >
            <div
            style={{
              backgroundColor:"#B8D5A9"
            }}
            className='product-card'
            >     
              <figure>
                <center>
                  <img src={citrusLg} alt="jeruk-large" />
                </center>
                <figcaption
                style={{
                  marginLeft:"20px",
                }}
                >
                    <div
                    style={{
                      transform:"translateY(220px)"
                    }}
                    >
                    <h2 style={{
                      color:"white"
                    }}>Jeruk</h2>
                      <h3 style={{
                      color:"white",
                      fontWeight:"lighter"
                    }}>Rp. 55.0000</h3>
                     <h3 style={{
                      color:"white",
                      fontWeight:"lighter"
                    }}>250 ml</h3>
                    </div>
                   
                </figcaption>
              </figure>
            </div>
            <div
            style={{
              backgroundColor:"#DEB1B8"
            }}
            className='product-card'
            >     
              <figure>
                <center>
                  <img src={sakuraLg} alt="sakura-large" />
                </center>
                <figcaption
                style={{
                  marginLeft:"20px",
                }}
                >
                    <div
                    style={{
                      transform:"translateY(220px)"
                    }}
                    >
                    <h2 style={{
                      color:"white"
                    }}>Sakura</h2>
                      <h3 style={{
                      color:"white",
                      fontWeight:"lighter"
                    }}>Rp. 55.0000</h3>
                     <h3 style={{
                      color:"white",
                      fontWeight:"lighter"
                    }}>250 ml</h3>
                    </div>
                   
                </figcaption>
              </figure>
            </div>
          
            <div
            style={{
              backgroundColor:"#AE8DBA"
            }}
            className='product-card'
            >     
              <figure>
                <center>
                  <img src={lavenderLg} alt="lavender-large" />
                </center>
                <figcaption
                style={{
                  marginLeft:"20px",
                }}
                >
                    <div
                    style={{
                      transform:"translateY(220px)"
                    }}
                    >
                    <h2 style={{
                      color:"white"
                    }}>Lavender</h2>
                      <h3 style={{
                      color:"white",
                      fontWeight:"lighter"
                    }}>Rp. 55.0000</h3>
                     <h3 style={{
                      color:"white",
                      fontWeight:"lighter"
                    }}>250 ml</h3>
                    </div>
                   
                </figcaption>
              </figure>
            </div>
            <div
            style={{
              backgroundColor:"#B8D5A9"
            }}
            className='product-card'
            >     
              <figure>
                <center>
                  <img src={citrusSm} alt="jeruk-small" />
                </center>
                <figcaption
                style={{
                  marginLeft:"20px",
                }}
                >
                    <div
                    style={{
                      transform:"translateY(220px)"
                    }}
                    >
                    <h2 style={{
                      color:"white"
                    }}>Jeruk</h2>
                      <h3 style={{
                      color:"white",
                      fontWeight:"lighter"
                    }}>Rp. 22.0000</h3>
                     <h3 style={{
                      color:"white",
                      fontWeight:"lighter"
                    }}>30 ml</h3>
                    </div>
                   
                </figcaption>
              </figure>
            </div>
            <div
            style={{
              backgroundColor:"#DEB1B8"
            }}
            className='product-card'
            >     
              <figure>
                <center>
                  <img src={sakuraSm} alt="sakura-small" />
                </center>
                <figcaption
                style={{
                  marginLeft:"20px",
                }}
                >
                    <div
                    style={{
                      transform:"translateY(220px)"
                    }}
                    >
                    <h2 style={{
                      color:"white"
                    }}>Sakura</h2>
                      <h3 style={{
                      color:"white",
                      fontWeight:"lighter"
                    }}>Rp. 22.0000</h3>
                     <h3 style={{
                      color:"white",
                      fontWeight:"lighter"
                    }}>30 ml</h3>
                    </div>
                   
                </figcaption>
              </figure>
            </div>
            <div
            style={{
              backgroundColor:"#AE8DBA"
            }}
            className='product-card'
            >     
              <figure>
                <center>
                  <img src={lavenderSm} alt="lavender-small" />
                </center>
                <figcaption
                style={{
                  marginLeft:"20px",
                }}
                >
                    <div
                    style={{
                      transform:"translateY(220px)"
                    }}
                    >
                    <h2 style={{
                      color:"white"
                    }}>Lavender</h2>
                      <h3 style={{
                      color:"white",
                      fontWeight:"lighter"
                    }}>Rp. 22.0000</h3>
                     <h3 style={{
                      color:"white",
                      fontWeight:"lighter"
                    }}>30 ml</h3>
                    </div>
                   
                </figcaption>
              </figure>
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
