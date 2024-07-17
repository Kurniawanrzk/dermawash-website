import { useState, useEffect } from 'react';
import { useSpring, animated, SpringValues, useTransition } from '@react-spring/web';
import dermaWashLogo from './assets/img/logo-header.png';
import dermaWash from './assets/img/dermawash.png';
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
import lavenderSm from './assets/img/dermawash-product/lavender-sm.png'
import citrusLg1 from './assets/img/dermawash-product/citrus-lg 1.png'
import sakuraLg1 from './assets/img/dermawash-product/sakura-lg 1.png'
import lavenderLg1 from './assets/img/dermawash-product/lavender-lg 1.png'
import citrusSm1 from './assets/img/dermawash-product/citrus-sm 1.png'
import sakuraSm1 from './assets/img/dermawash-product/sakura-sm 1.png'
import lavenderSm1 from './assets/img/dermawash-product/lavender-sm 1.png'
import randomPeople1 from './assets/img/random-people1.png'
import randomPeople2 from './assets/img/random-people2.png'
import randomPeople3 from './assets/img/random-people3.png'
import tokped from './assets/img/tokped.png'
import shopee from './assets/img/shopee.png'
import star from './assets/img/star.svg'
import yt from './assets/img/youtube.svg'
import ig from './assets/img/instagram.svg'
import tt from './assets/img/tiktok.svg'
import sop from './assets/img/shopee.svg'
import tok from './assets/img/tokped.svg'
import arrow from './assets/img/arrow.svg'

import AOS from 'aos'
import 'aos/dist/aos.css';

const App = ({ duration = 1000 }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [index, setIndex] = useState(0);
  const [idxAboutProduct, setIdxAboutProduct] = useState(0);
  const [showArrow, setShowArrow] = useState(false);
  
  const backgrounds = [bgHeroSection1, bgHeroSection2];
  const productAbout = [
    { img: citrusProduct, shadow: 'rgba(83, 115, 67, 0.4) 0px 5px, rgba(83, 115, 67, 0.3) 0px 10px, rgba(83, 115, 67, 0.2) 0px 15px, rgba(83, 115, 67, 0.1) 0px 20px, rgba(83, 115, 67, 0.05) 0px 25px' },
    { img: lavenderProduct, shadow: 'rgba(164, 90, 194, 0.4) 0px 5px, rgba(164, 90, 194, 0.3) 0px 10px, rgba(164, 90, 194, 0.2) 0px 15px, rgba(164, 90, 194, 0.1) 0px 20px, rgba(164, 90, 194, 0.05) 0px 25px' },
    { img: sakuraProduct, shadow: 'rgba(204, 164, 168, 0.4) 0px 5px, rgba(204, 164, 168, 0.3) 0px 10px, rgba(204, 164, 168, 0.2) 0px 15px, rgba(204, 164, 168, 0.1) 0px 20px, rgba(204, 164, 168, 0.05) 0px 25px' },
  ];

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

  useEffect(() => {
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

  const slideIn = (duration: number) => useSlideInAnimation(duration);

  return (
    <div className='container'>
         {showArrow && (
        <div style={{
          position: "fixed",
          fontSize: "20px",
          bottom: "0px",
          right: "0px",
          zIndex: "1",
          padding: "10px"
        }}>
          <a href="#nav">
            <div style={{
              backgroundColor: "white",
              boxShadow: " rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
              padding: "5px",
              marginRight:"20px",
              width: "30px",
              justifyContent: "center",
              display: "flex",
              borderRadius: "3px"
            }}>
              <img src={arrow} width={20} alt="" />
            </div>
          </a>
        </div>
      )}
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

      <div className='before-about' style={{ display: "flex", justifyContent: "center", alignItems: "center", background: `url(${beforeAbout})`, marginTop: "100px", marginBottom: "100px", height: "550px", backgroundSize: "cover" }}>
        <h1 style={{ color: "#537343" }}>Dermawash</h1>
      </div>
      <div data-aos='fade-down' data-aos-duration="900" id='about-section' className='about-section'>
        <div className='content-about'>
          <div className='product-image-container' style={{ position: "relative" }}>
            {transitionAboutProducts((style, i) => (
              <animated.img className="img-about-product" style={{ ...style, position: "absolute", boxShadow: `${productAbout[i].shadow}` }} src={productAbout[i].img} alt="" />
            ))}
          </div>
          <div className='description-about' style={{ backgroundColor: "#D6E6CC", padding: "20px" }}>
            <div className='text-description'>
              <h3 className='title-about'>About Dermawash</h3>
              <span className="desc-down"><span id='dermawash-span-about'>DERMAWASH</span> merupakan liquid bodywash menggunakan 100% bahan alami. Yang mengkombinasikan kemurnian Virgin Coconut Oil (VCO) dan antibakterial daun sirih yang efektif meredakan inflamasi tinea.</span>
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
                  <figure  data-aos='fade-down'  data-aos-duration="900" >
                    <center>
                    <img  src={firstAdvantage} alt="" className='img-adv' />
                    <p style={{fontSize:"25px"}}>Alcohol & SLS <br />Free</p>
                    </center>
                  </figure>
                  <figure  data-aos='fade-down'  data-aos-duration="900" >
                    <center>
                    <img src={secondAdvantage} alt="" className='img-adv' />
                    <p style={{fontSize:"25px"}}>Antibacterial <br /> formula</p>
                    </center>
                  </figure>
                  <figure  data-aos='fade-down'  data-aos-duration="900" > 
                    <center>
                    <img src={thirdAdvantage} alt="" className='img-adv' />
                    <p style={{fontSize:"25px"}}>Vitamin E</p>
                    </center>
                  </figure>
                </div>
                <div
                >
                    <figure  data-aos='fade-down'  data-aos-duration="900" >
                    <center>
                    <img src={fourthAdvantage} alt="" className='img-adv' />
                    <p style={{fontSize:"25px"}}>Melembabkan</p>
                    </center>
                  </figure>
                  <figure  data-aos='fade-down'  data-aos-duration="900" > 
                    <center>
                    <img src={fifthAdvantage} alt="" className='img-adv' />
                    <p style={{fontSize:"25px"}}>Efektif terhadap <br/>kurap</p>
                    </center>
                  </figure>
                </div>
              </div>
              <div  data-aos='fade-down'  data-aos-duration="900"   className="advetage-right">
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
      className="product-list-section" >
        <div>
          <center style={{marginBottom:"30px"}}>
          <h3 style={{fontSize:"40px"}}>Varian Dermawash</h3>
          </center>
          <div 
          id="product-list"
          className='product-list'
          style={{
            display:"flex",
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
                    }}>Rp 55.000</h3>
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
                    }}>Rp 55.000</h3>
                     <h3 style={{
                      color:"white",
                      fontWeight:"lighter"
                    }}>250 ml</h3>
                    </div>
                   
                </figcaption>
              </figure>
            </div>
            <div id="product-list-section"></div>

            <div
            style={{
              backgroundColor:"#AE8DBA"
            }}
            className='product-card'
            >     
              <figure>
                <center>
                  <img src={lavenderLg} style={{transform:"scale(1.2)"}} alt="lavender-large" />
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
                    }}>Rp 55.000</h3>
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
                    }}>Rp 22.000</h3>
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
                    }}>Rp 22.000</h3>
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
                    }}>Rp 22.000</h3>
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

      <div id='testimonial-section' className="testimonial-section">
          <div className='testimonial-lists'>
            <div  data-aos='zoom-in'  data-aos-duration="900" className='testimonial'>
              <div className='right1-product-testi1' style={{position:"absolute"}}>
                <img src={citrusLg1} width="70" alt="Jeruk large" />
              </div>
              <div className='right1-product-testi2' style={{position:"absolute"}}>
                <img src={citrusSm1} width="70" alt="Jeruk small" />
              </div>
                <div className='pp'>
                  <img src={randomPeople1} alt="" />
                </div>

                <div className='message'>
                    <div className='star'>
                   <img src={star} width={30} style={{ filter:"invert(74%) sepia(48%) saturate(843%) hue-rotate(360deg) brightness(103%) contrast(113%)"}} alt="" />
                   <img src={star} width={30} style={{ filter:"invert(74%) sepia(48%) saturate(843%) hue-rotate(360deg) brightness(103%) contrast(113%)"}} alt="" />
                   <img src={star} width={30} style={{ filter:"invert(74%) sepia(48%) saturate(843%) hue-rotate(360deg) brightness(103%) contrast(113%)"}} alt="" />
                   <img src={star} width={30} style={{ filter:"invert(74%) sepia(48%) saturate(843%) hue-rotate(360deg) brightness(103%) contrast(113%)"}} alt="" />
                   <img src={star} width={30} style={{ filter:"invert(74%) sepia(48%) saturate(843%) hue-rotate(360deg) brightness(103%) contrast(113%)"}} alt="" />
                    </div>
                    <div className='text'>
                    <p>      
                      <span><b>Sandra Steffy</b> on Shopee <img src={shopee} width={15} alt="" /></span>
                      <br /> 
                      Sabun jeruk ini segar banget! Kulitku jadi lebih lembut dan kurap cepat sembuh. Setelah pakai rutin, gatal-gatal hilang. Aromanya juga bikin semangat di pagi hari. Pokoknya suka banget sama DERMAWASH!                 </p>
                    </div>
                </div>
            </div>
            <div  data-aos='zoom-in'  data-aos-duration="900" className='testimonial-1'>
          
              <div className='pp' id='pp-phone'>
                  <img src={randomPeople2}  alt="" />
                </div>
                <div className='message' >
                    <div className='star' style={{display:"flex", gap:"10px",}}>
                   <img src={star} width={30} style={{ filter:"invert(74%) sepia(48%) saturate(843%) hue-rotate(360deg) brightness(103%) contrast(113%)"}} alt="" />
                   <img src={star} width={30} style={{ filter:"invert(74%) sepia(48%) saturate(843%) hue-rotate(360deg) brightness(103%) contrast(113%)"}} alt="" />
                   <img src={star} width={30} style={{ filter:"invert(74%) sepia(48%) saturate(843%) hue-rotate(360deg) brightness(103%) contrast(113%)"}} alt="" />
                   <img src={star} width={30} style={{ filter:"invert(74%) sepia(48%) saturate(843%) hue-rotate(360deg) brightness(103%) contrast(113%)"}} alt="" />
                   <img src={star} width={30} style={{ filter:"invert(74%) sepia(48%) saturate(843%) hue-rotate(360deg) brightness(103%) contrast(113%)"}} alt="" />
                    </div>
                    <div className='text'>
                    <p style={{textAlign:"right"}}>      
                      <span><b>Sarah</b> on Shopee <img src={shopee} width={15} alt="" /></span>
                      <br />              
                      Varian sakura ini wangi banget dan bikin kulitku sehat. Kurapku hilang dan kulit jadi bersih. Nggak ada iritasi lagi, cocok buat kulit sensitif. Selain itu, bikin kulit jadi lebih cerah. Bakal pakai terus!             </p>
                    </div>
                </div>
                <div className='pp' id='pp-desktop'>
                  <img src={randomPeople2}  alt="" />
                </div>
                <div className='left2-product-testi1'  style={{position:"absolute"}}>
                <img src={sakuraLg1} width="70" alt="" />
              </div>
              <div className='left2-product-testi2'  style={{position:"absolute" }}>
                <img src={sakuraSm1} width="70" alt="" />
              </div>
            </div>

            <div  data-aos='zoom-in'  data-aos-duration="900" className='testimonial-2'>
            <div className='right3-product-testi1' style={{position:"absolute"}}>
                <img src={lavenderLg1} width="75" alt="" />
              </div>
              <div className='right3-product-testi2' style={{position:"absolute"}}>
                <img src={lavenderSm1} width="70" alt="" />
              </div>
                <div className='pp'>
                  <img src={randomPeople3} alt="" />
                </div>

                <div className='message'>
                    <div className='star' style={{display:"flex", gap:"10px"}}>
                   <img src={star} width={30} style={{ filter:"invert(74%) sepia(48%) saturate(843%) hue-rotate(360deg) brightness(103%) contrast(113%)"}} alt="" />
                   <img src={star} width={30} style={{ filter:"invert(74%) sepia(48%) saturate(843%) hue-rotate(360deg) brightness(103%) contrast(113%)"}} alt="" />
                   <img src={star} width={30} style={{ filter:"invert(74%) sepia(48%) saturate(843%) hue-rotate(360deg) brightness(103%) contrast(113%)"}} alt="" />
                   <img src={star} width={30} style={{ filter:"invert(74%) sepia(48%) saturate(843%) hue-rotate(360deg) brightness(103%) contrast(113%)"}} alt="" />
                   <img src={star} width={30} style={{ filter:"invert(74%) sepia(48%) saturate(843%) hue-rotate(360deg) brightness(103%) contrast(113%)"}} alt="" />
                    
                    </div>
                    <br />
                    <div className='text'>
                    <p>      
                      <span><b>Shakila Syfis1</b> on Tokopedia <img src={tokped} width={15} alt="" /></span>
                      <br />              
                      Sabun lavendernya enak banget buat rileks sebelum tidur. Kulit jadi lembap dan kurap sembuh cepat. Recommended banget!              </p>
                    </div>
                </div>
            </div>
          </div>
      </div>

      <div className="footer" data-aos='fade-up'  data-aos-duration="900">
      <div data-aos='zoom-in'  data-aos-duration="900"  style={{
        display:'flex',
        justifyContent:"center",
        marginBottom:"30px"
      }}>
      <div  className='header-footer'>
      Bersama Dermawash Basmi Tinea Tampil Mempesona        </div>
      </div>
        <div
        className='content-footer'
        >
           
            <div className='social-media'>
              <div className='footer-logo'>
                    <img src={dermaWash}  alt="" />
                    <p>DERMAWASH</p>
              </div>
              <hr style={{border:"1px solid black",marginTop:"5px"}} />
              <div>
              <div style={{display:"flex", gap:"10px",marginTop:"10px"}}>
              <a href="https://www.instagram.com/dermawash_?utm_source=qr&igsh=dm14Z200MTdnMXV5" target="_blank" rel="noopener noreferrer">
  <span style={{background:"#537343", padding:"2px", borderRadius:"5px", width:"40px", display:"flex", justifyContent:"center"}}>
    <img style={{filter:"invert(100%) sepia(100%) saturate(0%) hue-rotate(34deg) brightness(102%) contrast(102%)"}} width={30} src={ig} alt="Instagram" />
  </span>
</a>
<a href="https://youtube.com/@dermawash?si=IQqWMPH9VHA1gPsI" target="_blank" rel="noopener noreferrer">
  <span style={{background:"#537343", padding:"2px", borderRadius:"5px", width:"40px", display:"flex", justifyContent:"center",height:"35px"}}>
    <img style={{filter:"invert(100%) sepia(100%) saturate(0%) hue-rotate(34deg) brightness(102%) contrast(102%)"}} width={30} src={yt} alt="YouTube" />
  </span>
</a>
<a href="https://www.tiktok.com/@dermawashofficial?_t=8nyq4HdBTyJ&_r=1" target="_blank" rel="noopener noreferrer">
  <span style={{background:"#537343", padding:"2px", borderRadius:"5px", width:"40px", display:"flex", justifyContent:"center",height:"35px"}}>
    <img style={{filter:"invert(100%) sepia(100%) saturate(0%) hue-rotate(34deg) brightness(102%) contrast(102%)"}} width={25} src={tt} alt="TikTok" />
  </span>
</a>
<a href="https://tokopedia.link/n1h7HteTbLb" target="_blank" rel="noopener noreferrer">
  <span style={{background:"#537343", padding:"2px", borderRadius:"5px", width:"40px", display:"flex", justifyContent:"center",height:"35px"}}>
    <img style={{filter:"invert(100%) sepia(100%) saturate(0%) hue-rotate(34deg) brightness(102%) contrast(102%)"}} width={30} src={tok} alt="Tokopedia" />
  </span>
</a>
<a href="https://id.shp.ee/esTttdB" target="_blank" rel="noopener noreferrer">
  <span style={{background:"#537343", padding:"2px", borderRadius:"5px", width:"40px", display:"flex", justifyContent:"center",height:"35px"}}>
    <img style={{filter:"invert(100%) sepia(100%) saturate(0%) hue-rotate(34deg) brightness(102%) contrast(102%)"}} width={30} src={sop} alt="Shoppe" />
  </span>
</a>

              </div>
              </div>
            </div>
            <div className='contact-us' id='contact-us'>
              <p><b>Contact Us In</b></p>
              <p>Email : <a href="" style={{color:"black"}}>dermawash.pkm.k@gmail.com</a></p>
              <p>Whatsapp :                <a style={{color:"black"}} href="https://api.whatsapp.com/send/?phone=6281399752449&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
              +62 813-9975-2449              </a>
              </p>
            </div>
           
        </div>
        <div style={{textAlign:"center",padding:"20px",borderTop:"2px solid black"}}>
          <p>            Copyright 2024 Dermawash PKM Team, Inc - All Right Reserved.
          </p>
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
