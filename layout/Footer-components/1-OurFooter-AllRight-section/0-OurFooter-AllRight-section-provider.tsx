import { OurFooterAllRightCatalog } from "./1-OurFooter-AllRight-catalog";

// ------------------------------ - --------------------- --------

interface AppProps {
  ourFooter: any;
}

// ------------------------------ - --------------------- --------

export const OurFooterAllRightSectionProvider: React.FunctionComponent<AppProps> = ({
  ourFooter: { ourFooterAllRightCatalog },
}) => (
  <>
    <OurFooterAllRightCatalog
      ourFooterAllRightCatalog={ourFooterAllRightCatalog[0]}
    />
  </>
);
