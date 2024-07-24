import { animated ,useTransition} from '@react-spring/web';
import { useEffect, useState } from 'react';
import citrusProduct from '../assets/img/green.png';
import lavenderProduct from '../assets/img/purple.png';
import sakuraProduct from '../assets/img/pink.png';

const About = () => {
    const productAbout = [
        { img: citrusProduct, shadow: 'rgba(83, 115, 67, 0.4) 0px 5px, rgba(83, 115, 67, 0.3) 0px 10px, rgba(83, 115, 67, 0.2) 0px 15px, rgba(83, 115, 67, 0.1) 0px 20px, rgba(83, 115, 67, 0.05) 0px 25px' },
        { img: lavenderProduct, shadow: 'rgba(164, 90, 194, 0.4) 0px 5px, rgba(164, 90, 194, 0.3) 0px 10px, rgba(164, 90, 194, 0.2) 0px 15px, rgba(164, 90, 194, 0.1) 0px 20px, rgba(164, 90, 194, 0.05) 0px 25px' },
        { img: sakuraProduct, shadow: 'rgba(204, 164, 168, 0.4) 0px 5px, rgba(204, 164, 168, 0.3) 0px 10px, rgba(204, 164, 168, 0.2) 0px 15px, rgba(204, 164, 168, 0.1) 0px 20px, rgba(204, 164, 168, 0.05) 0px 25px' },
      ];
    
    useEffect(() => {
        const intervalProductAbout = setInterval(() => {
          setIdxAboutProduct((prev) => (prev + 1) % productAbout.length);
        }, 4000);
    
        return () => clearInterval(intervalProductAbout);
      }, [productAbout.length]);

    const [idxAboutProduct, setIdxAboutProduct] = useState(0);
    const duration = 1000
    const transitionAboutProducts = useTransition(idxAboutProduct, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration },
      });

    return(
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
    )
}

export default About