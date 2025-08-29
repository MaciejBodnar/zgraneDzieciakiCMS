"use client";
import puzzleImage from "../../../assets/Puzzle.jpg";
import { FaListUl, FaUserMd, FaUsers } from "react-icons/fa";
import { useEffect, useState } from "react";
import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import Image from "next/image";

export default function Page() {
  // const team = [
  //   {
  //     name: "Julitta Janiak",
  //     roles: [
  //       "pedagog",
  //       "terapeuta integracji sensorycznej",
  //       "terapeuta met. Warnkego",
  //       "provider Neuroflow",
  //     ],
  //   },
  //   {
  //     name: "Anna Krasnodębska",
  //     roles: [
  //       "oligofrenopedagog",
  //       "terapeuta integracji sensorycznej",
  //       "terapeuta TUS",
  //     ],
  //   },
  //   {
  //     name: "Justyna Adamczyk",
  //     roles: [
  //       "pedagog specjalny",
  //       "neurobiolog",
  //       "terapeuta integracji sensorycznej",
  //     ],
  //   },
  //   {
  //     name: "Anna Gajowiec",
  //     roles: [
  //       "fizjoterapeuta",
  //       "terapeuta integracji sensorycznej",
  //       "instruktor korektywy",
  //     ],
  //   },
  //   {
  //     name: "Martyna Masiulaniec",
  //     roles: ["pedagog", "terapeuta integracji sensorycznej"],
  //   },
  //   {
  //     name: "Magdalena Raczyńska",
  //     roles: ["pedagog", "terapeuta ręki i logopeda", "terapia pedagogiczna"],
  //   },
  //   {
  //     name: "Monika Murawiecka",
  //     roles: ["pedagog", "logopeda"],
  //   },
  //   {
  //     name: "Anna Żmijewska",
  //     roles: ["pedagog", "terapia pedagogiczna"],
  //   },
  //   {
  //     name: "Rafał Sawicki",
  //     roles: ["psycholog", "terapeuta TUS"],
  //   },
  // ];

  const [services, setServices] = useState<SanityDocument[]>([]);
  const [team, setTeam] = useState<SanityDocument[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const POSTS_QUERY = `*[_type=="about-services"]`;
      const POSTS_QUERY_TEAM = `*[_type=="about-team"]`;
      const options = { next: { revalidate: 30 } };
      const data = await client.fetch<SanityDocument[]>(
        POSTS_QUERY,
        {},
        options
      );
      const teamData = await client.fetch<SanityDocument[]>(
        POSTS_QUERY_TEAM,
        {},
        options
      );
      setServices(data);
      setTeam(teamData);
    };
    fetchPosts();
  }, []);
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="mb-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <FaUserMd className="text-blue-500" />O NAS
        </h1>
        <Image
          src={puzzleImage}
          alt=""
          className="w-full h-[200px] object-contain"
          width={500}
          height={200}
        />
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <p className="text-gray-600 leading-relaxed mb-8">
            Witamy na stronie Centrum Rozwoju Dziecka Zgrane Dzieciaki w Ząbkach
            (wcześniej Małolat). Mamy przyjemność współpracować z Państwem już
            od 2010 roku. Specjalizujemy się w diagnozie i terapii integracji
            sensorycznej, ale również pomagamy dzieciom z problemami
            logopedycznymi, przetwarzania słuchowego, dysleksją, wadami postawy.
            Zapraszamy dzieci w każdym wieku!
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <FaListUl className="text-blue-500" />W naszej ofercie znajdują się:
        </h2>
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service) => (
              <li
                key={service._id}
                className="flex items-center gap-2 text-gray-600"
              >
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                {service.title}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <FaUsers className="text-blue-500" />
          NASZ ZESPÓŁ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member) => (
            <div
              key={member._id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {member.name}
              </h3>
              <ul className="space-y-1">
                {member.roles.map((role: string, roleIndex: number) => (
                  <li
                    key={roleIndex}
                    className="text-gray-600 text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
