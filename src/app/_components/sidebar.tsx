"use client";

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { LogInIcon, LogOutIcon } from "lucide-react";
// import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import Image from "next/image";
import { quickSearchOptions } from "../_constants/search";
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogContent,
} from "./ui/dialog";
import { signIn } from "next-auth/react";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const handleLoginWithGoogleClick = () => signIn("google");

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>

        <div className="flex items-center justify-between gap-3 border-b border-solid py-5">
          <h2 className="font-bold">Olá, faça seu login!</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="icon">
                <LogInIcon />
              </Button>
            </DialogTrigger>
            <DialogContent className="w-[90%]">
              <DialogHeader>
                <DialogTitle>Faça login na plataform</DialogTitle>
                <DialogDescription>
                  Conecte-se usando sua conta do Google.
                </DialogDescription>
              </DialogHeader>
              <Button
                className="gap-1 font-bold"
                variant="outline"
                size="lg"
                onClick={handleLoginWithGoogleClick}
              >
                <Image
                  src="/google.svg"
                  alt="Google Icon"
                  width={18}
                  height={18}
                />
                Google
              </Button>
            </DialogContent>
          </Dialog>
        </div>

        {/* <div className="item-center flex gap-3 border-b border-solid py-5">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/avatar.png" alt="Avatar" />
          </Avatar>

          <div className="flex min-w-0 flex-col justify-center">
            <p className="truncate font-bold">
              Marcelo Comanduci Fernandes Neto
            </p>
            <p className="truncate text-xs">mcomanduci@gmail.com</p>
          </div>
        </div> */}

        <div className="flex flex-col gap-2 border-b border-solid py-5">
          <SheetClose asChild>
            <Button className="justify-start gap-2 px-4" size="lg" asChild>
              <Link href="/">
                <Image src="/home.svg" alt="Home" width={18} height={18} />
                Início
              </Link>
            </Button>
          </SheetClose>

          <Button
            variant="ghost"
            className="justify-start gap-2 px-4"
            size="lg"
          >
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
          <Button
            className="justify-start gap-2 px-4"
            variant="ghost"
            size="lg"
          >
            <LogOutIcon size={18} />
            Sair da conta
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
