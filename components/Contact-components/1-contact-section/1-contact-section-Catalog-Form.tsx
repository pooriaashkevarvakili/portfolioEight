import { OneCatalogData } from "../../../types/OneCatalogData";
import { GetStaticProps } from "next";
import { useSubmitHook } from "../../../hooks/useSubmitHook";
import React from "react";

// ------------------------------ ---------------------- --------
interface AppProps {
  contactSectionCatalogForm: OneCatalogData;
}
export const ContactSectionCatalogForm: React.FunctionComponent<AppProps> = ({
  contactSectionCatalogForm,
}) => {
  
  const {
    FirstHeader,
    SecondHeader,
    ShortDescription,
    LongDescription,
    ChildFirstHeader,
    ChildSecondHeader,
    ChildShortDescription,
  } = contactSectionCatalogForm;
  const { onSubmit, myRef, handleChange } = useSubmitHook();
  return (
    <form onSubmit={onSubmit} ref={myRef}>
      <div className="col-md-6">
        <div className="contact-form">
          <h2 style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>
            {FirstHeader}
          </h2>
          <label style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>
            {SecondHeader}
          </label>
          <input
            style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}
            name="Name"
            onChange={handleChange}
            data-error="First name is required."
            type="text"
            placeholder={ShortDescription}
          />
          <label  style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>{LongDescription}</label>
          <input
            onChange={handleChange}
            style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}
            data-error="First name is required."
            name="Email"
            type="email"
            placeholder={ChildFirstHeader}
          />
          <label style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>
            {ChildSecondHeader}
          </label>
          <textarea
            name="Message"
            onChange={handleChange}
            data-error="First name is required."
            rows={3}
            style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}
          ></textarea>
          <input
            style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}
            type="submit"
            value={ChildShortDescription}
          />
        </div>
      </div>
    </form>
  );
};
