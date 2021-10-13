import { ServicesSectionCatalogProvider } from ".";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const ServiceProvider: React.FunctionComponent<AppProps> = ({
  apiProps: { servicesSection },
}) => (
  <>
    <ServicesSectionCatalogProvider servicesSection={servicesSection} />
  </>
);
