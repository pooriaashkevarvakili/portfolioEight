import { PackageSectionProvider } from ".";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const OurTreatmentProvider: React.FunctionComponent<AppProps> = ({
  apiProps: { pakageSection },
}) => (
  <>
    <PackageSectionProvider pakageSection={pakageSection} />
  </>
);
