import React from "react";
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { Button } from "./ui/button";
import { LogOutIcon } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import Image from "next/image";
import { quickSearchOptions } from "../_constants/search";

const SidebarSheet = () => {
  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="item-center flex gap-3 border-b border-solid py-5">
        <Avatar className="h-12 w-12">
          <AvatarImage src="/avatar.png" alt="Avatar" />
        </Avatar>

        <div className="flex min-w-0 flex-col justify-center">
          <p className="truncate font-bold">Marcelo Comanduci Fernandes Neto</p>
          <p className="truncate text-xs">mcomanduci@gmail.com</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        <SheetClose asChild>
          <Button className="justify-start gap-2 px-4" size="lg" asChild>
            <Link href="/">
              <Image src="/home.svg" alt="Home" width={18} height={18} />
              Início
            </Link>
          </Button>
        </SheetClose>

        <Button variant="ghost" className="justify-start gap-2 px-4" size="lg">
          <Image
            src="/calendar.svg"
            alt="Agendamentos"
            width={18}
            height={18}
          />
          Agendamentos
        </Button>
      </div>

      <div className="flex flex-col gap-2 border-b border-solid pb-5">
        {quickSearchOptions.map((option) => (
          <Button
            key={option.title}
            variant="ghost"
            className="justify-start gap-2 px-4"
            size="lg"
          >
            <Image
              src={option.imageURL}
              alt={option.title}
              width={18}
              height={18}
            />
            <p>{option.title}</p>
          </Button>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <Button className="justify-start gap-2 px-4" variant="ghost" size="lg">
          <LogOutIcon size={18} />
          Sair da conta
        </Button>
      </div>
    </SheetContent>
  );
};

export default SidebarSheet;
