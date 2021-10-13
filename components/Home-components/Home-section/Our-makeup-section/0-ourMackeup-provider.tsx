import { OurMackeupSectionCatalogProvider } from ".";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const OurMackeupProvider: React.FunctionComponent<AppProps> = ({
  apiProps: { ourMackeupSection },
}) => (
  <>
    <OurMackeupSectionCatalogProvider ourMackeupSection={ourMackeupSection} />
  </>
);
