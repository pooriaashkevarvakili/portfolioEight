import { OneCatalogData } from "../../../types/OneCatalogData";
import { GetStaticProps } from "next";

import React from "react";

// ------------------------------ ---------------------- --------
interface AppProps {
  contactSectionCatalogItem: OneCatalogData;
}
export const ContactSectionCatalogItem: React.FunctionComponent<AppProps> = ({
  contactSectionCatalogItem,
}) => {
  
  const {
    FirstHeader,
    SecondHeader,
    ShortDescription,
    LongDescription,
  } = contactSectionCatalogItem;
  return (
    <div className="col-md-6">
      <div className="contact-info">
        <h2 style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>
          {FirstHeader}
        </h2>
        <ul>
          <li>
            <i className="fa fa-map-marker" aria-hidden="true"></i>

            <p style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>
              {SecondHeader}
            </p>
          </li>
          <li>
            <i className="fa fa-phone" aria-hidden="true"></i>

            <p style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>
              {ShortDescription}
            </p>
          </li>
          <li>
            <i className="fa fa-envelope" aria-hidden="true"></i>

            <p style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>
              {LongDescription}
            </p>
          </li>
        </ul>
      </div>
      <style jsx>{``}</style>
    </div>
  );
};
