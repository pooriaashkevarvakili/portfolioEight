import { OneCatalogData } from "../../../../../types/OneCatalogData";

import { GetStaticProps } from "next";
// ------------------------------ ---------------------- --------
interface AppProps {
  callSectionCatalogItem: OneCatalogData;
}
export const CallSectionCatalogItem: React.FunctionComponent<AppProps> = ({
  callSectionCatalogItem,
}) => {
  const {
    FirstHeader,
    SecondHeader,
    ShortDescription,
    LongDescription,
    ContentAttachment,
    ChildFirstHeader,
  } = callSectionCatalogItem;

  return (
    <div id="content" className="site-content content-wrapper page-content">
      <div className="page type-page hentry">
        <div className="page-content-body">
          <section className="call-to-action">
            <div className="container">
              <div className="row">
                <div className="section-content">
                  <div className="col-md-offset-5 col-lg-offset-6">
                    <h2 style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>
                      <strong
                        style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}
                      >
                        {FirstHeader}
                      </strong>{" "}
                      {SecondHeader}{" "}
                      <strong
                        style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}
                      >
                        {LongDescription}
                      </strong>{" "}
                      {ChildFirstHeader}
                    </h2>
                    <p style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>
                      {ShortDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <style jsx>{`
        .call-to-action {
          background: url(${ContentAttachment[0] +
            "?width=1293.64&height=463.64"})
            no-repeat right center;
        }
      `}</style>
    </div>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
