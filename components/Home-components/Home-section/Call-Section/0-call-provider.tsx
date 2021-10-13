import { CallSectionCatalogProvider } from ".";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const OurTreatmentProvider: React.FunctionComponent<AppProps> = ({
  apiProps: { callSection },
}) => (
  <>
    <CallSectionCatalogProvider callSection={callSection} />
  </>
);
