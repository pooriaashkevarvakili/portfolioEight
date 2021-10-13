import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { GetStaticProps } from "next";

// ------------------------------ ---------------------- --------
interface AppProps {
  newsSectionCatalogItemThree: OneCatalogData;
}
export const NewsSectionCatalogItemThree: React.FunctionComponent<AppProps> = ({
  newsSectionCatalogItemThree,
}) => {
  
  const {
    FirstHeader,
    SecondHeader,
    ChildFirstHeader,
    LongDescription,
    ContentAttachment,
    ShortDescription,
  } = newsSectionCatalogItemThree;
  return (
    <div className="col-md-4">
      <div className="news-box">
        <div className="news-box-image">
          <a href={LongDescription}>
            <img src={ContentAttachment[0]+ "?width=358.1&height=242.88"} alt="image" />
          </a>
        </div>
        <div className="news-box-content">
          <span
            style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}
            className="date-meta"
          >
            {FirstHeader}
          </span>
          <h3 style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>
            <a
              style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}
              href={ChildFirstHeader}
            >
              {SecondHeader}
            </a>
          </h3>
          <p style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>
            {ShortDescription}
          </p>
        </div>
      </div>
    </div>
  );
};
