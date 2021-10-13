import React from "react";
import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { NewsSectionCatalogItem } from "./1-News-section-Catalog-Item";

// ------------------------------ ---------------------- -------
interface AppProps {
  newsSection: any;
}

export const NewsSectionCatalogProvider: React.FunctionComponent<AppProps> = ({
  newsSection: {
    newsSectionCatalogItem,
    newsSectionCatalogHeader,
    newsSectionCatalogItemOne,
    newsSectionCatalogItemThree,
    newsSectionCatalogItemFour,
  },
}) => {
  // ------------------------------ ---------------------------------------------

  // ------------------------------ ---------------------------------------------
  return (
    <>
      <NewsSectionCatalogItem
        newsSectionCatalogItemFour={newsSectionCatalogItemFour[0]}
        newsSectionCatalogItemThree={newsSectionCatalogItemThree[0]}
        newsSectionCatalogItemOne={newsSectionCatalogItemOne[0]}
        newsSectionCatalogItem={newsSectionCatalogItem}
        newsSectionCatalogHeader={newsSectionCatalogHeader[0]}
      />
    </>
  );
};
