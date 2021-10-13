import React from "react";
import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { OurTreatmentCatalogItem } from "./1-our-treatment-Catalog-Item";
import { OurTreatmentCatalogTabTwo } from "./3-our-treatment-Catalog-Tab2";
// ------------------------------ ---------------------- -------
interface AppProps {
  ourTreatment: any;
}

export const OurTreatmentCatalogItemSectionProvider: React.FunctionComponent<AppProps> = ({
  ourTreatment: {
    ourTreatmentCatalogItem,
    ourTreatmentCatalogTab,
    ourTreatmentCatalogHeader,
    ourTreatmentCatalogTabOne,
    ourTreatmentCatalogTabTwo,
    ourTreatmentCatalogTabTHree,
    ourTreatmentCatalogPicture,
  },
}) => {
  // ------------------------------ ---------------------------------------------

  // ------------------------------ ---------------------------------------------
  return (
    <>
      <OurTreatmentCatalogItem
        ourTreatmentCatalogTabTHree={ourTreatmentCatalogTabTHree[0]}
        ourTreatmentCatalogTabTwo={ourTreatmentCatalogTabTwo[0]}
        ourTreatmentCatalogTabOne={ourTreatmentCatalogTabOne[0]}
        ourTreatmentCatalogTab={ourTreatmentCatalogTab[0]}
        ourTreatmentCatalogHeader={ourTreatmentCatalogHeader[0]}
        ourTreatmentCatalogItem={ourTreatmentCatalogItem}
        ourTreatmentCatalogPicture={ourTreatmentCatalogPicture[0]}
      />
    </>
  );
};
