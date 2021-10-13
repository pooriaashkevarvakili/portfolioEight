import React from "react";
import { OneCatalogData } from "../../../../types/OneCatalogData";
import { HomeCatalogItem } from "./1-Home-catalog-Item";
// ------------------------------ ---------------------- -------
interface AppProps {
  homeSection: any;
}

export const HomeSectionProvider: React.FunctionComponent<AppProps> = ({
  homeSection: {
    homeCatalogItem,
    homeCatalogCarouselWithPicture2,
    homeCatalogCarouselWithPicture3,
    homeCatalogCarouselWithPicture4,
  },
}) => {
  // ------------------------------ ---------------------------------------------

  // ------------------------------ ---------------------------------------------
  return (
    <HomeCatalogItem
      homeCatalogCarouselWithPicture3={homeCatalogCarouselWithPicture3[0]}
      homeCatalogItem={homeCatalogItem}
      homeCatalogCarouselWithPicture4={homeCatalogCarouselWithPicture4[0]}
      homeCatalogCarouselWithPicture2={homeCatalogCarouselWithPicture2[0]}
    />
  );
};
