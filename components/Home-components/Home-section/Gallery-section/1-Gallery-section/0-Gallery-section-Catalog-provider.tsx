import React from "react";
import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { GallerySectionCatalogPicture } from "./1-Gallery-section-Catalog-Picture";
// ------------------------------ ---------------------- -------
interface AppProps {
  gallerySection: any;
}

export const GallerySectionCatalogProvider: React.FunctionComponent<AppProps> = ({
  gallerySection: { gallerySectionCatalogPicture, strClass },
}) => {
  // const renderItems = (num1: number, num2: number) =>
  //   // normal was 9
  //   gallerySectionCatalogPicture.length > 0
  //     ? gallerySectionCatalogPicture
  //         .filter(
  //           // right now we have 19 item but items with sectionTag include Boxed
  //           // are related to blogBoxed page
  //           (item: OneCatalogData) => !item.SectionTag.includes("Boxed")
  //         )
  //         .map((correctItem: OneCatalogData) => {
  //           return (
  //             <GallerySectionCatalogPicture
  //               key={correctItem.Id}
  //               gallerySectionCatalogPicture={correctItem}
  //               strClass="images"
  //             />
  //           );
  //         })
  //     : "";
  // ------------------------------ ---------------------------------------------

  // ------------------------------ ---------------------------------------------
  return (
    <>
      <GallerySectionCatalogPicture
        strClass={strClass}
        gallerySectionCatalogPicture={gallerySectionCatalogPicture[0]}
      >
        
      </GallerySectionCatalogPicture>
    </>
  );
};
