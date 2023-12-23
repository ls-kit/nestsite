import HeroSec from '../../components/atlantic/Hero2';
import PoProducts from '../../components/atlantic/popularProduct'

// atlantic.js
const Atlantic = () => {
    return (
        <>
        
        <div className="main-wrapper">
             {/* Hero Section Start */}
            <HeroSec></HeroSec>

          {/* Hero Section End */}
          {/* Product Section Start */}
          <PoProducts></PoProducts>
          {/* Product Section End */}
          {/* Banner Section Start */}
          <div className="banner-section section section-padding pt-0">
            <div className="container-fluid">
              <div className="row row-10 mbn-20">
                <div className="col-lg-4 col-md-6 col-12 mb-20">
                  <div className="banner banner-1 home-2-banner content-left content-middle">
                    <a href="#" className="image">
                      <img
                        src="assets/images/banner/banner-7.jpg"
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
                  <a href="#" className="banner banner-2 home-2-banner content-right">
                    <img src="assets/images/banner/banner-8.jpg" alt="Banner Image" />
                    <div className="content bg-theme-two">
                      <h1>New Toy’s for your Baby</h1>
                    </div>
                    <span className="banner-offer">35% off</span>
                  </a>
                </div>
                <div className="col-lg-4 col-md-6 col-12 mb-20">
                  <div className="banner banner-1 home-2-banner content-left content-middle">
                    <a href="#" className="image">
                      <img
                        src="assets/images/banner/banner-9.jpg"
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
          {/* Banner Section End */}
          {/* Product Section Start */}
          <div className="product-section section section-padding pt-0">
            <div className="container">
              <div className="row mbn-40">
                <div className="col-lg-4 col-md-6 col-12 order-1 order-md-2 mb-40">
                  <div className="row">
                    <div className="section-title text-start col col mb-30">
                      <h1>BEST DEAL</h1>
                      <p>Exclusive deals for you</p>
                    </div>
                  </div>
                  <div className="best-deal-slider w-100">
                    <div className="slide-item">
                      <div className="best-deal-product">
                        <div className="image">
                          <img
                            src="assets/images/product/best-deal-1.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="content-top">
                          <div className="content-top-left">
                            <h4 className="title">
                              <a href="#">2 Piece Shirt Set</a>
                            </h4>
                            <div className="ratting">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star-half-o" />
                            </div>
                          </div>
                          <div className="content-top-right">
                            <span className="price">
                              $13 <span className="old">$28</span>
                            </span>
                          </div>
                        </div>
                        <div className="content-bottom">
                          <div className="countdown" data-countdown="2023/06/20" />
                          <a href="#" data-hover="SHOP NOW">
                            SHOP NOW
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="slide-item">
                      <div className="best-deal-product">
                        <div className="image">
                          <img
                            src="assets/images/product/best-deal-2.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="content-top">
                          <div className="content-top-left">
                            <h4 className="title">
                              <a href="#">Kelly Shirt Set</a>
                            </h4>
                            <div className="ratting">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star-o" />
                            </div>
                          </div>
                          <div className="content-top-right">
                            <span className="price">
                              $09 <span className="old">$25</span>
                            </span>
                          </div>
                        </div>
                        <div className="content-bottom">
                          <div className="countdown" data-countdown="2023/06/20" />
                          <a href="#" data-hover="SHOP NOW">
                            SHOP NOW
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-6 col-12 pe-3 pe-lg-4 pe-xl-5 order-2 order-md-1 mb-40">
                  <div className="row">
                    <div className="section-title text-start col mb-30">
                      <h1>ON SALE PRODUCTS</h1>
                      <p>All featured product find here</p>
                    </div>
                  </div>
                  <div className="small-product-slider row row-7 mbn-40">
                    <div className="col mb-40">
                      <div className="on-sale-product">
                        <a href="single-product.html" className="image">
                          <img
                            src="assets/images/product/on-sale-1.jpg"
                            alt="Image"
                          />
                        </a>
                        <div className="content text-center">
                          <h4 className="title">
                            <a href="single-product.html">Skily Girld Dress</a>
                          </h4>
                          <span className="price">
                            $19 <span className="old">$35</span>
                          </span>
                          <div className="ratting">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star-half-o" />
                            <i className="fa fa-star-o" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col mb-40">
                      <div className="on-sale-product">
                        <a href="single-product.html" className="image">
                          <img
                            src="assets/images/product/on-sale-2.jpg"
                            alt="Image"
                          />
                        </a>
                        <div className="content text-center">
                          <h4 className="title">
                            <a href="single-product.html">Kelly Shirt Set</a>
                          </h4>
                          <span className="price">
                            $08 <span className="old">$25</span>
                          </span>
                          <div className="ratting">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star-o" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col mb-40">
                      <div className="on-sale-product">
                        <a href="single-product.html" className="image">
                          <img
                            src="assets/images/product/on-sale-3.jpg"
                            alt="Image"
                          />
                        </a>
                        <div className="content text-center">
                          <h4 className="title">
                            <a href="single-product.html">Sleeveless Tops</a>
                          </h4>
                          <span className="price">
                            $05 <span className="old">$12</span>
                          </span>
                          <div className="ratting">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col mb-40">
                      <div className="on-sale-product">
                        <a href="single-product.html" className="image">
                          <img
                            src="assets/images/product/on-sale-4.jpg"
                            alt="Image"
                          />
                        </a>
                        <div className="content text-center">
                          <h4 className="title">
                            <a href="single-product.html">Babysuit Bundle</a>
                          </h4>
                          <span className="price">
                            $25 <span className="old">$45</span>
                          </span>
                          <div className="ratting">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star-half-o" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col mb-40">
                      <div className="on-sale-product">
                        <a href="single-product.html" className="image">
                          <img
                            src="assets/images/product/on-sale-5.jpg"
                            alt="Image"
                          />
                        </a>
                        <div className="content text-center">
                          <h4 className="title">
                            <a href="single-product.html">Xshuai Baby Frock</a>
                          </h4>
                          <span className="price">
                            $13 <span className="old">$28</span>
                          </span>
                          <div className="ratting">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col mb-40">
                      <div className="on-sale-product">
                        <a href="single-product.html" className="image">
                          <img
                            src="assets/images/product/on-sale-6.jpg"
                            alt="Image"
                          />
                        </a>
                        <div className="content text-center">
                          <h4 className="title">
                            <a href="single-product.html">Stylish Hat</a>
                          </h4>
                          <span className="price">
                            $03 <span className="old">$10</span>
                          </span>
                          <div className="ratting">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star-half-o" />
                            <i className="fa fa-star-o" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col mb-40">
                      <div className="on-sale-product">
                        <a href="single-product.html" className="image">
                          <img
                            src="assets/images/product/on-sale-7.jpg"
                            alt="Image"
                          />
                        </a>
                        <div className="content text-center">
                          <h4 className="title">
                            <a href="single-product.html">Aolvo Kids Munch</a>
                          </h4>
                          <span className="price">
                            $25 <span className="old">$35</span>
                          </span>
                          <div className="ratting">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star-half-o" />
                            <i className="fa fa-star-o" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col mb-40">
                      <div className="on-sale-product">
                        <a href="single-product.html" className="image">
                          <img
                            src="assets/images/product/on-sale-8.jpg"
                            alt="Image"
                          />
                        </a>
                        <div className="content text-center">
                          <h4 className="title">
                            <a href="single-product.html">Tmart Baby Dress</a>
                          </h4>
                          <span className="price">
                            $48 <span className="old">$65</span>
                          </span>
                          <div className="ratting">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star-half-o" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Product Section End */}
          {/* Banner Section Start */}
          <div className="banner-section section section-padding pt-0 fix">
            <div className="row row-5 mbn-10">
              <div className="col-lg-4 col-md-6 col-12 mb-10">
                <div className="banner banner-5 home-2-banner">
                  <a href="#" className="image">
                    <img
                      src="assets/images/banner/banner-10.jpg"
                      alt="Banner Image"
                    />
                  </a>
                  <div
                    className="content"
                    style={{
                      backgroundImage:
                        "url(assets/images/banner/banner-5-2-shape.png)"
                    }}
                  >
                    <h1>
                      Collection for <br />
                      Baby Girl’s
                    </h1>
                    <h2>Flat 25% off</h2>
                  </div>
                  <a href="#" className="shop-link" data-hover="SHOP NOW">
                    SHOP NOW
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mb-10">
                <div className="banner banner-4 home-2-banner">
                  <a href="#" className="image">
                    <img
                      src="assets/images/banner/banner-11.jpg"
                      alt="Banner Image"
                    />
                  </a>
                  <div className="content">
                    <div className="content-inner">
                      <h1>Online Shopping</h1>
                      <h2>
                        Flat 25% off <br />
                        New Trend for 2022
                      </h2>
                      <a href="#" data-hover="SHOP NOW">
                        SHOP NOW
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mb-10">
                <div className="banner banner-3 home-2-banner">
                  <a href="#" className="image">
                    <img
                      src="assets/images/banner/banner-12.jpg"
                      alt="Banner Image"
                    />
                  </a>
                  <div
                    className="content"
                    style={{
                      backgroundImage:
                        "url(assets/images/banner/banner-3-2-shape.png)"
                    }}
                  >
                    <h1>New Arrivals</h1>
                    <h2>Up to 35% off</h2>
                    <h4>2 - 5 Years</h4>
                  </div>
                  <a href="#" className="shop-link" data-hover="SHOP NOW">
                    SHOP NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Banner Section End */}
          {/* Testimonial Section Start */}
          <div className="testimonial-section section section-padding pt-0">
            <div className="container">
              <div className="row">
                <div className="section-title text-center col mb-30">
                  <h1>CLIENTS REVIEW</h1>
                  <p>Clients says abot us</p>
                </div>
              </div>
              <div className="testimonial-slider slick-space d-flex">
                <div className="slick-slide">
                  <div className="testimonial-item">
                    <p>
                      Jadusona is one of the most exclusive Baby shop in the wold,
                      where you can find all product for your baby that your want to
                      buy for your baby. I recomanded this shop all of you
                    </p>
                    <div className="testimonial-author">
                      <img
                        src="assets/images/testimonial/testimonial-1.png"
                        alt="Image"
                      />
                      <div className="content">
                        <h4>Zacquline Smith</h4>
                        <p>CEO, Momens Group</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slick-slide">
                  <div className="testimonial-item">
                    <p>
                      Jadusona is one of the most exclusive Baby shop in the wold,
                      where you can find all product for your baby that your want to
                      buy for your baby. I recomanded this shop all of you
                    </p>
                    <div className="testimonial-author">
                      <img
                        src="assets/images/testimonial/testimonial-2.png"
                        alt="Image"
                      />
                      <div className="content">
                        <h4>Nusaha Williams</h4>
                        <p>CEO, Momens Group</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slick-slide">
                  <div className="testimonial-item">
                    <p>
                      Jadusona is one of the most exclusive Baby shop in the wold,
                      where you can find all product for your baby that your want to
                      buy for your baby. I recomanded this shop all of you
                    </p>
                    <div className="testimonial-author">
                      <img
                        src="assets/images/testimonial/testimonial-1.png"
                        alt="Image"
                      />
                      <div className="content">
                        <h4>Zacquline Smith</h4>
                        <p>CEO, Momens Group</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slick-slide">
                  <div className="testimonial-item">
                    <p>
                      Jadusona is one of the most exclusive Baby shop in the wold,
                      where you can find all product for your baby that your want to
                      buy for your baby. I recomanded this shop all of you
                    </p>
                    <div className="testimonial-author">
                      <img
                        src="assets/images/testimonial/testimonial-2.png"
                        alt="Image"
                      />
                      <div className="content">
                        <h4>Nusaha Williams</h4>
                        <p>CEO, Momens Group</p>
                      </div>
                    </div>
                  </div>
                </div>
                `
              </div>
            </div>
          </div>
          {/* Testimonial Section End */}
          {/* Feature Section Start */}
          <div className="feature-section section section-padding pt-0 fix">
            <div className="container-fluid">
              <div className="feature-wrap row row-10 mbn-20">
                <div className="col-lg-4 col-md-6 col-12 mb-20">
                  <div
                    className="feature-item-2 text-center bg-theme-one"
                    style={{
                      backgroundImage: "url(assets/images/feature/feature-1-bg.png)"
                    }}
                  >
                    <div className="icon">
                      <img src="assets/images/feature/feature-1.png" alt="Image" />
                    </div>
                    <div className="content">
                      <h3>Free Shipping</h3>
                      <p>Start from $100</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 mb-20">
                  <div
                    className="feature-item-2 text-center bg-theme-one"
                    style={{
                      backgroundImage: "url(assets/images/feature/feature-2-bg.png)"
                    }}
                  >
                    <div className="icon">
                      <img src="assets/images/feature/feature-2.png" alt="Image" />
                    </div>
                    <div className="content">
                      <h3>Money Back Guarantee</h3>
                      <p>Back within 25 days</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 mb-20">
                  <div
                    className="feature-item-2 text-center bg-theme-one"
                    style={{
                      backgroundImage: "url(assets/images/feature/feature-3-bg.png)"
                    }}
                  >
                    <div className="icon">
                      <img src="assets/images/feature/feature-3.png" alt="Image" />
                    </div>
                    <div className="content">
                      <h3>Secure Payment</h3>
                      <p>Payment Security</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Feature Section End */}
          {/* Blog Section Start */}
          <div className="blog-section section section-padding pt-0">
            <div className="container">
              <div className="row">
                <div className="section-title text-center col mb-30">
                  <h1>FROM THE BLOG</h1>
                  <p>Find all latest update here</p>
                </div>
              </div>
              <div className="row mbn-40">
                <div className="col-lg-6 col-12 mb-40">
                  <div className="blog-item">
                    <div className="image-wrap">
                      <h4 className="date">
                        May <span>25</span>
                      </h4>
                      <a className="image" href="single-blog.html">
                        <img src="assets/images/blog/blog-3.jpg" alt="Image" />
                      </a>
                    </div>
                    <div className="content">
                      <h4 className="title">
                        <a href="single-blog.html">
                          Lates and new Trens for baby fashion
                        </a>
                      </h4>
                      <div className="desc">
                        <p>
                          Jadusona is one of the most of a exclusive Baby shop in the
                        </p>
                      </div>
                      <ul className="meta">
                        <li>
                          <a href="#">
                            <img
                              src="assets/images/blog/blog-author-1.jpg"
                              alt="Blog Author"
                            />
                            Muhin
                          </a>
                        </li>
                        <li>
                          <a href="#">25 Likes</a>
                        </li>
                        <li>
                          <a href="#">05 Views</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12 mb-40">
                  <div className="blog-item">
                    <div className="image-wrap">
                      <h4 className="date">
                        May <span>20</span>
                      </h4>
                      <a className="image" href="single-blog.html">
                        <img src="assets/images/blog/blog-4.jpg" alt="Image" />
                      </a>
                    </div>
                    <div className="content">
                      <h4 className="title">
                        <a href="single-blog.html">
                          New Collection New Trend all New Style
                        </a>
                      </h4>
                      <div className="desc">
                        <p>
                          Jadusona is one of the most of a exclusive Baby shop in the
                        </p>
                      </div>
                      <ul className="meta">
                        <li>
                          <a href="#">
                            <img
                              src="assets/images/blog/blog-author-2.jpg"
                              alt="Blog Author"
                            />
                            Takiya
                          </a>
                        </li>
                        <li>
                          <a href="#">25 Likes</a>
                        </li>
                        <li>
                          <a href="#">05 Views</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Blog Section End */}
          {/* Brand Section Start */}
          <div className="brand-section section section-padding pt-0">
            <div className="container-fluid">
              <div className="row">
                <div className="brand-slider">
                  <div className="brand-item col">
                    <img src="assets/images/brands/brand-1.png" alt="Image" />
                  </div>
                  <div className="brand-item col">
                    <img src="assets/images/brands/brand-2.png" alt="Image" />
                  </div>
                  <div className="brand-item col">
                    <img src="assets/images/brands/brand-3.png" alt="Image" />
                  </div>
                  <div className="brand-item col">
                    <img src="assets/images/brands/brand-4.png" alt="Image" />
                  </div>
                  <div className="brand-item col">
                    <img src="assets/images/brands/brand-5.png" alt="Image" />
                  </div>
                  <div className="brand-item col">
                    <img src="assets/images/brands/brand-6.png" alt="Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Brand Section End */}
          {/* Footer Top Section Start */}
          <div className="footer-top-section section section-padding bg-theme-one-light">
            <div className="container">
              <div className="row mbn-40">
                <div className="footer-widget footer-widget-2 col-lg-3 col-md-6 col-12 mb-40">
                  <h4 className="title">CONTACT US</h4>
                  <p>
                    You address will be here
                    <br /> Lorem Ipsum text
                  </p>
                  <p>
                    <a href="tel:01234567890">01234 567 890</a>
                    <a href="tel:01234567891">01234 567 891</a>
                  </p>
                  <p>
                    <a href="mailto:info@example.com">info@example.com</a>
                    <a href="#">www.example.com</a>
                  </p>
                </div>
                <div className="footer-widget footer-widget-2 col-lg-3 col-md-6 col-12 mb-40">
                  <h4 className="title">PRODUCTS</h4>
                  <ul>
                    <li>
                      <a href="#">New Arrivals</a>
                    </li>
                    <li>
                      <a href="#">Best Seller</a>
                    </li>
                    <li>
                      <a href="#">Trendy Items</a>
                    </li>
                    <li>
                      <a href="#">Best Deals</a>
                    </li>
                    <li>
                      <a href="#">On Sale Products</a>
                    </li>
                    <li>
                      <a href="#">Featured Products</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-widget footer-widget-2 col-lg-3 col-md-6 col-12 mb-40">
                  <h4 className="title">INFORMATION</h4>
                  <ul>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="#">Payment Method</a>
                    </li>
                    <li>
                      <a href="#">Product Warranty</a>
                    </li>
                    <li>
                      <a href="#">Return Process</a>
                    </li>
                    <li>
                      <a href="#">Payment Security</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-widget footer-widget-2 col-lg-3 col-md-6 col-12 mb-40">
                  <h4 className="title">NEWSLETTER</h4>
                  <p>Subscribe our newsletter and get all update of our product</p>
                  <form id="mc-form" className="mc-form footer-subscribe-form">
                    <input
                      id="mc-email"
                      autoComplete="off"
                      placeholder="Enter your email here"
                      name="EMAIL"
                      type="email"
                    />
                    <button id="mc-submit">
                      <i className="fa fa-paper-plane-o" />
                    </button>
                  </form>
                  {/* mailchimp-alerts Start */}
                  <div className="mailchimp-alerts">
                    <div className="mailchimp-submitting" />
                    {/* mailchimp-submitting end */}
                    <div className="mailchimp-success" />
                    {/* mailchimp-success end */}
                    <div className="mailchimp-error" />
                    {/* mailchimp-error end */}
                  </div>
                  {/* mailchimp-alerts end */}
                  <h5>FOLLOW US</h5>
                  <p className="footer-social">
                    <a href="#">Facebook</a> - <a href="#">Twitter</a> -{" "}
                    <a href="#">Google+</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Footer Top Section End */}
          {/* Footer Bottom Section Start */}
          <div className="footer-bottom-section section bg-theme-one pt-15 pb-15">
            <div className="container">
              <div className="row">
                <div className="col text-center">
                  <p className="footer-copyright">
                    © 2022 Jadusona. Made with{" "}
                    <i className="fa fa-heart heart-icon text-dark" /> By{" "}
                    <a target="_blank" href="https://hasthemes.com">
                      HasThemes
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Footer Bottom Section End */}
        </div>

      </>
      
    );
  };
  
  export default Atlantic;
  