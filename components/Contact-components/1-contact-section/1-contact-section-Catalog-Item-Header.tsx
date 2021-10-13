import { OneCatalogData } from "../../../types/OneCatalogData";
import { GetStaticProps } from "next";

import React from "react";

// ------------------------------ ---------------------- --------
interface AppProps {
  contactSectionCatalogItemHeader: OneCatalogData;
}
export const ContactSectionCatalogItemHeader: React.FunctionComponent<AppProps> = ({
  contactSectionCatalogItemHeader,
}) => {
  const {
    FirstHeader,
    SecondHeader,
    ShortDescription,
    LongDescription,
    ContentAttachment,
  } = contactSectionCatalogItemHeader;
console.log(contactSectionCatalogItemHeader);
  return (
    <section className="contact-us-hero">
      <div className="container">
        <div className="row">
          <div className="section-content">
            <h1 style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>
              <strong style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>
                {FirstHeader}
              </strong>{" "}
              {SecondHeader}
            </h1>
            <p>
              {" "}
              <a
                style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}
                href={ShortDescription}
              >
                {LongDescription}
              </a>
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .contact-us-hero {
          background: url(${ContentAttachment[0] + "?width=1293.64&height=580"})
            no-repeat;
        }
      `}</style>
    </section>
  );
};
