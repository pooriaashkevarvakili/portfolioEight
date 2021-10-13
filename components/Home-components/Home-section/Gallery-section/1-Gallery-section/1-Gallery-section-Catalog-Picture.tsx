import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { GetStaticProps } from "next";
import Carousel from "nuka-carousel";
// ------------------------------ ---------------------- --------
interface AppProps {
  gallerySectionCatalogPicture: OneCatalogData;
  strClass: any;
}
export const GallerySectionCatalogPicture: React.FunctionComponent<AppProps> = ({
  gallerySectionCatalogPicture,
}) => {
  const {
    ContentAttachment,
    FirstHeader,
    SecondHeader,
    ShortDescription,
    LongDescription,
    ChildContentAttachment,
  } = gallerySectionCatalogPicture;

  // const renderItems = () =>
  //   ContentAttachment.map((item, idx) => (
  //     <img style={{ width: 237 }} src={item[idx]} alt="image" />
  //   ));

  return (
    
    <div style={{position:"relative",top:-45}} id="content" className="site-content content-wrapper page-content">
      <div className="page type-page hentry">
        <div className="page-content-body">
          
          <Carousel
            renderTopCenterControls={({ currentSlide }) => <div></div>}
            renderCenterLeftControls={({ previousSlide }) => (
              <button
                style={{ display: "none" }}
                onClick={previousSlide}
              ></button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <button style={{ display: "none" }} onClick={nextSlide}></button>
            )}
          >
            <div className="instagram-carousel loop owl-carousel">
              <div>
                <img
                  style={{ width: 237 }}
                  src={ContentAttachment[4] + "?width=237&height=237"}
                  alt="image"
                />
                <img
                  style={{ width: 237 }}
                  src={ContentAttachment[3] + "?width=237&height=237"}
                  alt="image"
                />
                <img
                  style={{ width: 237 }}
                  src={ContentAttachment[2] + "?width=237&height=237"}
                  alt="image"
                />
                <img
                  style={{ width: 237 }}
                  src={ContentAttachment[1] + "?width=237&height=237"}
                  alt="image"
                />
                <img
                  style={{ width: 237 }}
                  src={ContentAttachment[0] + "?width=237&height=237"}
                  alt="image"
                />
                <img
                  style={{ width: 109, height: 237 }}
                  src={ChildContentAttachment[0] + "?width=109&height=237"}
                  alt="image"
                />
              </div>
            </div>
            <div className="instagram-carousel loop owl-carousel">
              <div>
                <img
                  style={{ width: 237 }}
                  src={ContentAttachment[4] + "?width=237&height=237"}
                  alt="image"
                />
                <img
                  style={{ width: 237 }}
                  src={ContentAttachment[3] + "?width=237&height=237"}
                  alt="image"
                />
                <img
                  style={{ width: 237 }}
                  src={ContentAttachment[2] + "?width=237&height=237"}
                  alt="image"
                />
                <img
                  style={{ width: 237 }}
                  src={ContentAttachment[1] + "?width=237&height=237"}
                  alt="image"
                />
                <img
                  style={{ width: 237 }}
                  src={ContentAttachment[0] + "?width=237&height=237"}
                  alt="image"
                />

                <img
                  style={{ width: 109, height: 237 }}
                  src={ChildContentAttachment[0] + "?width=109&height=237"}
                  alt="image"
                />
              </div>
            </div>
          </Carousel>

          <div className="instagram-info">
            <div className="container">
              <div className="row">
                <a style={{position:"relative",top:10}}  href={SecondHeader}>
                  <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>{" "}
                  <p 
                  style={{fontFamily: "IRANSansWeb",position:"relative",top:5,direction:"rtl"}}
                  >{FirstHeader}</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>

      </div>
      
  );
};
