import firstAdvantage from '../assets/img/47.png'
import secondAdvantage from '../assets/img/48.png'
import thirdAdvantage from '../assets/img/49.png'
import fourthAdvantage from '../assets/img/50.png'
import fifthAdvantage from '../assets/img/51.png'
import rightAdvantage from '../assets/img/advantage-right.png'
const Advantage = () => {
    return(
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
    )
}

export default Advantage