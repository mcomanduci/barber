import SidebarButton from "./sidebar-button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image src="/logo.svg" alt="FSW Barber" width={120} height={18} />

        <SidebarButton />
      </CardContent>
    </Card>
  );
};

export default Header;
