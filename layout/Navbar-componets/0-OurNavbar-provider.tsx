import { OurNavbarSectionProvider } from "./1-OurSideBarMenu/0-OurSide-Menu-section-provider";
// -------------------------------------------
interface AppProps {
  navbarStrings: any;
}
// -------------------------------------------
export const OurNavbarProvider: React.FunctionComponent<AppProps> = ({
  navbarStrings,
}) => {
  return (
    <>
      <OurNavbarSectionProvider navbarStrings={navbarStrings} />
    </>
  );
};
