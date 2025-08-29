import EmblaCarousel from "@/components/Carousel/Carousel";
import { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import Link from "next/link";
import puzzle from "../assets/Puzzle2.jpeg";
import { QuickLinks } from "@/components/QuickLinks";
import {
  FaGraduationCap,
  FaFlask,
  FaHandPaper,
  FaComments,
  FaHeadphones,
  FaWalking,
  FaHandHoldingMedical,
} from "react-icons/fa";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default async function IndexPage() {
  return (
    <main className="container mx-auto min-h-screen max-w-6xl p-8 flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-4">
          <QuickLinks
            href="/oferta/trening-neuroflow"
            icon={<FaHeadphones size={24} className="text-blue-500" />}
            title="Neuriflow"
          />
          <QuickLinks
            href="/oferta/korektywa"
            icon={<FaWalking size={24} className="text-blue-500" />}
            title="Korektywa"
          />
          <QuickLinks
            href="/oferta/terapia-dloni"
            icon={<FaHandPaper size={24} className="text-blue-500" />}
            title="Terapia dłoni"
          />
          <QuickLinks
            href="/oferta/logopedia"
            icon={<FaComments size={24} className="text-blue-500" />}
            title="Logopedia"
          />
        </div>
        <div className="flex justify-between gap-4">
          <QuickLinks
            href="/oferta/integracja-sensoryczna"
            icon={<FaGraduationCap size={24} className="text-blue-500" />}
            title="Integracja Sensoryczna"
          />
          <QuickLinks
            href="/oferta/tus"
            icon={<FaFlask size={24} className="text-blue-500" />}
            title="Trening umiejętności społecznych"
          />
          <QuickLinks
            href="/oferta/terapia-kregoslupa"
            icon={<FaHandHoldingMedical size={24} className="text-blue-500" />}
            title="Terapia kręgosłupa"
          />
        </div>
      </div>
      <div className=" grid grid-cols-2 grid-rows-3 gap-4">
        <div className="col-span-1 row-span-3 max-w-fit">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>

        <Link href="/o-nas" className="group flex col-span-1 row-span-2">
          <div className="flex flex-col justify-center h-full group-hover:bg-green-100 w-full bg-green-50 p-6 rounded-l-xl group-hover:shadow-lg transition-all">
            <h2 className="text-2xl font-semibold mb-2">O nas</h2>
            <p className="text-gray-600">
              Witamy na stronie Centrum Rozwoju Dziecka Zgrane Dzieciaki w
              Ząbkach (wcześniej Małolat). Mamy przyjemność współpracować z
              Państwem już od 2010 roku.
            </p>
          </div>
          <Image
            alt=""
            src={puzzle}
            width={300}
            height={200}
            className="group-hover:shadow-lg group-hover:bg-green-100 rounded-r-xl object-cover max-w-[376px] min-h-[250px]"
          />
        </Link>
        <Link href="/kontakt#map" className="flex col-span-1 row-span-1">
          <div className="flex flex-col justify-center h-full hover:bg-yellow-100 w-full bg-yellow-50 p-6 rounded-xl hover:shadow-lg transition-all">
            <h2 className="text-xl font-semibold mb-6">
              Centrum Rozwoju Dziecka „Zgrane Dzieciaki”
            </h2>
            <ul className="text-gray-600 text-base flex flex-col gap-1">
              <li>ul. Kościelna 9, 05-091 Ząbki</li>
              <li>tel. kom. +48 691 031 311 - gabinet@zgranedzieciaki.pl</li>
              <li>Bank Millennium S.A. 82 1160 2202 0000 0003 8531 8733</li>
            </ul>
          </div>
        </Link>
      </div>

      <Link href="/kontakt">
        <div className="flex flex-col justify-center h-full hover:bg-red-200 w-full bg-red-50 p-6 rounded-xl hover:shadow-lg transition-all">
          <div className="text-gray-600 flex flex-col gap-4">
            <span>
              <strong>
                UWAGA!! OBECNIE PROWADZIMY NABÓR NA ZAJĘCIA TUS (TRENING
                UMIEJĘTNOŚCI SPOŁECZNYCH)
                <br />
              </strong>
            </span>

            <span>
              Zajęcia będą odbywały się cyklicznie w soboty o stałych godzinach
              od września do czerwca. Ruszamy w połowie września 2023 roku.
              Serdecznie zapraszamy!!
              <br />
            </span>

            <ul className="list-disc list-inside">
              <span className="text-green-600">
                Prosimy o zgłaszanie dzieci w następujących grupach wiekowych
              </span>
              <li>4-5 lat</li>
              <li>7-8 lat</li>
              <li>9-11 lat</li>
            </ul>
            <span>
              Jeśli znajdą się chętni - zajmiemy się również młodzieżą, w tym
              licealną W celu zgłoszenia dziecka prosimy o kontakt na nr{" "}
              <strong>691 031 311</strong> lub <strong>668 853 487 </strong>
              Oferujemy pomoc diagnostyczno-terapeutyczną dla dzieci z
              zaburzeniami integracji sensorycznej, wadami wymowy, wadami
              postawy i trudnościami w nauce.
            </span>
          </div>
        </div>
      </Link>
      <div className="text-center bg-blue-50 p-8 rounded-xl transform hover:scale-[1.02] transition-transform">
        <Link href="/oferta/cennik">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            Zapraszamy do zapoznania się z naszą ofertą!
          </h2>
          <p className="text-gray-600">
            Pomożemy Twojemu dziecku rozwinąć jego potencjał
          </p>
        </Link>
      </div>
    </main>
  );
}
