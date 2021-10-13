import React from "react";
import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { PackageCatalogItem } from "./1-Package-Catalog-Item";
// ------------------------------ ---------------------- -------
interface AppProps {
  pakageSection: any;
}

export const PackageSectionProvider: React.FunctionComponent<AppProps> = ({
  pakageSection: {
    packageCatalogItem,
    packageCatalogHeader,
    packageBoxCatalogItem1,
    packageBoxCatalogItem2,
    packageBoxCatalogItem3,
    packageBoxCatalogItem4,
  },
}) => {
  // ------------------------------ ---------------------------------------------

  // ------------------------------ ---------------------------------------------
  return (
    <>
      <PackageCatalogItem
        packageBoxCatalogItem4={packageBoxCatalogItem4[0]}
        packageBoxCatalogItem3={packageBoxCatalogItem3[0]}
        packageBoxCatalogItem2={packageBoxCatalogItem2[0]}
        packageBoxCatalogItem1={packageBoxCatalogItem1[0]}
        packageCatalogItem={packageCatalogItem[0]}
        packageCatalogHeader={packageCatalogHeader[0]}
      />
    </>
  );
};
