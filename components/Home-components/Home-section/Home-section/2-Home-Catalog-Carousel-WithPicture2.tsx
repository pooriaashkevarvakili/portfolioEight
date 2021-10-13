import { OneCatalogData } from "../../../../types/OneCatalogData";

// ------------------------------ ---------------------- --------
interface AppProps {
  homeCatalogCarouselWithPicture2: OneCatalogData;
}
export const HomeCatalogCarouselWithPicture2: React.FunctionComponent<AppProps> = ({
  homeCatalogCarouselWithPicture2,
}) => {
  const {
    ContentAttachment,
    FirstHeader,
    SecondHeader,
    ShortDescription,
  } = homeCatalogCarouselWithPicture2;
  return (
    <div className="item active">
      <img
        src={ContentAttachment[0] + "?width=1293.64&height=672.46"}
        alt="image"
      />
      <div className="carousel-caption">
        <div className="carousel-caption-content">
          <h2 style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>
            <span style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>
              {FirstHeader}
            </span>
            <strong style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>
              {SecondHeader}
            </strong>
            {ShortDescription}
          </h2>
        </div>
      </div>
    </div>
  );
};
