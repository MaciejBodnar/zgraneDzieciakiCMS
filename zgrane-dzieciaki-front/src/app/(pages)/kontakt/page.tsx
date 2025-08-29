import Image from "next/image";
import mapImage from "../../../assets/Mapa.png";
import { QuickInfoBanner } from "@/components/QuickInfoBanner";
import {
  FaChevronRight,
  FaDirections,
  FaEnvelope,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaPhone,
} from "react-icons/fa";
import { Container } from "@/components/MapContainer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";

export default async function Page() {
  const contentItems = [
    {
      text: "Znajdujemy się w centrum Ząbek, w bliskiej odległości od stacji PKP Ząbki.",
    },
    {
      text: "Dojazd samochodem: Najlepszy dojazd z Warszawy ulicą Józefa Piłsudskiego",
    },
    {
      text: "Komunikacja miejska: Autobus 245 - nalezy wysiąść na przystanku Ząbki Dzika",
    },
  ];

  const contactInfo = [
    {
      title: "Adres",
      text: (
        <>
          Centrum Rozwoju Dziecka &ldquo;Zgrane Dzieciaki&ldquo;
          <br /> ul. Kościelna 9 05-091 Ząbki
        </>
      ),
      icon: <FaMapMarkerAlt className="text-blue-500 text-xl mt-1" />,
    },
    {
      title: "Telefon",
      text: "(+48) 691-031-311",
      icon: <FaPhone className="text-blue-500 text-xl mt-1" />,
    },
    {
      title: "E-mail",
      text: "gabinet@zgranedzieciaki.pl",
      icon: <FaEnvelope className="text-blue-500 text-xl mt-1" />,
    },
    {
      title: "Dane do przelewu",
      text: (
        <>
          Julitta Janiak
          <br />
          Nr konta: XX XXXX XXXX XXXX XXXX XXXX XXXX
        </>
      ),
      icon: <FaMoneyBillWave className="text-blue-500 text-xl mt-1" />,
    },
  ];
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-12">
        <Image
          src={mapImage}
          alt="Mapa dojazdu"
          className="w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-lg"
          width={1200}
          height={400}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <QuickInfoBanner
          contentItems={contactInfo}
          title="Informacje kontaktowe"
        />

        <QuickInfoBanner
          contentItems={contentItems}
          // eslint-disable-next-line react/no-children-prop
          children={<FaDirections className="text-blue-500 text-2xl" />}
          title="Jak do nas trafić?"
        />
      </div>
      <ContactForm />
      <div id="map">
        <Container />
      </div>
    </div>
  );
}
