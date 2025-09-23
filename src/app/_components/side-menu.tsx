import { LogIn, X } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { quickSearchOptions } from "../_constants/search";

const SideMenu2 = () => {
  return (
    <div className="fixed inset-0 z-10 hidden bg-[#0A0A0C]">
      <div className="fixed top-0 right-0 z-20 h-full w-[350px] bg-[#141518] px-5 py-6">
        <div className="space-y-6 border-b-2 pb-6">
          <div className="flex items-center justify-between py-1.5">
            <h2 className="text-lg font-semibold">Menu</h2>
            <X className="h-6 w-6" />
          </div>

          <div className="flex items-center justify-between py-1">
            <h2 className="text-lg font-semibold">Olá. Faça seu login!</h2>
            <Button size="icon" className="h-auto w-auto px-2.5 py-2.5">
              <LogIn className="size-5" />
            </Button>
          </div>
        </div>

        <div className="space-y-1 border-b-2 py-6">
          <Button className="flex h-auto w-full items-center justify-start gap-3 rounded-xl px-4 py-4">
            <Image src="/home.svg" alt="Home" width={16} height={16} />
            <p>Início</p>
          </Button>
          <Button
            variant="ghost"
            className="flex h-auto w-full items-center justify-start gap-3 rounded-xl px-4 py-4"
          >
            <Image
              src="/calendar.svg"
              alt="Agendamentos"
              width={16}
              height={16}
            />
            <p>Agendamentos</p>
          </Button>
        </div>

        <div className="space-y-1 pt-6">
          {quickSearchOptions.map((option) => (
            <Button
              key={option.title}
              variant="ghost"
              className="flex h-auto w-full items-center justify-start gap-3 rounded-xl px-4 py-4"
            >
              <Image
                src={option.imageURL}
                alt={option.title}
                width={16}
                height={16}
              />
              <p>{option.title}</p>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideMenu2;
