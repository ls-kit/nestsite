// components/Header.js
const Header = () => {
    return (
     <>
<div className="header-section section">
      {/* Header Top Start */}
      <div className="header-top header-top-one bg-theme-two">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div className="col mt-10 mb-10 d-none d-md-flex">
              {/* Header Top Left Start */}
              <div className="header-top-left">
                <p>Welcome to Jadusona</p>
                <p>
                  Hotline: <a href="tel:0123456789">0123 456 789</a>
                </p>
              </div>
              {/* Header Top Left End */}
            </div>
            <div className="col mt-10 mb-10">
              {/* Header Language Currency Start */}
              <ul className="header-lan-curr">
                <li>
                  <a href="#">eng</a>
                  <ul>
                    <li>
                      <a href="#">english</a>
                    </li>
                    <li>
                      <a href="#">spanish</a>
                    </li>
                    <li>
                      <a href="#">france</a>
                    </li>
                    <li>
                      <a href="#">russian</a>
                    </li>
                    <li>
                      <a href="#">chinese</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">$usd</a>
                  <ul>
                    <li>
                      <a href="#">pound</a>
                    </li>
                    <li>
                      <a href="#">dollar</a>
                    </li>
                    <li>
                      <a href="#">euro</a>
                    </li>
                    <li>
                      <a href="#">yen</a>
                    </li>
                  </ul>
                </li>
              </ul>
              {/* Header Language Currency End */}
            </div>
            <div className="col mt-10 mb-10">
              {/* Header Shop Links Start */}
              <div className="header-top-right">
                <p>
                  <a href="my-account.html">My Account</a>
                </p>
                <p>
                  <a href="login-register.html">Register</a>
                  <a href="login-register.html">Login</a>
                </p>
              </div>
              {/* Header Shop Links End */}
            </div>
            
          </div>
        </div>
      </div>


     </>
    );
  };
  
  export default Header;
  