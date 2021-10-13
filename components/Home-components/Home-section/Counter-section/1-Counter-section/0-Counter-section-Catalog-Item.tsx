import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { GetStaticProps } from "next";
import { CounterSectionCatalogHeader } from "./1-Counter-section-Catalog-Header";

// ------------------------------ ---------------------- --------
interface AppProps {
  counterSectionCatalogItem: OneCatalogData;
  counterSectionCatalogHeader: OneCatalogData;
}
export const CounterSectionCatalogItem: React.FunctionComponent<AppProps> = ({
  counterSectionCatalogItem,
  counterSectionCatalogHeader,
}) => {
  const { ContentAttachment } = counterSectionCatalogItem;
  return (
    <div id="content" className="site-content content-wrapper page-content">
      <div className="page type-page hentry">
        <div className="page-content-body">
          <section className="stats">
            <div className="container">
              <div className="row">
                <div className="section-content">
                  <div className="col-md-8 col-lg-7">
                    <CounterSectionCatalogHeader
                      counterSectionCatalogHeader={counterSectionCatalogHeader}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <style jsx>{`
        .stats {
          background: #faf9f7
            url(${ContentAttachment[0] + "?width=1539&height=451"}) no-repeat
            80% center;
        }
      `}</style>
    </div>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
