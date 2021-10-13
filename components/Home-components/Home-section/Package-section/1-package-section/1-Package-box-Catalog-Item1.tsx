import { OneCatalogData } from "../../../../../types/OneCatalogData";

import { GetStaticProps } from "next";
// ------------------------------ ---------------------- --------
interface AppProps {
  packageBoxCatalogItem1: OneCatalogData;
}
export const PackageBoxCatalogItem1: React.FunctionComponent<AppProps> = ({
  packageBoxCatalogItem1,
}) => {
  const {
    FirstHeader,
    SecondHeader,
    ShortDescription,
    LongDescription,
    ChildFirstHeader,
    ChildSecondHeader,
    ChildShortDescription,
    ChildLongDescription,
  } = packageBoxCatalogItem1;
  
  return (
    <div className="col-md-6 col-lg-3">
      <div className="package-box">
        <h3 style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>
          {FirstHeader}
          <span style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>
            {SecondHeader}
          </span>
        </h3>
        <p className="price"></p>
        <ul style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>
          <li style={{ fontFamily: "IRANSansWeb" }}>
            <i className="fa fa-check" aria-hidden="true"></i>

            {ShortDescription}
          </li>
          <li style={{ fontFamily: "IRANSansWeb" }}>
            <i className="fa fa-check" aria-hidden="true"></i>
            {LongDescription}
          </li>
          <li style={{ fontFamily: "IRANSansWeb" }}>
            <i className="fa fa-check" aria-hidden="true"></i>
            {ChildFirstHeader}
          </li>
          <li style={{ fontFamily: "IRANSansWeb" }}>
            <i className="fa fa-times" aria-hidden="true"></i>
            {ChildSecondHeader}
          </li>
          <li style={{ fontFamily: "IRANSansWeb" }}>
            <i className="fa fa-times" aria-hidden="true"></i>
            {ChildShortDescription}
          </li>
          <li style={{ fontFamily: "IRANSansWeb" }}>
            <i className="fa fa-times" aria-hidden="true"></i>
            {ChildLongDescription}
          </li>
        </ul>
      </div>
    </div>
  );
};
