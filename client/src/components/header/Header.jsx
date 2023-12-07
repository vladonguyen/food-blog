export default function Header() {
  return (
    <>
      <header className="header-area">
        {/* Top Header Area */}
        <div className="top-header-area">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-between">
              {/* Breaking News */}
              <div className="col-12 col-sm-6">
                <div className="breaking-news">
                  <div id="breakingNewsTicker" className="ticker">
                    <ul>
                      <li>
                        <a href="#">Hello World!</a>
                      </li>
                      <li>
                        <a href="#">Welcome to Colorlib Family.</a>
                      </li>
                      <li>
                        <a href="#">Hello Delicious!</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Top Social Info */}
              <div className="col-12 col-sm-6">
                <div className="top-social-info text-right">
                  <a href="#">
                    <i className="fa fa-pinterest" aria-hidden="true" />
                  </a>
                  <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                  <a href="#">
                    <i className="fa fa-dribbble" aria-hidden="true" />
                  </a>
                  <a href="#">
                    <i className="fa fa-behance" aria-hidden="true" />
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Navbar Area */}
        <div className="delicious-main-menu">
          <div className="classy-nav-container breakpoint-off">
            <div className="container">
              {/* Menu */}
              <nav className="classy-navbar justify-content-between" id="deliciousNav">
                {/* Logo */}
                <a className="nav-brand" href="index.html">
                  <img src="img/core-img/logo.png" alt="" />
                </a>
                {/* Navbar Toggler */}
                <div className="classy-navbar-toggler">
                  <span className="navbarToggler">
                    <span />
                    <span />
                    <span />
                  </span>
                </div>
                {/* Menu */}
                <div className="classy-menu">
                  {/* close btn */}
                  <div className="classycloseIcon">
                    <div className="cross-wrap">
                      <span className="top" />
                      <span className="bottom" />
                    </div>
                  </div>
                  {/* Nav Start */}
                  <div className="classynav">
                    <ul>
                      <li className="active">
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="#">Pages</a>
                        {/* Removed the <ul> with class "dropdown" here */}
                      </li>
                      <li>
                        <a href="#">Mega Menu</a>
                        <div className="megamenu">
                          <ul className="single-mega cn-col-4">
                            <li className="title">Catagory</li>
                            <li>
                              <a href="index.html">Home</a>
                            </li>
                            {/* ... other <li> elements ... */}
                          </ul>
                          {/* ... other <ul> elements ... */}
                        </div>
                      </li>
                      <li>
                        <a href="receipe-post.html">Receipies</a>
                      </li>
                      <li>
                        <a href="receipe-post.html">4 Vegans</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                    {/* Newsletter Form */}
                    <div className="search-btn">
                      <i className="fa fa-search" aria-hidden="true" />
                    </div>
                  </div>
                  {/* Nav End */}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
