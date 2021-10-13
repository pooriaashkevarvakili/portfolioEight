import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { OurMackeupCatalogHeader } from "./1-ourMackeup-section-Catalog-Header";
import { OurMackeupCatalogWithPictureOne } from "./1-ourMackeup-section-Catalog-WithPicture1";
import { OurMackeupCatalogWithPictureTwo } from "./2-ourMackeup-section-Catalog-WithPicture2";
import { OurMackeupCatalogWithPictureThree } from "./3-ourMackeup-section-Catalog-WithPicture3";
import { OurMackeupCatalogWithPictureFour } from "./4-ourMackeup-section-Catalog-WithPicture4";
import { GetStaticProps } from "next";
import React from "react";
// ------------------------------ ---------------------- --------
interface AppProps {
  ourMackeupCatalogItem: OneCatalogData;
  ourMackeupCatalogWithPictureTwo: OneCatalogData;
  ourMackeupCatalogWithPictureFour: OneCatalogData;
  ourMackeupCatalogHeader: OneCatalogData;
  ourMackeupCatalogWithPictureOne: OneCatalogData;
  ourMackeupCatalogWithPictureThree: OneCatalogData;
}
export const OurMackeupCatalogItem: React.FunctionComponent<AppProps> = ({
  ourMackeupCatalogItem,
  ourMackeupCatalogHeader,
  ourMackeupCatalogWithPictureOne,
  ourMackeupCatalogWithPictureTwo,
  ourMackeupCatalogWithPictureFour,
  ourMackeupCatalogWithPictureThree,
}) => {
  return (
    <div id="content" className="site-content content-wrapper page-content">
      <div className="page type-page hentry">
        <div className="page-content-body">
          <section className="our-makeup-artists">
            <div className="container">
              <div className="row">
                <OurMackeupCatalogHeader
                  ourMackeupCatalogHeader={ourMackeupCatalogHeader}
                />
                <div className="section-content">
                  <OurMackeupCatalogWithPictureOne
                    ourMackeupCatalogWithPictureOne={
                      ourMackeupCatalogWithPictureOne
                    }
                  />
                  <OurMackeupCatalogWithPictureTwo
                    ourMackeupCatalogWithPictureTwo={
                      ourMackeupCatalogWithPictureTwo
                    }
                  />
                  <OurMackeupCatalogWithPictureThree
                    ourMackeupCatalogWithPictureThree={
                      ourMackeupCatalogWithPictureThree
                    }
                  />
                  <OurMackeupCatalogWithPictureFour
                    ourMackeupCatalogWithPictureFour={
                      ourMackeupCatalogWithPictureFour
                    }
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
