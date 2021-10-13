import { OurSidebarMenu } from "./1-OurSidebar-Menu-section-catalog";
import React from "react";
interface AppProps {
  navbarStrings: any;
}
export const OurNavbarSectionProvider: React.FunctionComponent<AppProps> = ({
  navbarStrings,
}) => {
  return <OurSidebarMenu navbarStrings={navbarStrings[0]} />;
};
