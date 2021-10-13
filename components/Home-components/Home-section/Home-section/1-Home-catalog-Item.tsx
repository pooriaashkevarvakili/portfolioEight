import { OneCatalogData } from "../../../../types/OneCatalogData";
import { HomeCatalogCarouselWithPicture2 } from "./2-Home-Catalog-Carousel-WithPicture2";
import { HomeCatalogCarouselWithPicture3 } from "./3-Home-Catalog-Carousel-WithPicture3";
import { HomeCatalogCarouselWithPicture4 } from "./4-Home-Catalog-Carousel-WithPicture4";
import React from "react";
// ------------------------------ ---------------------- --------
interface AppProps {
  homeCatalogItem: OneCatalogData;

  homeCatalogCarouselWithPicture2: OneCatalogData;
  homeCatalogCarouselWithPicture3: OneCatalogData;
  homeCatalogCarouselWithPicture4: OneCatalogData;
}
export const HomeCatalogItem: React.FunctionComponent<AppProps> = ({
  homeCatalogItem,
  homeCatalogCarouselWithPicture2,
  homeCatalogCarouselWithPicture3,
  homeCatalogCarouselWithPicture4,
}) => {
  return (
    <div id="content" className="site-content content-wrapper page-content">
      <div className="page type-page hentry">
        <div className="page-content-body">
          <section className="hero">
            <div className="hero-content">
              <div
                id="main-slider"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#main-slider"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li data-target="#main-slider" data-slide-to="1"></li>
                  <li data-target="#main-slider" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner" role="listbox">
                  <HomeCatalogCarouselWithPicture2
                    homeCatalogCarouselWithPicture2={
                      homeCatalogCarouselWithPicture2
                    }
                  />
                  <HomeCatalogCarouselWithPicture3
                    homeCatalogCarouselWithPicture3={
                      homeCatalogCarouselWithPicture3
                    }
                  />
                  <HomeCatalogCarouselWithPicture4
                    homeCatalogCarouselWithPicture4={
                      homeCatalogCarouselWithPicture4
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
