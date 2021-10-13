import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { GetStaticProps } from "next";
// ------------------------------ ---------------------- --------
interface AppProps {
  ourMackeupCatalogWithPictureFour: OneCatalogData;
}
export const OurMackeupCatalogWithPictureFour: React.FunctionComponent<AppProps> = ({
  ourMackeupCatalogWithPictureFour,
}) => {
  
  const {
    ContentAttachment,
    FirstHeader,
    SecondHeader,
    ShortDescription,
  } = ourMackeupCatalogWithPictureFour;
  return (
    <div className="col-sm-6 col-md-3">
      <div className="artist-box">
        <a href="#">
          <img
            src={ContentAttachment[0] + "?width=262.5&height=262.5"}
            alt="image"
          />
        </a>
        <div className="artist-box-info">
          <h3>
            <a
              style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}
              href={ShortDescription}
            >
              {FirstHeader}
            </a>
            <span style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>
              {SecondHeader}
            </span>
          </h3>
          <a
            style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}
            href={ShortDescription}
            className="artist-social-link"
          >
            <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
