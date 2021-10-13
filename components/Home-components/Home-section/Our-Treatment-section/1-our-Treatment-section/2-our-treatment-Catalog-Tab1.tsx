import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { GetStaticProps } from "next";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// ------------------------------ ---------------------- --------
interface AppProps {
  ourTreatmentCatalogTabOne: OneCatalogData;
}
export const OurTreatmentCatalogTabOne: React.FunctionComponent<AppProps> = ({
  ourTreatmentCatalogTabOne,
}) => {
  const {
    ContentAttachment,
    FirstHeader,
    SecondHeader,
    ShortDescription,
    ChildFirstHeader,
    ChildSecondHeader,
    ChildShortDescription,
  } = ourTreatmentCatalogTabOne;

  return (
    <>
     
     <div className="tab-pane active">
											<div className="col-md-6">
												<img src={ContentAttachment[1]+"?width=539&height=438"} alt="image"/>
											</div>
                      <div style={{marginTop:-50}}  className="col-md-4">
                        
                        <h3 style={{ fontFamily: "IRANSansWeb", direction:"rtl"}}>{FirstHeader}</h3>
                        <p style={{ fontFamily: "IRANSansWeb",direction:"rtl"  }}>{ShortDescription}</p>
                        <ul  >
                          <img style={{position:"relative",top:20,left:400}} src={ContentAttachment[0]+"?width=22&height=22"} alt=""/>
                          <p style={{ fontFamily: "IRANSansWeb",direction:"rtl"  }}>{SecondHeader}</p>
                          <img style={{position:"relative",top:20,left:400}} src={ContentAttachment[0]+"?width=22&height=22"} alt=""/>

                          <p style={{ fontFamily: "IRANSansWeb",direction:"rtl"  }}>{ChildFirstHeader}</p>
                          <img style={{position:"relative",top:20,left:400}} src={ContentAttachment[0]+"?width=22&height=22"} alt=""/>

                          <p style={{ fontFamily: "IRANSansWeb",direction:"rtl" }}>{ChildSecondHeader}</p>
                          <img style={{position:"relative",top:20,left:400}} src={ContentAttachment[0]+"?width=22&height=22"} alt=""/>

                          <p style={{ fontFamily: "IRANSansWeb",direction:"rtl"  }}>{ChildShortDescription}</p>
												</ul>
												
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
