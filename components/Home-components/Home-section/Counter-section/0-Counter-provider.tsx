import { CounterSectionCatalogProvider } from ".";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const CounterProvider: React.FunctionComponent<AppProps> = ({
  apiProps: { CounterSection },
}) => (
  <>
    <CounterSectionCatalogProvider CounterSection={CounterSection} />
  </>
);
