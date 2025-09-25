import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import Sidebar from "./sidebar";

const Header = () => {
  return (
    <Card className="rounded-none">
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image
          src="/logo.svg"
          alt="FSW Barber"
          width={120}
          height={20.3}
          className="w-auto"
        />

        <Sidebar>
          <Button variant="outline" size="icon">
            <MenuIcon className="size-5" />
          </Button>
        </Sidebar>
      </CardContent>
    </Card>
  );
};

export default Header;
