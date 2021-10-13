import React from "react";
import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { CounterSectionCatalogItem } from "./0-Counter-section-Catalog-Item";
// ------------------------------ ---------------------- -------
interface AppProps {
  CounterSection: any;
}

export const CounterSectionCatalogProvider: React.FunctionComponent<AppProps> = ({
  CounterSection: { counterSectionCatalogItem, counterSectionCatalogHeader },
}) => {
  // ------------------------------ ---------------------------------------------

  // ------------------------------ ---------------------------------------------
  return (
    <>
      <CounterSectionCatalogItem
        counterSectionCatalogHeader={counterSectionCatalogHeader[0]}
        counterSectionCatalogItem={counterSectionCatalogItem[0]}
      />
    </>
  );
};
