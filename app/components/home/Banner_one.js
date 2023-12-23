// components/BOne.js
const BOne = () => {
    return (
        <>
         <div className="banner-section section mt-40">
      <div className="container-fluid">
        <div className="row row-10 mbn-20">
          <div className="col-lg-4 col-md-6 col-12 mb-20">
            <div className="banner banner-1 content-left content-middle">
              <a href="#" className="image">
                <img
                  src="assets/images/banner/banner-1.jpg"
                  alt="Banner Image"
                />
              </a>
              <div className="content">
                <h1>
                  New Arrival <br />
                  Baby’s Shoe <br />
                  GET 30% OFF
                </h1>
                <a href="#" data-hover="SHOP NOW">
                  SHOP NOW
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-20">
            <a href="#" className="banner banner-2">
              <img src="assets/images/banner/banner-2.jpg" alt="Banner Image" />
              <div className="content bg-theme-one">
                <h1>New Toy’s for your Baby</h1>
              </div>
              <span className="banner-offer">25% off</span>
            </a>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-20">
            <div className="banner banner-1 content-left content-top">
              <a href="#" className="image">
                <img
                  src="assets/images/banner/banner-3.jpg"
                  alt="Banner Image"
                />
              </a>
              <div className="content">
                <h1>
                  Trendy <br />
                  Collections
                </h1>
                <a href="#" data-hover="SHOP NOW">
                  SHOP NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        
        </>
    );
  };
  
  export default BOne;
  