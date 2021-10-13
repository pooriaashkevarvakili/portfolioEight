import React from "react";
import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { OurMackeupCatalogItem } from "./1-ourMackeup-section-Catalog-Item";
// ------------------------------ ---------------------- -------
interface AppProps {
  ourMackeupSection: any;
}

export const OurMackeupSectionCatalogProvider: React.FunctionComponent<AppProps> = ({
  ourMackeupSection: {
    ourMackeupCatalogItem,
    ourMackeupCatalogHeader,
    ourMackeupCatalogWithPictureOne,
    ourMackeupCatalogWithPictureTwo,
    ourMackeupCatalogWithPictureThree,
    ourMackeupCatalogWithPictureFour,
  },
}) => {
  // ------------------------------ ---------------------------------------------

  // ------------------------------ ---------------------------------------------
  return (
    <>
      <OurMackeupCatalogItem
        ourMackeupCatalogWithPictureFour={ourMackeupCatalogWithPictureFour[0]}
        ourMackeupCatalogWithPictureThree={ourMackeupCatalogWithPictureThree[0]}
        ourMackeupCatalogWithPictureTwo={ourMackeupCatalogWithPictureTwo[0]}
        ourMackeupCatalogWithPictureOne={ourMackeupCatalogWithPictureOne[0]}
        ourMackeupCatalogItem={ourMackeupCatalogItem}
        ourMackeupCatalogHeader={ourMackeupCatalogHeader[0]}
      />
    </>
  );
};
