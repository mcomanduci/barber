"use client";

import { Barbershop, BarbershopService } from "@prisma/client";
import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { Sheet, SheetTrigger } from "./ui/sheet";
import CalendarComp from "./calendar-comp";

// Create a type for serialized service with number price instead of Decimal
type ServiceWithNumberPrice = Omit<BarbershopService, "price"> & {
  price: number;
};

interface ServiceItemProps {
  service: ServiceWithNumberPrice;
  barbershop: Pick<Barbershop, "name">;
}

const ServiceItem = ({ service, barbershop }: ServiceItemProps) => {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  const handleSheetOpenChange = (open: boolean) => {
    setIsSheetOpen(open);
  };

  return (
    <Card>
      <CardContent className="flex items-center gap-3 p-3">
        <div className="relative max-h-[110px] min-h-[110px] max-w-[110px] min-w-[110px]">
          <Image
            src={service.imageURL}
            alt={service.name}
            fill
            className="rounded-lg object-cover"
            sizes={"(max-width: 640px) 100vw, 110px"}
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-semibold">{service.name}</h3>
          <p className="text-sm text-gray-400">{service.description}</p>
          <div className="flex items-center justify-between">
            <p className="text-primary text-sm font-bold">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(Number(service.price))}
            </p>

            <Sheet open={isSheetOpen} onOpenChange={handleSheetOpenChange}>
              <SheetTrigger asChild>
                <Button size="sm" variant="secondary">
                  Reservar
                </Button>
              </SheetTrigger>
              <CalendarComp
                service={service}
                barbershop={barbershop}
                onSheetClose={() => setIsSheetOpen(false)}
              />
            </Sheet>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceItem;
