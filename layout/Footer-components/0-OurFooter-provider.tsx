import { OurFooterAllRightCatalog } from "./1-OurFooter-AllRight-section/1-OurFooter-AllRight-catalog";
// -------------------------------------------
interface AppProps {
  OurFooter: any;
}
// -------------------------------------------
export const OurFooterProvider: React.FunctionComponent<AppProps> = ({
  OurFooter: { ourFooterAllRightCatalog },
}) => (
  <>
    <OurFooterAllRightCatalog
      ourFooterAllRightCatalog={ourFooterAllRightCatalog}
    />
  </>
);
