import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { Badge } from "./_components/ui/badge";
import { Avatar, AvatarImage } from "./_components/ui/avatar";
import BarbershopItem from "./_components/barbershop-item";
import { db } from "./_lib/prisma";
import { Barbershop } from "@prisma/client";
import { Footer } from "./_components/footer";

const Home = async () => {
  const barbershops = await db.barbershop.findMany({});
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  });

  return (
    <>
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
          <Button className="mt-6 flex-1" variant="secondary">
            <Image
              src="/scissors.svg"
              alt="Cabeleireiro"
              width={24}
              height={24}
            />
            Cabelo
          </Button>
          <Button className="mt-6 flex-1" variant="secondary">
            <Image src="/mustache.svg" alt="Barba" width={16} height={16} />
            Barba
          </Button>
          <Button className="mt-6 flex-1" variant="secondary">
            <Image src="/razor.svg" alt="Acabamento" width={16} height={16} />
            Acabamento
          </Button>
          <Button className="mt-6 flex-1" variant="secondary">
            <Image
              src="/eyebrow.svg"
              alt="Sobrancelha"
              width={16}
              height={16}
            />
            Sobrancelha
          </Button>
          <Button className="mt-6 flex-1" variant="secondary">
            <Image src="/towel.svg" alt="Massagem" width={16} height={16} />
            Massagem
          </Button>
          <Button className="mt-6 flex-1" variant="secondary">
            <Image src="/shampoo.svg" alt="Hidratação" width={16} height={16} />
            Hidratação
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner-01.png"
            alt="Agende nos melhores com FSW Barber"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
          Agendamentos
        </h2>

        <Card>
          <CardContent className="flex justify-between p-0">
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit rounded-2xl">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>
              <div className="item-center flex gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage
                    src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"
                    alt="Barbeiro"
                  />
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Setembro</p>
              <p className="text-2xl">22</p>
              <p className="text-sm">15:00</p>
            </div>
          </CardContent>
        </Card>

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

      <Footer />
    </>
  );
};

export default Home;
