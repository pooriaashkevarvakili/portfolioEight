import { OurTreatmentCatalogItemSectionProvider } from ".";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const OurTreatmentProvider: React.FunctionComponent<AppProps> = ({
  apiProps: { ourTreatment },
}) => (
  <>
    <OurTreatmentCatalogItemSectionProvider ourTreatment={ourTreatment} />
  </>
);
