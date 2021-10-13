import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { GetStaticProps } from "next";

// ------------------------------ ---------------------- --------
interface AppProps {
  worksCatalogItemOne: OneCatalogData;
}
export const WorksCatalogItemOne: React.FunctionComponent<AppProps> = ({
  worksCatalogItemOne,
}) => {
  
  const { ContentAttachment, FirstHeader, SecondHeader } = worksCatalogItemOne;
  return (
    <div className="col-sm-4">
      <img src={ContentAttachment[0] + "?width=133&height=133"} alt="image" />
      <h3 style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>
        {FirstHeader}
      </h3>
      <p style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>
        {SecondHeader}
      </p>
    </div>
  );
};
