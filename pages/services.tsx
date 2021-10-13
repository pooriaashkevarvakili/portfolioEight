import React from "react";
import Head from "next/head";
// ---------------------------------------------------------------------
import Layout from "../layout/Layout";
import { ServiceProvider } from "./../components/Services-components/0-services-provider";
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
const Services: React.FunctionComponent<AppProps> = ({
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
        <ServiceProvider apiProps={data} />
      </Layout>
    </>
  );
};

export default Services;

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
        homePage: await DataService.getCurrentPageForCatchSEOTags("services"),
      },
      data: {
        servicesSection: {
          servicescatalogItem: await DataService.filterCatalogDataBySectionField(
            "2-Home-Catalog-Carousel-WithPicture"
          ),
          servicesNavbarSectionCatalog: await DataService.filterCatalogDataBySectionField(
            "1-Services-Navbar-Section-Catalog"
          ),
          servicesSiteSectionCatalogItemOne: await DataService.filterCatalogDataBySectionField(
            "1-services-site-section-catalog-item"
          ),
          servicesSiteSectionCatalogItemTwo: await DataService.filterCatalogDataBySectionField(
            "2-services-site-section-catalog-item"
          ),
          servicesSiteSectionCatalogItemThree: await DataService.filterCatalogDataBySectionField(
            "3-services-site-section-catalog-item"
          ),
        },
      },
    },
  };
};
