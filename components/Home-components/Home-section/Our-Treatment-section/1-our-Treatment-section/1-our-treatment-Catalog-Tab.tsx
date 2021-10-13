import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { GetStaticProps } from "next";
// ------------------------------ ---------------------- --------
interface AppProps {
  ourTreatmentCatalogTab: OneCatalogData;
}
export const OurTreatmentCatalogTab: React.FunctionComponent<AppProps> = ({
  ourTreatmentCatalogTab,
}) => {
  const {
    FirstHeader,
    SecondHeader,
    ShortDescription,
    LongDescription,
    ChildFirstHeader,
    ChildSecondHeader,
  } = ourTreatmentCatalogTab;
  return (
    <ul className="nav nav-tabs responsive-tabs">
      <li className="face active">
        <a
          style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}
          href="#services-1"
          data-toggle="tab"
        >
          {FirstHeader}
          <span style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>
            {SecondHeader}
          </span>
        </a>
      </li>
      <li className="eye">
        <a
          style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}
          href="#services-2"
          data-toggle="tab"
        >
          {ShortDescription}
          <span style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>
            {LongDescription}
          </span>
        </a>
      </li>
      <li className="hair">
        <a
          style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}
          href="#services-3"
          data-toggle="tab"
        >
          {ChildFirstHeader}
          <span style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>
            {ChildSecondHeader}
          </span>
        </a>
      </li>

    </ul>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
