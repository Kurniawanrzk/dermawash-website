import citrusLg1 from '../assets/img/dermawash-product/citrus-lg 1.png'
import sakuraLg1 from '../assets/img/dermawash-product/sakura-lg 1.png'
import lavenderLg1 from '../assets/img/dermawash-product/lavender-lg 1.png'
import citrusSm1 from '../assets/img/dermawash-product/citrus-sm 1.png'
import sakuraSm1 from '../assets/img/dermawash-product/sakura-sm 1.png'
import lavenderSm1 from '../assets/img/dermawash-product/lavender-sm 1.png'
import randomPeople1 from '../assets/img/random-people1.png'
import randomPeople2 from '../assets/img/random-people2.png'
import randomPeople3 from '../assets/img/random-people3.png'
import tokped from '../assets/img/tokped.png'
import shopee from '../assets/img/shopee.png'
import star from '../assets/img/star.svg'
const Testimonial = () => {
    return(
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
    )
}

export default Testimonial