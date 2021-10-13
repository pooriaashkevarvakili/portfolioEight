import { OneCatalogData } from "../../../types/OneCatalogData";
import { GetStaticProps } from "next";
import { ServicesNavbarSectionCatalog } from "./1-services-navbar-section-catalog";
import React from "react";
import { ServicesSiteSectionCatalogItemOne } from "./1-services-site-section-catalog-item1";
import { ServicesSiteSectionCatalogItemTwo } from "./2-services-site-section-catalog-item2";
import { ServicesSiteSectionCatalogItemThree } from "./3-services-site-section-catalog-item3";

// ------------------------------ ---------------------- --------
interface AppProps {
  servicescatalogItem: OneCatalogData;
  servicesSiteSectionCatalogItemThree: OneCatalogData;
  servicesNavbarSectionCatalog: OneCatalogData;
  servicesSiteSectionCatalogItemOne: OneCatalogData;
  servicesSiteSectionCatalogItemTwo: OneCatalogData;
}
export const ServicesSectionCatalogItem: React.FunctionComponent<AppProps> = ({
  servicescatalogItem,
  servicesNavbarSectionCatalog,
  servicesSiteSectionCatalogItemThree,
  servicesSiteSectionCatalogItemOne,
  servicesSiteSectionCatalogItemTwo,
}) => {
  return (
    <>
      <div id="content" className="site-content content-wrapper page-content">
        <div className="page type-page hentry">
          <div className="page-content-body">
            <ServicesNavbarSectionCatalog
              servicesNavbarSectionCatalog={servicesNavbarSectionCatalog}
            />

            <section className="services-list">
              <div className="container">
                <div className="row">
                  <ServicesSiteSectionCatalogItemOne
                    servicesSiteSectionCatalogItemOne={
                      servicesSiteSectionCatalogItemOne
                    }
                  />
                  <ServicesSiteSectionCatalogItemTwo
                    servicesSiteSectionCatalogItemTwo={
                      servicesSiteSectionCatalogItemTwo
                    }
                  />
                  <ServicesSiteSectionCatalogItemThree
                    servicesSiteSectionCatalogItemThree={
                      servicesSiteSectionCatalogItemThree
                    }
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
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
