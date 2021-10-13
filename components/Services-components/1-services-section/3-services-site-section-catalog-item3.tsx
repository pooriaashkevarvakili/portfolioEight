import { OneCatalogData } from "../../../types/OneCatalogData";
import { GetStaticProps } from "next";

// ------------------------------ ---------------------- --------
interface AppProps {
  servicesSiteSectionCatalogItemThree: OneCatalogData;
}
export const ServicesSiteSectionCatalogItemThree: React.FunctionComponent<AppProps> = ({
  servicesSiteSectionCatalogItemThree,
}) => {

  const {
    ContentAttachment,
    FirstHeader,
    SecondHeader,
    ShortDescription,
    LongDescription,
    ChildFirstHeader,
    ChildSecondHeader,
  } = servicesSiteSectionCatalogItemThree;

  return (
    <div className="services-list-item">
      <div className="col-md-5">
        <div className="services-list-img">
          <img
            src={ContentAttachment[1] + "?width=430&height=350"}
            alt="image"
          />
        </div>
      </div>
      <div className="col-md-7">
        <div className="services-list-info">
          <h2 style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>
            <a href={ChildSecondHeader}>
              <strong style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>
                {FirstHeader}
              </strong>{" "}
              {SecondHeader}
            </a>
          </h2>
          <p style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>
            {ShortDescription}
          </p>
          <ul>
            <li style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>
              {LongDescription}{" "}
            </li>
            <li style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>
              {ChildFirstHeader}
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
      .services-list-info ul li:before{
	background:url(${ContentAttachment[0]+"?width=22&height=22"});
  margin-left:380px;
      `}</style>
    </div>
  );
};
