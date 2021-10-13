import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { GetStaticProps } from "next";
import { NewsSectionCatalogHeader } from "./1-News-section-Catalog-Header";
import { NewsSectionCatalogItemOne } from "./2-News-section-Catalog-Item2";
import { NewsSectionCatalogItemThree } from "./3-News-section-Catalog-Item3";
import { NewsSectionCatalogItemFour } from "./4-News-section-Catalog-Item4";
// ------------------------------ ---------------------- --------
interface AppProps {
  newsSectionCatalogItemOne: OneCatalogData;
  newsSectionCatalogItemThree: OneCatalogData;
  newsSectionCatalogItem: OneCatalogData;
  newsSectionCatalogHeader: OneCatalogData;
  newsSectionCatalogItemFour: OneCatalogData;
}
export const NewsSectionCatalogItem: React.FunctionComponent<AppProps> = ({
  newsSectionCatalogItem,
  newsSectionCatalogHeader,
  newsSectionCatalogItemOne,
  newsSectionCatalogItemThree,
  newsSectionCatalogItemFour,
}) => {
  return (
    <div id="content" className="site-content content-wrapper page-content">
      <div className="page type-page hentry">
        <div className="page-content-body">
          <section className="latest-news">
            <NewsSectionCatalogHeader
              newsSectionCatalogHeader={newsSectionCatalogHeader}
            />
            <div className="section-content">
              <div className="container">
                <div className="row">
                  <NewsSectionCatalogItemOne
                    newsSectionCatalogItemOne={newsSectionCatalogItemOne}
                  />
                  <NewsSectionCatalogItemThree
                    newsSectionCatalogItemThree={newsSectionCatalogItemThree}
                  />
                  <NewsSectionCatalogItemFour
                    newsSectionCatalogItemFour={newsSectionCatalogItemFour}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
