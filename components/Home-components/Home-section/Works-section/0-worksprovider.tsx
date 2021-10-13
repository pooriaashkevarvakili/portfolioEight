import { WorksSectionProvider } from ".";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const OurTreatmentProvider: React.FunctionComponent<AppProps> = ({
  apiProps: { WorksSection },
}) => (
  <>
    <WorksSectionProvider WorksSection={WorksSection} />
  </>
);
