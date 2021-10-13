import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { GetStaticProps } from "next";
import { WorksCatalogHeader } from "./1-works-Section-Catalog-Header";
import { WorksCatalogItemOne } from "./1-works-section-catalog-item1";
import { WorksCatalogItemTwo } from "./2-works-section-catalog-item2";
import { WorksCatalogItemThree } from "./3-works-section-catalog-item3";
// ------------------------------ ---------------------- --------
interface AppProps {
  worksCatalogItem: OneCatalogData;
  worksCatalogItemTwo: OneCatalogData;
  worksCatalogHeader: OneCatalogData;
  worksCatalogItemOne: OneCatalogData;
  worksCatalogItemThree: OneCatalogData;
}
export const WorksCatalogItem: React.FunctionComponent<AppProps> = ({
  worksCatalogItem,
  worksCatalogHeader,
  worksCatalogItemOne,
  worksCatalogItemTwo,
  worksCatalogItemThree,
}) => {
  return (
    <div id="content" className="site-content content-wrapper page-content">
      <div className="page type-page hentry">
        <div className="page-content-body">
          <section className="how-it-works">
            <div className="container">
              <div className="row">
                <WorksCatalogHeader worksCatalogHeader={worksCatalogHeader} />
                <div className="section-content">
                  <WorksCatalogItemOne
                    worksCatalogItemOne={worksCatalogItemOne}
                  />
                  <WorksCatalogItemTwo
                    worksCatalogItemTwo={worksCatalogItemTwo}
                  />
                  <WorksCatalogItemThree
                    worksCatalogItemThree={worksCatalogItemThree}
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
