// components/Banner.js
const Banner = () => {
    return (
        <>
        
        <div className="hero-section section">
      {/* Hero Slider Start */}
      <div className="hero-slider hero-slider-one fix">
        {/* Hero Item Start */}
        <div
          className="hero-item"
          style={{ backgroundImage: "url(assets/images/hero/hero-1.jpg)" }}
        >
          {/* Hero Content */}
          <div className="hero-content">
            <h1>
              Get 35% off <br />
              Latest Baby Product
            </h1>
            <a href="#">SHOP NOW</a>
          </div>
        </div>
        {/* Hero Item End */}
        {/* Hero Item Start */}
        <div
          className="hero-item"
          style={{ backgroundImage: "url(assets/images/hero/hero-2.jpg)" }}
        >
          {/* Hero Content */}
          <div className="hero-content">
            <h1>
              Get 35% off <br />
              Latest Baby Product
            </h1>
            <a href="#">SHOP NOW</a>
          </div>
        </div>
        {/* Hero Item End */}
      </div>
      {/* Hero Slider End */}
    </div>
        
        </>
    );
  };
  
  export default Banner;
  