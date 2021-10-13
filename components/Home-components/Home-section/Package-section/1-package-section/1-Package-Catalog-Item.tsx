import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { PackageBoxCatalogItem1 } from "./1-Package-box-Catalog-Item1";
import { GetStaticProps } from "next";
import { PackageCatalogHeader } from "./1-Package-Catalog-Header";
import { PackageBoxCatalogItem2 } from "./2-Package-box-Catalog-Item2";
import { PackageBoxCatalogItem3 } from "./3-Package-box-Catalog-Item3";
import { PackageBoxCatalogItem4 } from "./4-Package-box-Catalog-Item4";
// ------------------------------ ---------------------- --------
interface AppProps {
  packageCatalogItem: OneCatalogData;
  packageCatalogHeader: OneCatalogData;
  packageBoxCatalogItem2: OneCatalogData;
  packageBoxCatalogItem1: OneCatalogData;
  packageBoxCatalogItem3: OneCatalogData;
  packageBoxCatalogItem4: OneCatalogData;
}
export const PackageCatalogItem: React.FunctionComponent<AppProps> = ({
  packageCatalogItem,
  packageCatalogHeader,
  packageBoxCatalogItem1,
  packageBoxCatalogItem2,
  packageBoxCatalogItem4,
  packageBoxCatalogItem3,
}) => {
  const { ShortDescription } = packageCatalogItem;
  
  return (
    <div id="content" className="site-content content-wrapper page-content">
      <div className="page type-page hentry">
        <div className="page-content-body">
          <section className="package">
            <div className="container">
              <div className="row">
                <PackageCatalogHeader
                  packageCatalogHeader={packageCatalogHeader}
                />
                <div className="section-content">
                  <p>{ShortDescription}</p>
                  <PackageBoxCatalogItem1
                    packageBoxCatalogItem1={packageBoxCatalogItem1}
                  />
                  <PackageBoxCatalogItem2
                    packageBoxCatalogItem2={packageBoxCatalogItem2}
                  />
                  <PackageBoxCatalogItem3
                    packageBoxCatalogItem3={packageBoxCatalogItem3}
                  />
                  <PackageBoxCatalogItem4
                    packageBoxCatalogItem4={packageBoxCatalogItem4}
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
