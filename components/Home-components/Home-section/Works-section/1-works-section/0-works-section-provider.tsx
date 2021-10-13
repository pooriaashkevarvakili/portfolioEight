import React from "react";
import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { WorksCatalogItem } from "./1-works-section-catalog-item";
// ------------------------------ ---------------------- -------
interface AppProps {
  WorksSection: any;
}

export const WorksSectionProvider: React.FunctionComponent<AppProps> = ({
  WorksSection: {
    worksCatalogItem,
    worksCatalogHeader,
    worksCatalogItemOne,
    worksCatalogItemTwo,
    worksCatalogItemThree,
  },
}) => {
  // ------------------------------ ---------------------------------------------

  // ------------------------------ ---------------------------------------------
  return (
    <>
      <WorksCatalogItem
        worksCatalogItemThree={worksCatalogItemThree[0]}
        worksCatalogItemTwo={worksCatalogItemTwo[0]}
        worksCatalogItemOne={worksCatalogItemOne[0]}
        worksCatalogItem={worksCatalogItem}
        worksCatalogHeader={worksCatalogHeader[0]}
      />
    </>
  );
};
