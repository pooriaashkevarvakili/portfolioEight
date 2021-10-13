import {
  HomeSectionProvider,
  OurTreatmentCatalogItemSectionProvider,
  WorksSectionProvider,
  PackageSectionProvider,
  OurMackeupSectionCatalogProvider,
  CallSectionCatalogProvider,
  CounterSectionCatalogProvider,
  GallerySectionCatalogProvider,
  NewsSectionCatalogProvider,
} from ".";
import React from "react";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const HomeProvider: React.FunctionComponent<AppProps> = ({
  apiProps: {
    homeSection,
    ourTreatment,
    WorksSection,
    pakageSection,
    ourMackeupSection,
    gallerySection,
    callSection,
    CounterSection,
    newsSection,
  },
}) => (
  <>
    <HomeSectionProvider homeSection={homeSection} />
    <OurTreatmentCatalogItemSectionProvider ourTreatment={ourTreatment} />
    <WorksSectionProvider WorksSection={WorksSection} />
    <PackageSectionProvider pakageSection={pakageSection} />
    <CallSectionCatalogProvider callSection={callSection} />
    <OurMackeupSectionCatalogProvider ourMackeupSection={ourMackeupSection} />
    <CounterSectionCatalogProvider CounterSection={CounterSection} />

    <NewsSectionCatalogProvider newsSection={newsSection} />
    <GallerySectionCatalogProvider gallerySection={gallerySection} />
  </>
);
