import React from "react";
import Head from "next/head";
// ---------------------------------------------------------------------
import Layout from "../layout/Layout";
import { ContactProvider } from "./../components/Contact-components/0-contact-provider";
import { DataService } from "../service/data.service";
import { OneSEOTagData } from "../types/OneSEOTagData";
import { InferGetStaticPropsType, GetStaticProps, NextPage } from "next";
import { PageNames } from "../constants/PageNames.enum";
import { OneCatalogData } from "../types/OneCatalogData";

// ---------------------------------------------------------------------

// export const config = { amp: true };
// ------------------------------ ---------------------- --------

interface PassingProps {}

type AppProps = NextPage &
  PassingProps &
  InferGetStaticPropsType<typeof getStaticProps>;

// ---------------------------------------------------------------------
const Contact: React.FunctionComponent<AppProps> = ({
  tagsAndSeo: {
    homePage: { Name, Description, Keywords, PageTitle },
  },
  OurFooter,
  navbarStrings: { navbarStrings },
  data,
}) => {
  return (
    <>
      <Head>
        <head>
          <meta name="text" content={Name} />
          <meta name="description" content={Description} />
          <meta name="keywords" content={Keywords} />
        </head>
      </Head>
      <Layout
        OurFooter={OurFooter}
        navbarStrings={navbarStrings}
        titleName={PageTitle}
      >
        <ContactProvider apiProps={data} />
      </Layout>
    </>
  );
};

export default Contact;

// ------------------------------ ---------------------- --------

export const getStaticProps: GetStaticProps = async () => {
  // for make sure data is available
  await DataService.getCatalogData();
  return {
    props: {
      navbarStrings: {
        navbarStrings: await DataService.filterCatalogDataBySectionField(
          "1-OurSidebar-Menu-section-catalog"
        ),
      },
      OurFooter: {
        ourFooterAllRightCatalog: await DataService.filterCatalogDataBySectionField(
          "1-OurFooter-AllRight-catalog"
        ),
      },
      tagsAndSeo: {
        homePage: await DataService.getCurrentPageForCatchSEOTags("contact"),
      },
      data: {
        contactSection: {
          contactSectionCatalogItemHeader: await DataService.filterCatalogDataBySectionField(
            "1-contact-section-Catalog-Item-Header"
          ),
          contactSectionCatalogItem: await DataService.filterCatalogDataBySectionField(
            "1-contact-section-Catalog-item"
          ),
          contactSectionCatalogForm: await DataService.filterCatalogDataBySectionField(
            "1-contact-section-Catalog-Form"
          ),
        },
      },
    },
  };
};
