import { ContactSectionCatalogProvider } from ".";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const ContactProvider: React.FunctionComponent<AppProps> = ({
  apiProps: { contactSection },
}) => (
  <>
    <ContactSectionCatalogProvider contactSection={contactSection} />
  </>
);
