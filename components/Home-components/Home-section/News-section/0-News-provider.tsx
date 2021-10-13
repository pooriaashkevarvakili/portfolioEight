import { NewsSectionCatalogProvider } from ".";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const NewsProvider: React.FunctionComponent<AppProps> = ({
  apiProps: { newsSection },
}) => (
  <>
    <NewsSectionCatalogProvider newsSection={newsSection} />
  </>
);
