import citrusLg from '../assets/img/dermawash-product/citrus-lg.png'
import sakuraLg from '../assets/img/dermawash-product/sakura-lg.png'
import lavenderLg from '../assets/img/dermawash-product/lavender-lg.png'
import citrusSm from '../assets/img/dermawash-product/citrus-sm.png'
import sakuraSm from '../assets/img/dermawash-product/sakura-sm.png'
import lavenderSm from '../assets/img/dermawash-product/lavender-sm.png'
const ProductList = () => {
    return(
        
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
                <img src={lavenderLg} className='lavender-large-product'  alt="lavender-large" />
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
                <img src={lavenderSm}  alt="lavender-small" />
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

    )
}

export default ProductList