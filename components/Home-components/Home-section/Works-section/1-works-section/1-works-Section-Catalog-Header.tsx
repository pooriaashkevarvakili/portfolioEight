import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { GetStaticProps } from "next";
// ------------------------------ ---------------------- --------
interface AppProps {
  worksCatalogHeader: OneCatalogData;
}
export const WorksCatalogHeader: React.FunctionComponent<AppProps> = ({
  worksCatalogHeader,
}) => {
  
  const { FirstHeader, SecondHeader, ShortDescription,ContentAttachment } = worksCatalogHeader;

  return (
    <div className="section-header clearfix">
      <span style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>
        {FirstHeader}
      </span>
      <h2 style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>
        <strong style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>
          {SecondHeader}
        </strong>{" "}
        {ShortDescription}
      </h2>
      <div className="section-break"></div>
      <style jsx>{`
      .section-break{
	background:url(${ContentAttachment[0]+"?width=22&height=22"}) no-repeat center center;
      }
      `}</style>
    </div>
  );
};
