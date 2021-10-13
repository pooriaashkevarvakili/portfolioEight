import { OneCatalogData } from "../../../types/OneCatalogData";
import { GetStaticProps } from "next";

// ------------------------------ ---------------------- --------
interface AppProps {
  servicesNavbarSectionCatalog: OneCatalogData;
}
export const ServicesNavbarSectionCatalog: React.FunctionComponent<AppProps> = ({
  servicesNavbarSectionCatalog,
}) => {
  const {
    FirstHeader,
    SecondHeader,
    ShortDescription,
    ContentAttachment,
  } = servicesNavbarSectionCatalog;
  
  return (
    <section className="services-hero">
      <div className="container">
        <div className="row">
          <div className="section-content">
            <h1 style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>
              {FirstHeader}
            </h1>
            <ol className="breadcrumb">
              <li>
                <a
                  style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}
                  href="/"
                >
                  {SecondHeader}
                </a>
              </li>
              <li style={{fontFamily: "IRANSansWeb"}} className="active">{ShortDescription}</li>
            </ol>
          </div>
        </div>
      </div>
      <style jsx>{`
        .services-hero {
          background: url(${ContentAttachment[0] + "?width=1293.64&height=560"})
            no-repeat;
        }
      `}</style>
    </section>
  );
};
