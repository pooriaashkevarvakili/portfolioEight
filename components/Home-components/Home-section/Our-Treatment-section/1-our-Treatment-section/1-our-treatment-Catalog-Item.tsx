import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { GetStaticProps } from "next";
import React from "react";
import { OurTreatmentCatalogHeader } from "./1-our-treatment-Catalog-Header";
import { OurTreatmentCatalogTab } from "./1-our-treatment-Catalog-Tab";
import { OurTreatmentCatalogTabOne } from "./2-our-treatment-Catalog-Tab1";
import { OurTreatmentCatalogTabTwo } from "./3-our-treatment-Catalog-Tab2";
import { OurTreatmentCatalogTabTHree } from "./4-our-treatment-Catalog-Tab3";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// ------------------------------ ---------------------- --------
interface AppProps {
  ourTreatmentCatalogItem: OneCatalogData;
  ourTreatmentCatalogHeader: OneCatalogData;
  ourTreatmentCatalogTab: OneCatalogData;
  ourTreatmentCatalogTabOne: OneCatalogData;
  ourTreatmentCatalogTabTwo: OneCatalogData;
  ourTreatmentCatalogTabTHree: OneCatalogData;
  ourTreatmentCatalogPicture: OneCatalogData;
}
export const OurTreatmentCatalogItem: React.FunctionComponent<AppProps> = ({
  ourTreatmentCatalogItem,
  ourTreatmentCatalogHeader,
  ourTreatmentCatalogTab,
  ourTreatmentCatalogTabOne,
  ourTreatmentCatalogTabTwo,
  ourTreatmentCatalogTabTHree,
  ourTreatmentCatalogPicture,
}) => {
  const{FirstHeader,SecondHeader,ShortDescription,LongDescription,ChildFirstHeader,ChildSecondHeader}=ourTreatmentCatalogTab
  return (
    <>
      <div id="content" className="site-content content-wrapper page-content">
			<div className="page type-page hentry">
          <div className="page-content-body">
          <section className="our-treatment">
          <div className="container">
                <div className="row">
                  <OurTreatmentCatalogHeader
                  ourTreatmentCatalogHeader={ourTreatmentCatalogHeader}
                  />
              </div>
              </div>
   <Tabs>
                <TabList>
                <div  className="section-content">
              <ul  className="nav nav-tabs responsive-tabs">
                <Tab style={{cursor:"pointer"}}>
                        <li  className="face active">
											<a style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>
												{FirstHeader}
                            <span style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>{SecondHeader}</span>
											</a>
										</li>
      </Tab>
                <Tab  style={{cursor:"pointer"}}>
                <li className="eye">
											<a style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>
												{ShortDescription}
                            <span style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>{LongDescription}</span>
											</a>
										</li>
          </Tab>
                      <Tab style={{cursor:"pointer"}}>
                <li className="hair">
											<a style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>
												{ChildFirstHeader}
                            <span style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>
                              {ChildSecondHeader}
                        </span>
											</a>
                    </li>    
                  </Tab>
                    </ul>
                    </div>
    </TabList>
                <TabPanel>
                <div className="tab-content">
                    <OurTreatmentCatalogTabOne ourTreatmentCatalogTabOne={ourTreatmentCatalogTabOne}/>
                    </div>
    </TabPanel>
                <TabPanel>
    <div className="tab-pane" >
                    <OurTreatmentCatalogTabTwo
                    ourTreatmentCatalogTabTwo={ourTreatmentCatalogTabTwo}
                    />
                    </div> 
        </TabPanel>
                <TabPanel>
        <div className="tab-pane" >
                    <OurTreatmentCatalogTabTHree
                    ourTreatmentCatalogTabTHree={ourTreatmentCatalogTabTHree}
                    />				
                    </div>                    
    </TabPanel>
  </Tabs>
      <style jsx>{`
        .our-treatment .tab-content .accordion-link:nth-of-type(1),
        .our-treatment .nav-tabs li.face a {
          background-image: url(${ourTreatmentCatalogPicture
            .ContentAttachment[5] + "?width=46&height=55"});
        }
        .our-treatment .tab-content .accordion-link:nth-of-type(2),
        .our-treatment .nav-tabs li.eye a {
          background-image: url(${ourTreatmentCatalogPicture
            .ContentAttachment[4] + "?width=56&height=27"});
        }
        .our-treatment .tab-content .accordion-link:nth-of-type(3),
        .our-treatment .nav-tabs li.hair a {
          background-image: url(${ourTreatmentCatalogPicture
            .ContentAttachment[3] + "?width=46&height=55"});
        }
        .our-treatment .tab-content .accordion-link.active:nth-of-type(1),
        .our-treatment .nav-tabs li.face.active a,
        .our-treatment .nav-tabs li.face:hover a {
          background-image: url(${ourTreatmentCatalogPicture
            .ContentAttachment[2] + "?width=46&height=55"});
        }

        .our-treatment .tab-content .accordion-link.active:nth-of-type(2),
        .our-treatment .nav-tabs li.eye.active a,
        .our-treatment .nav-tabs li.eye:hover a {
          background-image: url(${ourTreatmentCatalogPicture
            .ContentAttachment[0] + "?width=56&height=27"});
        }
        .our-treatment .tab-content .accordion-link.active:nth-of-type(3),
        .our-treatment .nav-tabs li.hair.active a,
        .our-treatment .nav-tabs li.hair:hover a {
          background-image: url(${ourTreatmentCatalogPicture
            .ContentAttachment[1] + "?width=46&height=55"});
        }
      `}</style>
              </section>
          </div>     
        </div>
        </div>
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
