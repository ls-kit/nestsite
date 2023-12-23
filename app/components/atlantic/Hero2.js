// components/HeroSec.js
const HeroSec = () => {
    return (
        <>

 <div className="hero-section section">
            {/* Hero Slider Start */}
            <div className="hero-slider hero-slider-two fix">
              {/* Hero Item Start */}
              <div
                className="hero-item-2"
                style={{ backgroundImage: "url(../assets/images/hero/hero-2-bg.jpg)" }}
              >
                <div className="container">
                  <div className="row align-items-center">
                    {/* Hero Image */}
                    <div className="d-flex col-md-6 col-12 mt-20 mb-20 order-1 order-md-2">
                      <div className="hero-image-2">
                        <img src="../assets/images/hero/hero-3.png" alt="Image" />
                      </div>
                    </div>
                    {/* Hero Content */}
                    <div className="d-flex col-md-6 col-12 mt-20 mb-20 order-2 order-md-1">
                      <div className="hero-content-2">
                        <h1>
                          New Arrivals <br /> Get flat <span>50%</span> off
                        </h1>
                        <a href="#">SHOP NOW</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Hero Item End */}
              {/* Hero Item Start */}
              <div
                className="hero-item-2"
                style={{ backgroundImage: "url(../assets/images/hero/hero-2-bg.jpg)" }}
              >
                <div className="container">
                  <div className="row align-items-center">
                    {/* Hero Image */}
                    <div className="d-flex col-md-6 col-12 mt-20 mb-20 order-1 order-md-2">
                      <div className="hero-image-2">
                        <img src="../assets/images/hero/hero-4.png" alt="Image" />
                      </div>
                    </div>
                    {/* Hero Content */}
                    <div className="d-flex col-md-6 col-12 mt-20 mb-20 order-2 order-md-1">
                      <div className="hero-content-2">
                        <h1>
                          New Arrivals <br /> Get flat <span>50%</span> off
                        </h1>
                        <a href="#">SHOP NOW</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Hero Item End */}
            </div>
            {/* Hero Slider End */}
          </div>
        
        </>
    );
  };
  
  export default HeroSec;
  