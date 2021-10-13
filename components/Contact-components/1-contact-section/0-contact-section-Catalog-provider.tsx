import React from "react";
import { OneCatalogData } from "../../../types/OneCatalogData";
import { ContactSectionCatalogItemContact } from "./1-contact-section-Catalog-Item-contact";
// ------------------------------ ---------------------- -------
interface AppProps {
  contactSection: any;
}

export const ContactSectionCatalogProvider: React.FunctionComponent<AppProps> = ({
  contactSection: {
    contactSectionCatalogItemContact,
    contactSectionCatalogItemHeader,
    contactSectionCatalogItem,
    contactSectionCatalogForm,
  },
}) => {
  // ------------------------------ ---------------------------------------------

  // ------------------------------ ---------------------------------------------
  return (
    <>
      <ContactSectionCatalogItemContact
        contactSectionCatalogForm={contactSectionCatalogForm[0]}
        contactSectionCatalogItem={contactSectionCatalogItem[0]}
        contactSectionCatalogItemHeader={contactSectionCatalogItemHeader[0]}
        contactSectionCatalogItemContact={contactSectionCatalogItemContact}
      />
    </>
  );
};
