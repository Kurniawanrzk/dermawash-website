import yt from '../assets/img/youtube.svg'
import ig from '../assets/img/instagram.svg'
import tt from '../assets/img/tiktok.svg'
import sop from '../assets/img/shopee.svg'
import tok from '../assets/img/tokped.svg'
import dermaWash from '../assets/img/dermawash.png';

const Footer = () => {
    return(
        <div className="footer" data-aos='fade-up'  data-aos-duration="900">
        <div data-aos='zoom-in'  data-aos-duration="900"  style={{
          display:'flex',
          justifyContent:"center",
          marginBottom:"30px"
        }}>
        <div  className='header-footer'>
        Bersama Dermawash Basmi Tinea Tampil Memesona        </div>
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
                <p>Email : <a href="mailto:dermawash.pkm.k@gmail.com" style={{color:"black"}}>dermawash.pkm.k@gmail.com</a></p>
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
    )
}

export default Footer;