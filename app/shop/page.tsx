// components/Shop.js
const Shop = () => {
    return (
      <>

    <div
      className="page-banner-section section"
      style={{ backgroundImage: "url(assets/images/hero/hero-1.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="page-banner-content col">
            <h1>Shop</h1>
            <ul className="page-breadcrumb">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="shop.html">Shop</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* Page Banner Section End */}
    {/* Page Section Start */}
    <div className="page-section section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="product-show">
              <h4>Show:</h4>
              <select className="nice-select">
                <option>8</option>
                <option>12</option>
                <option>16</option>
                <option>20</option>
              </select>
            </div>
            <div className="product-short">
              <h4>Short by:</h4>
              <select className="nice-select">
                <option>Name Ascending</option>
                <option>Name Descending</option>
                <option>Date Ascending</option>
                <option>Date Descending</option>
                <option>Price Ascending</option>
                <option>Price Descending</option>
              </select>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-12 mb-40">
            <div className="product-item">
              <div className="product-inner">
                <div className="image">
                  <img src="assets/images/product/product-1.jpg" alt="" />
                  <div className="image-overlay">
                    <div className="action-buttons">
                      <button>add to cart</button>
                      <button>add to wishlist</button>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <div className="content-left">
                    <h4 className="title">
                      <a href="single-product.html">Tmart Baby Dress</a>
                    </h4>
                    <div className="ratting">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-half-o" />
                      <i className="fa fa-star-o" />
                    </div>
                    <h5 className="size">
                      Size: <span>S</span>
                      <span>M</span>
                      <span>L</span>
                      <span>XL</span>
                    </h5>
                    <h5 className="color">
                      Color: <span style={{ backgroundColor: "#ffb2b0" }} />
                      <span style={{ backgroundColor: "#0271bc" }} />
                      <span style={{ backgroundColor: "#efc87c" }} />
                      <span style={{ backgroundColor: "#00c183" }} />
                    </h5>
                  </div>
                  <div className="content-right">
                    <span className="price">$25</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-12 mb-40">
            <div className="product-item">
              <div className="product-inner">
                <div className="image">
                  <img src="assets/images/product/product-2.jpg" alt="" />
                  <div className="image-overlay">
                    <div className="action-buttons">
                      <button>add to cart</button>
                      <button>add to wishlist</button>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <div className="content-left">
                    <h4 className="title">
                      <a href="single-product.html">Jumpsuit Outfits</a>
                    </h4>
                    <div className="ratting">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <h5 className="size">
                      Size: <span>S</span>
                      <span>M</span>
                      <span>L</span>
                      <span>XL</span>
                    </h5>
                    <h5 className="color">
                      Color: <span style={{ backgroundColor: "#ffb2b0" }} />
                      <span style={{ backgroundColor: "#0271bc" }} />
                      <span style={{ backgroundColor: "#efc87c" }} />
                      <span style={{ backgroundColor: "#00c183" }} />
                    </h5>
                  </div>
                  <div className="content-right">
                    <span className="price">$09</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-12 mb-40">
            <div className="product-item">
              <div className="product-inner">
                <div className="image">
                  <img src="assets/images/product/product-3.jpg" alt="" />
                  <div className="image-overlay">
                    <div className="action-buttons">
                      <button>add to cart</button>
                      <button>add to wishlist</button>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <div className="content-left">
                    <h4 className="title">
                      <a href="single-product.html">Smart Shirt</a>
                    </h4>
                    <div className="ratting">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-o" />
                    </div>
                    <h5 className="size">
                      Size: <span>S</span>
                      <span>M</span>
                      <span>L</span>
                      <span>XL</span>
                    </h5>
                    <h5 className="color">
                      Color: <span style={{ backgroundColor: "#ffb2b0" }} />
                      <span style={{ backgroundColor: "#0271bc" }} />
                      <span style={{ backgroundColor: "#efc87c" }} />
                      <span style={{ backgroundColor: "#00c183" }} />
                    </h5>
                  </div>
                  <div className="content-right">
                    <span className="price">$18</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-12 mb-40">
            <div className="product-item">
              <div className="product-inner">
                <div className="image">
                  <img src="assets/images/product/product-4.jpg" alt="" />
                  <div className="image-overlay">
                    <div className="action-buttons">
                      <button>add to cart</button>
                      <button>add to wishlist</button>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <div className="content-left">
                    <h4 className="title">
                      <a href="single-product.html">Kids Shoe</a>
                    </h4>
                    <div className="ratting">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-half-o" />
                      <i className="fa fa-star-o" />
                    </div>
                    <h5 className="size">
                      Size: <span>S</span>
                      <span>M</span>
                      <span>L</span>
                      <span>XL</span>
                    </h5>
                    <h5 className="color">
                      Color: <span style={{ backgroundColor: "#ffb2b0" }} />
                      <span style={{ backgroundColor: "#0271bc" }} />
                      <span style={{ backgroundColor: "#efc87c" }} />
                      <span style={{ backgroundColor: "#00c183" }} />
                    </h5>
                  </div>
                  <div className="content-right">
                    <span className="price">$15</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-12 mb-40">
            <div className="product-item">
              <div className="product-inner">
                <div className="image">
                  <img src="assets/images/product/product-5.jpg" alt="" />
                  <div className="image-overlay">
                    <div className="action-buttons">
                      <button>add to cart</button>
                      <button>add to wishlist</button>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <div className="content-left">
                    <h4 className="title">
                      <a href="single-product.html"> Bowknot Bodysuit</a>
                    </h4>
                    <div className="ratting">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-half-o" />
                    </div>
                    <h5 className="size">
                      Size: <span>S</span>
                      <span>M</span>
                      <span>L</span>
                      <span>XL</span>
                    </h5>
                    <h5 className="color">
                      Color: <span style={{ backgroundColor: "#ffb2b0" }} />
                      <span style={{ backgroundColor: "#0271bc" }} />
                      <span style={{ backgroundColor: "#efc87c" }} />
                      <span style={{ backgroundColor: "#00c183" }} />
                    </h5>
                  </div>
                  <div className="content-right">
                    <span className="price">$12</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-12 mb-40">
            <div className="product-item">
              <div className="product-inner">
                <div className="image">
                  <img src="assets/images/product/product-6.jpg" alt="" />
                  <div className="image-overlay">
                    <div className="action-buttons">
                      <button>add to cart</button>
                      <button>add to wishlist</button>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <div className="content-left">
                    <h4 className="title">
                      <a href="single-product.html">Striped T-Shirt</a>
                    </h4>
                    <div className="ratting">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-o" />
                    </div>
                    <h5 className="size">
                      Size: <span>S</span>
                      <span>M</span>
                      <span>L</span>
                      <span>XL</span>
                    </h5>
                    <h5 className="color">
                      Color: <span style={{ backgroundColor: "#ffb2b0" }} />
                      <span style={{ backgroundColor: "#0271bc" }} />
                      <span style={{ backgroundColor: "#efc87c" }} />
                      <span style={{ backgroundColor: "#00c183" }} />
                    </h5>
                  </div>
                  <div className="content-right">
                    <span className="price">$12</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-12 mb-40">
            <div className="product-item">
              <div className="product-inner">
                <div className="image">
                  <img src="assets/images/product/product-7.jpg" alt="" />
                  <div className="image-overlay">
                    <div className="action-buttons">
                      <button>add to cart</button>
                      <button>add to wishlist</button>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <div className="content-left">
                    <h4 className="title">
                      <a href="single-product.html">Kislen Jak Tops</a>
                    </h4>
                    <div className="ratting">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <h5 className="size">
                      Size: <span>S</span>
                      <span>M</span>
                      <span>L</span>
                      <span>XL</span>
                    </h5>
                    <h5 className="color">
                      Color: <span style={{ backgroundColor: "#ffb2b0" }} />
                      <span style={{ backgroundColor: "#0271bc" }} />
                      <span style={{ backgroundColor: "#efc87c" }} />
                      <span style={{ backgroundColor: "#00c183" }} />
                    </h5>
                  </div>
                  <div className="content-right">
                    <span className="price">$29</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-12 mb-40">
            <div className="product-item">
              <div className="product-inner">
                <div className="image">
                  <img src="assets/images/product/product-8.jpg" alt="" />
                  <div className="image-overlay">
                    <div className="action-buttons">
                      <button>add to cart</button>
                      <button>add to wishlist</button>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <div className="content-left">
                    <h4 className="title">
                      <a href="single-product.html">Lattic Shirt</a>
                    </h4>
                    <div className="ratting">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-o" />
                    </div>
                    <h5 className="size">
                      Size: <span>S</span>
                      <span>M</span>
                      <span>L</span>
                      <span>XL</span>
                    </h5>
                    <h5 className="color">
                      Color: <span style={{ backgroundColor: "#ffb2b0" }} />
                      <span style={{ backgroundColor: "#0271bc" }} />
                      <span style={{ backgroundColor: "#efc87c" }} />
                      <span style={{ backgroundColor: "#00c183" }} />
                    </h5>
                  </div>
                  <div className="content-right">
                    <span className="price">$08</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <ul className="page-pagination">
              <li>
                <a href="#">
                  <i className="fa fa-angle-left" />
                </a>
              </li>
              <li className="active">
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-right" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* Page Section End */}
    {/* Brand Section Start */}
    <div className="brand-section section section-padding pt-0">
      <div className="container-fluid">
        <div className="row">
          <div className="brand-slider">
            <div className="brand-item col">
              <img src="assets/images/brands/brand-1.png" alt="" />
            </div>
            <div className="brand-item col">
              <img src="assets/images/brands/brand-2.png" alt="" />
            </div>
            <div className="brand-item col">
              <img src="assets/images/brands/brand-3.png" alt="" />
            </div>
            <div className="brand-item col">
              <img src="assets/images/brands/brand-4.png" alt="" />
            </div>
            <div className="brand-item col">
              <img src="assets/images/brands/brand-5.png" alt="" />
            </div>
            <div className="brand-item col">
              <img src="assets/images/brands/brand-6.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Brand Section End */}
   



      </>
    );
  };
  
  export default Shop;
  