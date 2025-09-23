import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";
import BarbershopItem from "./_components/barbershop-item";
import { db } from "./_lib/prisma";
import { Barbershop } from "@prisma/client";
import { quickSearchOptions } from "./_constants/search";
import BookingItem from "./_components/booking-item";
import SideMenu from "./_components/side-menu";

const Home = async () => {
  const barbershops = await db.barbershop.findMany({});
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  });

  return (
    <>
      <SideMenu />
      <Header />

      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Marcelo!</h2>
        <p>Segunda-feira, 22 de Setembro</p>
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="mt-6 -mr-5 flex gap-3 overflow-x-scroll pr-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button
              key={option.title}
              className="mt-6 flex-1"
              variant="secondary"
            >
              <Image
                src={option.imageURL}
                alt={option.title}
                width={16}
                height={16}
              />
              {option.title}
            </Button>
          ))}
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner-01.png"
            alt="Agende nos melhores com FSW Barber"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        <BookingItem />

        <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
          Recomendados
        </h2>
        <div className="-mr-5 flex gap-4 overflow-auto p-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop: Barbershop) => (
            <BarbershopItem barbershop={barbershop} key={barbershop.id} />
          ))}
        </div>

        <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
          Populares
        </h2>
        <div className="-mr-5 flex gap-4 overflow-auto p-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop: Barbershop) => (
            <BarbershopItem barbershop={barbershop} key={barbershop.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
