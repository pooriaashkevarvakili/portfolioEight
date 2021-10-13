import React from "react";
import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { CallSectionCatalogItem } from "./1-call-section-Catalog-Item";
// ------------------------------ ---------------------- -------
interface AppProps {
  callSection: any;
}

export const CallSectionCatalogProvider: React.FunctionComponent<AppProps> = ({
  callSection: { callSectionCatalogItem },
}) => {
  // ------------------------------ ---------------------------------------------

  // ------------------------------ ---------------------------------------------
  return (
    <>
      <CallSectionCatalogItem
        callSectionCatalogItem={callSectionCatalogItem[0]}
      />
    </>
  );
};
