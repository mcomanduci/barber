import PhoneItems from "@/app/_components/phone-items";
import ServiceItem from "@/app/_components/service-item";
import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BarbershopPageProps {
  params: { id: string; imageURL: string; name: string };
}

const BarbershopPage = async ({ params }: BarbershopPageProps) => {
  const barbershop = await db.barbershop.findUnique({
    where: { id: params.id },
    include: {
      services: true,
    },
  });

  if (!barbershop) {
    return notFound();
  }

  return (
    <div>
      <div className="relative h-[250px] w-full">
        <Image
          src={barbershop.imageURL}
          alt={barbershop.name}
          fill
          className="object-cover"
        />

        <Button
          variant="secondary"
          className="absolute top-4 left-4"
          size="icon"
          asChild
        >
          <Link href={"/"}>
            <ChevronLeftIcon />
          </Link>
        </Button>

        <Button
          variant="secondary"
          className="absolute top-4 right-4"
          size="icon"
        >
          <MenuIcon />
        </Button>
      </div>
      <div className="border-b border-solid p-5">
        <h1 className="mb-3 text-xl font-bold">{barbershop.name}</h1>
        <div className="item-center mb-2 flex gap-2">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{barbershop.address}</p>
        </div>
        <div className="item-center flex gap-2">
          <StarIcon className="text-primary fill-primary" size={18} />
          <p className="text-sm">5.0 (499 avaliações)</p>
        </div>
      </div>
      <div className="space-y-3 border-b border-solid p-5">
        <h2 className="text-xs font-bold text-gray-400 uppercase">Sobre nós</h2>
        <p className="text-justify text-sm">{barbershop.description}</p>
      </div>
      <div className="space-y-3 border-b border-solid p-5">
        <h2 className="text-xs font-bold text-gray-400 uppercase">Serviços</h2>
        <div className="space-y-3">
          {barbershop.services.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </div>
      </div>
      <div className="space-y-3 p-5">
        <h2 className="text-xs font-bold text-gray-400 uppercase">Contato</h2>
        {barbershop.phones.map((phone, index) => (
          <PhoneItems key={index + 1} phone={phone} />
        ))}
      </div>
    </div>
  );
};

export default BarbershopPage;
