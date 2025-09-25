import React from "react";
import { db } from "../_lib/prisma";
import BarbershopItem from "../_components/barbershop-item";
import Header from "../_components/header";
import Search from "../_components/search";

interface BarbershopPageProps {
  searchParams: { search?: string };
}

const BarbershopPage = async ({ searchParams }: BarbershopPageProps) => {
  const { search } = await searchParams;
  const barbershops = await db.barbershop.findMany({
    where: {
      name: {
        contains: search,
        mode: "insensitive",
      },
    },
  });

  return (
    <>
      <Header />
      <div className="my-6 px-5">
        <Search />
      </div>

      <div className="px-5">
        <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
          Resultados para &quot;{search}&quot;
        </h2>
        <div>
          <div className="grid grid-cols-2 gap-4">
            {barbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BarbershopPage;
