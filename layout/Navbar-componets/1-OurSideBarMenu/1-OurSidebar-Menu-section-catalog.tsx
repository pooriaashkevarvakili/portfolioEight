import { DataService } from "../../../service/data.service";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { OneCatalogData } from "../../../types/OneCatalogData";
import { FaInstagram, FaTelegram } from "react-icons/fa";
// ------------------------------ ---------------------- --------

interface PassingProps {
  navbarStrings: OneCatalogData;
}

type AppProps = PassingProps & InferGetStaticPropsType<typeof getStaticProps>;

// ------------------------------ ---------------------- --------

export const OurSidebarMenu: React.FunctionComponent<AppProps> = ({
  navbarStrings,
}) => {
  const {
    ContentAttachment,
    FirstHeader,
    SecondHeader,
    ShortDescription,
    LongDescription,
    ChildFirstHeader,
    ChildSecondHeader,
  } = navbarStrings;

  return (
    <>
      <header id="masthead" className="site-header">
        <div className="container">
          <div className="row">
            <div className="site-branding col-sm-2">
              <h1 className="site-title">
                <a href="#" title="Mina" rel="home">
                  <img src={ContentAttachment[0]} alt="logo" />
                </a>
              </h1>
            </div>

            <div className="col-sm-10">
              <nav id="site-navigation" className="navbar">
                <div className="collapse navbar-collapse navbar-ex1-collapse">
                  <ul className="nav navbar-nav">
                    <li>
                      <a style={{ fontFamily: "IRANSansWeb" }} href="/">{ShortDescription}</a>
                    </li>
                    <li>
                      <a style={{ fontFamily: "IRANSansWeb" }} href="/services">{FirstHeader}</a>
                    </li>

                    <li>
                      <a style={{ fontFamily: "IRANSansWeb" }} href="/contact">{SecondHeader}</a>
                    </li>
                  </ul>
                  <ul className="nav navbar-nav">
                    <li className="dropdown">
                      <a href={ChildSecondHeader}>
                        <i
                          className="fa fa-telegram fa-2x"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a href={ChildFirstHeader}>
                        <i
                          className="fa fa-instagram fa-2x"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
              <nav
                id="site-navigation-mobile"
                className="navbar mobile-navigation"
              >
                <ul className="nav navbar-nav">
                  <li>
                    <button
                      type="button"
                      className="navbar-toggle offcanvas-toggle"
                      data-toggle="offcanvas"
                      data-target="#js-bootstrap-offcanvas"
                    >
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                  </li>
                </ul>

                <div
                  className="navbar-offcanvas navbar-offcanvas-touch navbar-offcanvas-right"
                  id="js-bootstrap-offcanvas"
                >
                  <button
                    type="button"
                    className="offcanvas-toggle closecanvas"
                    data-toggle="offcanvas"
                    data-target="#js-bootstrap-offcanvas"
                  >
                    <i className="fa fa-times fa-2x" aria-hidden="true"></i>
                  </button>
                  <ul className="nav navbar-nav">
                    <li>
                      <a style={{ fontFamily: "IRANSansWeb" }} href="/">{ShortDescription}</a>
                    </li>
                    <li>
                      <a style={{ fontFamily: "IRANSansWeb" }} href="/services">{navbarStrings.FirstHeader}</a>
                    </li>

                    <li>
                      <a style={{ fontFamily: "IRANSansWeb" }} href="/contact">{navbarStrings.SecondHeader}</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

// ---------------- -------------- ---------------- ------ --------

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
