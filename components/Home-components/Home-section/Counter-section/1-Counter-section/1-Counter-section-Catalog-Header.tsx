import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { GetStaticProps } from "next";
// ------------------------------ ---------------------- --------
interface AppProps {
  counterSectionCatalogHeader: OneCatalogData;
}
export const CounterSectionCatalogHeader: React.FunctionComponent<AppProps> = ({
  counterSectionCatalogHeader,
}) => {
  
  const { ShortDescription, ContentAttachment } = counterSectionCatalogHeader;
  return (
    <>
      <img src={ContentAttachment[0]} alt="logo" />
      <p style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>
        {ShortDescription}
      </p>
    </>
  );
};
