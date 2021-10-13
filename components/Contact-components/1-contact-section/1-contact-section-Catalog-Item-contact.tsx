import { OneCatalogData } from "../../../types/OneCatalogData";
import { GetStaticProps } from "next";
import { ContactSectionCatalogItemHeader } from "./1-contact-section-Catalog-Item-Header";
import React from "react";
import { ContactSectionCatalogItem } from "./1-contact-section-Catalog-item";
import { ContactSectionCatalogForm } from "./1-contact-section-Catalog-Form";
// ------------------------------ ---------------------- --------
interface AppProps {
  contactSectionCatalogItemContact: OneCatalogData;
  contactSectionCatalogItemHeader: OneCatalogData;
  contactSectionCatalogItem: OneCatalogData;
  contactSectionCatalogForm: OneCatalogData;
}
export const ContactSectionCatalogItemContact: React.FunctionComponent<AppProps> = ({
  contactSectionCatalogItemContact,
  contactSectionCatalogItemHeader,
  contactSectionCatalogItem,
  contactSectionCatalogForm,
}) => {
  return (
    <>
      <div id="content" className="site-content content-wrapper page-content">
        <div className="page type-page hentry">
          <div className="page-content-body">
            <ContactSectionCatalogItemHeader
              contactSectionCatalogItemHeader={contactSectionCatalogItemHeader}
            />

            <section className="contact-us">
              <div className="container">
                <div className="row">
                  <ContactSectionCatalogItem
                    contactSectionCatalogItem={contactSectionCatalogItem}
                  />
                  <ContactSectionCatalogForm
                    contactSectionCatalogForm={contactSectionCatalogForm}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
    </>
  );
};
