import { GetStaticProps, InferGetStaticPropsType } from "next";
import { OneCatalogData } from "../../../types/OneCatalogData";
// ------------------------------ ---------------------- --------
import { FaTelegram } from "react-icons/fa";
interface PassingProps {
  ourFooterAllRightCatalog: OneCatalogData;
}

type AppProps = PassingProps & InferGetStaticPropsType<typeof getStaticProps>;

// ------------------------------ ---------------------- --------

export const OurFooterAllRightCatalog: React.FunctionComponent<AppProps> = ({
  ourFooterAllRightCatalog,
}) => {
  
  const {
    FirstHeader,
    ContentAttachment,
    SecondHeader,
    ShortDescription,
  } = ourFooterAllRightCatalog[0];

  return (
    <>
      <div className="clearfix"></div>
      <footer id="colophon" className="site-footer">
        <div className="footer-info">
          <div className="container">
            <div className="row">
              <div className="footer-logo">
                <a href="#" title="Mina" rel="home">
                  <img src={ContentAttachment[0]} alt="logo" />
                </a>
              </div>
              <div className="footer-menu">
                <div className="footer-links">
                  <ul className="social">
                    <li className="google">
                      <a href={FirstHeader}>
                        <i
                          className="fa fa-instagram fa-2x"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li className="twitter">
                      <a href={SecondHeader}>
                        <i
                          className="fa fa-telegram fa-2x"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            <div className="row">
              <p style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>
                {ShortDescription}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

// ---------------- -------------- ---------------- ------ --------

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
