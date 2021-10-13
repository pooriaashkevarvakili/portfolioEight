import React from "react";
import { OneCatalogData } from "../../../types/OneCatalogData";
import { ServicesSectionCatalogItem } from "./1-services-section-Catalog-Item";

// ------------------------------ ---------------------- -------
interface AppProps {
  servicesSection: any;
}

export const ServicesSectionCatalogProvider: React.FunctionComponent<AppProps> = ({
  servicesSection: {
    servicescatalogItem,
    servicesNavbarSectionCatalog,
    servicesSiteSectionCatalogItemOne,
    servicesSiteSectionCatalogItemTwo,
    servicesSiteSectionCatalogItemThree,
  },
}) => {
  // ------------------------------ ---------------------------------------------

  // ------------------------------ ---------------------------------------------
  return (
    <>
      <ServicesSectionCatalogItem
        servicesSiteSectionCatalogItemThree={
          servicesSiteSectionCatalogItemThree[0]
        }
        servicesSiteSectionCatalogItemTwo={servicesSiteSectionCatalogItemTwo[0]}
        servicesSiteSectionCatalogItemOne={servicesSiteSectionCatalogItemOne[0]}
        servicescatalogItem={servicescatalogItem}
        servicesNavbarSectionCatalog={servicesNavbarSectionCatalog[0]}
      />
    </>
  );
};
