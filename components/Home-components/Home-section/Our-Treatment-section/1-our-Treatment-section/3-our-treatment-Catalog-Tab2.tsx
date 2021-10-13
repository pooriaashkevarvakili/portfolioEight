import { OneCatalogData } from "../../../../../types/OneCatalogData";

import { GetStaticProps } from "next";
// ------------------------------ ---------------------- --------
interface AppProps {
  ourTreatmentCatalogTabTwo: OneCatalogData;
}
export const OurTreatmentCatalogTabTwo: React.FunctionComponent<AppProps> = ({
  ourTreatmentCatalogTabTwo,
}) => {
  const {
    ContentAttachment,
    FirstHeader,
    SecondHeader,
    ShortDescription,
    LongDescription,
    ChildFirstHeader,
    ChildSecondHeader,
  } = ourTreatmentCatalogTabTwo;
  return (
    <>
      	<div className="col-md-6">
												<img src={ContentAttachment[1]+"?width=539&height=438"} alt="image"/>
      </div>
      <div style={{marginTop:-50}} className="col-md-4">
                      <h3 style={{fontFamily:"IRANSansWeb",direction:"rtl"}}>{FirstHeader}</h3>
                      <p style={{fontFamily:"IRANSansWeb",direction:"rtl"}}>{ShortDescription}</p>
                      <ul>
                      <img style={{position:"relative",top:20,left:400}} src={ContentAttachment[0]+"?width=22&height=22"} alt=""/>
                        <p style={{ fontFamily: "IRANSansWeb",direction:"rtl" }}>{SecondHeader}</p>
                          <img style={{position:"relative",top:20,left:400}} src={ContentAttachment[0]+"?width=22&height=22"} alt=""/>

                        <p style={{ fontFamily: "IRANSansWeb",direction:"rtl"  }}>{LongDescription}</p>
                          <img style={{position:"relative",top:20,left:400}} src={ContentAttachment[0]+"?width=22&height=22"} alt=""/>

                        <p style={{ fontFamily: "IRANSansWeb",direction:"rtl" }}>{ChildFirstHeader}</p>
                          <img style={{position:"relative",top:20,left:400}} src={ContentAttachment[0]+"?width=22&height=22"} alt=""/>

                        <p style={{ fontFamily: "IRANSansWeb",direction:"rtl" }}>{ChildSecondHeader}</p>
												</ul>
												
											</div>
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
