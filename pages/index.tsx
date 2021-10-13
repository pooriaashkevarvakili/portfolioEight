import React from "react";
import Head from "next/head";
// ---------------------------------------------------------------------
import Layout from "../layout/Layout";
import { HomeProvider } from "./../components/Home-components/0-HomeProvider";
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
const Index: React.FunctionComponent<AppProps> = ({
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
        <HomeProvider apiProps={data} />
      </Layout>
    </>
  );
};

export default Index;

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
        homePage: await DataService.getCurrentPageForCatchSEOTags("home"),
      },
      data: {
        homeSection: {
          homeCatalogCarouselWithPicture2: await DataService.filterCatalogDataBySectionField(
            "2-Home-Catalog-Carousel-WithPicture"
          ),
          homeCatalogCarouselWithPicture3: await DataService.filterCatalogDataBySectionField(
            "3-Home-Catalog-Carousel-WithPicture"
          ),
          homeCatalogCarouselWithPicture4: await DataService.filterCatalogDataBySectionField(
            "4-Home-Catalog-Carousel-WithPicture"
          ),
        },
        ourTreatment: {
          ourTreatmentCatalogHeader: await DataService.filterCatalogDataBySectionField(
            "1-our-treatment-Catalog-Header"
          ),
          ourTreatmentCatalogTab: await DataService.filterCatalogDataBySectionField(
            "1-our-treatment-Catalog-Tab"
          ),
          ourTreatmentCatalogTabOne: await DataService.filterCatalogDataBySectionField(
            "2-our-treatment-Catalog-Tab"
          ),
          ourTreatmentCatalogTabTwo: await DataService.filterCatalogDataBySectionField(
            "3-our-treatment-Catalog-Tab"
          ),
          ourTreatmentCatalogTabTHree: await DataService.filterCatalogDataBySectionField(
            "4-our-treatment-Catalog-Tab"
          ),
          ourTreatmentCatalogPicture: await DataService.filterCatalogDataBySectionField(
            "5-Our-treatment-Catalog-Item"
          ),
        },
        WorksSection: {
          worksCatalogHeader: await DataService.filterCatalogDataBySectionField(
            "1-works-Section-Catalog-Header"
          ),
          worksCatalogItemOne: await DataService.filterCatalogDataBySectionField(
            "1-works-section-catalog-item"
          ),
          worksCatalogItemTwo: await DataService.filterCatalogDataBySectionField(
            "2-works-section-catalog-item"
          ),
          worksCatalogItemThree: await DataService.filterCatalogDataBySectionField(
            "3-works-section-catalog-item"
          ),
        },
        pakageSection: {
          packageCatalogHeader: await DataService.filterCatalogDataBySectionField(
            "1-Package-Catalog-Header"
          ),
          packageCatalogItem: await DataService.filterCatalogDataBySectionField(
            "1-Package-Catalog-Item"
          ),
          packageBoxCatalogItem1: await DataService.filterCatalogDataBySectionField(
            "1-Package-box-Catalog-Item"
          ),
          packageBoxCatalogItem2: await DataService.filterCatalogDataBySectionField(
            "2-Package-box-Catalog-Item"
          ),
          packageBoxCatalogItem3: await DataService.filterCatalogDataBySectionField(
            "3-Package-box-Catalog-Item"
          ),
          packageBoxCatalogItem4: await DataService.filterCatalogDataBySectionField(
            "4-Package-box-Catalog-Item"
          ),
        },
        callSection: {
          callSectionCatalogItem: await DataService.filterCatalogDataBySectionField(
            "1-Call-Section-Catalog-Item"
          ),
        },
        ourMackeupSection: {
          ourMackeupCatalogHeader: await DataService.filterCatalogDataBySectionField(
            "1-OurMackeup-Section-Catalog-Header"
          ),
          ourMackeupCatalogWithPictureOne: await DataService.filterCatalogDataBySectionField(
            "1-OurMackeup-Section-Catalog-WithPicture"
          ),
          ourMackeupCatalogWithPictureTwo: await DataService.filterCatalogDataBySectionField(
            "2-OurMackeup-Section-Catalog-WithPicture"
          ),
          ourMackeupCatalogWithPictureThree: await DataService.filterCatalogDataBySectionField(
            "3-OurMackeup-Section-Catalog-WithPicture"
          ),
          ourMackeupCatalogWithPictureFour: await DataService.filterCatalogDataBySectionField(
            "4-OurMackeup-Section-Catalog-WithPicture"
          ),
        },
        CounterSection: {
          counterSectionCatalogItem: await DataService.filterCatalogDataBySectionField(
            "1-Counter-section-Catalog-Item"
          ),
          counterSectionCatalogHeader: await DataService.filterCatalogDataBySectionField(
            "1-Counter-section-Catalog-Header"
          ),
        },
        gallerySection: {
          gallerySectionCatalogPicture: await DataService.filterCatalogDataBySectionField(
            "1-Gallery-section-Catalog-Picture"
          ),
        },
        newsSection: {
          newsSectionCatalogItem: await DataService.filterCatalogDataBySectionField(
            "1-Gallery-section-Catalog-Picture"
          ),
          newsSectionCatalogHeader: await DataService.filterCatalogDataBySectionField(
            "1-News-section-Catalog-Header"
          ),
          newsSectionCatalogItemOne: await DataService.filterCatalogDataBySectionField(
            "1-News-section-Catalog-Item"
          ),
          newsSectionCatalogItemThree: await DataService.filterCatalogDataBySectionField(
            "2-News-section-Catalog-Item"
          ),
          newsSectionCatalogItemFour: await DataService.filterCatalogDataBySectionField(
            "3-News-section-Catalog-Item"
          ),
        },
      },
    },
  };
};
