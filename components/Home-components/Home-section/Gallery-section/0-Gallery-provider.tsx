import { GallerySectionCatalogProvider } from ".";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const GalleryProvider: React.FunctionComponent<AppProps> = ({
  apiProps: { gallerySection },
}) => (
  <>
    <GallerySectionCatalogProvider gallerySection={gallerySection} />
  </>
);
