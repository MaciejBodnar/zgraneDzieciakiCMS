"use client";
import React, { useRef } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useAutoplay } from "./AutoPlay";
import { useAutoplayProgress } from "./Progress";
import { NextButton, PrevButton, usePrevNextButtons } from "./Buttons";
import { FaPlay, FaPause } from "react-icons/fa";
import "./css/embla.css";
import logo from "../../assets/IntegracjaSensoryczna.png";
import headPhones from "../../assets/Słuchawki.jpg";
import tus from "../../assets/Tus.png";
import logopeda from "../../assets/Logopeda.png";
import korektywa from "../../assets/Korektywa.png";
import Link from "next/link";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const progressNode = useRef<HTMLDivElement>({} as HTMLDivElement);
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: false, delay: 5000 }),
  ]);

  console.log("tutaj check:", progressNode);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { autoplayIsPlaying, toggleAutoplay, onAutoplayButtonClick } =
    useAutoplay(emblaApi);

  const { showAutoplayProgress } = useAutoplayProgress(emblaApi, progressNode);
  const slidesInfo = [
    {
      title: "Integracja Sensoryczna",
      description:
        "Profesjonalna terapia integracji sensorycznej, która pomoże Twojemu dziecku w rozwoju.",
      image: logo,
      buttonText: "Dowiedz się więcej",
      buttonLink: "/oferta/intergacja-sensoryczna",
      color: "from-blue-600 to-indigo-600",
      buttonStyle: "bg-indigo-600 hover:bg-indigo-700 text-white",
    },
    {
      title: "Terapia Słuchowa",
      description:
        "Specjalistyczna terapia słuchowa wspierająca rozwój Twojego dziecka.",
      image: headPhones,
      buttonText: "Poznaj szczegóły",
      buttonLink: "/oferta/trening-neuroflow",
      color: "from-purple-600 to-pink-600",
      buttonStyle:
        "border-2 border-purple-600 text-purple-600 hover:bg-purple-50",
    },
    {
      title: "Trening Umiejętności Społecznych",
      description: "Kompleksowy program rozwijający umiejętności społeczne.",
      image: tus,
      buttonText: "Zobacz program",
      buttonLink: "/oferta/trening-umiejetnosci-spolecznych",
      color: "from-green-600 to-teal-600",
      buttonStyle: "bg-teal-600 hover:bg-teal-700 text-white",
    },
    {
      title: "Terapia Logopedyczna",
      description:
        "Profesjonalna pomoc logopedyczna dla dzieci w każdym wieku.",
      image: logopeda,
      buttonText: "Dowiedz się więcej",
      buttonLink: "/oferta/logopedia",
      color: "from-orange-600 to-red-600",
      buttonStyle:
        "border-2 border-orange-600 text-orange-600 hover:bg-orange-50",
    },
    {
      title: "Gimnastyka Korekcyjna",
      description:
        "Zajęcia korekcyjne prowadzone przez doświadczonych specjalistów.",
      image: korektywa,
      buttonText: "Zobacz więcej",
      buttonLink: "/oferta/korektywa",
      color: "from-cyan-600 to-blue-600",
      buttonStyle: "bg-blue-600 hover:bg-blue-700 text-white",
    },
  ];
  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slidesInfo.map((slide, index) => (
            <div key={index} className="relative embla__slide">
              <Link href={slide.buttonLink} className="block">
                <div className="flex flex-col md:grid md:grid-cols-2 min-h-[600px] gap-0 group cursor-pointer">
                  {/* Image Section */}
                  <div className="relative h-[300px] md:h-full order-1 md:order-2 overflow-hidden">
                    {slide.image ? (
                      <div
                        className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                        style={{
                          backgroundImage: `url(${slide.image})`,
                          backgroundSize: "contain",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-10`}
                        />
                      </div>
                    ) : (
                      <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-400 text-lg">
                          Image {index + 1}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12 md:py-16 bg-white order-2 md:order-1 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-5">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${slide.color}`}
                      />
                    </div>

                    <div className="relative z-10">
                      <h2
                        className={`text-4xl md:text-5xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r ${slide.color}`}
                      >
                        {slide.title}
                      </h2>
                      <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
                        {slide.description}
                      </p>
                      <div className="relative inline-block">
                        <button
                          className={`${slide.buttonStyle} px-8 py-4 rounded-lg transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg text-lg font-semibold`}
                        >
                          {slide.buttonText}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton
            onClick={() => onAutoplayButtonClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => onAutoplayButtonClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          />
        </div>

        <div
          className={`embla__progress`.concat(
            showAutoplayProgress ? "" : " embla__progress--hidden"
          )}
        >
          <div className="embla__progress__bar" ref={progressNode} />
        </div>

        <button
          className="embla__play"
          onClick={() => {
            console.log("button clicked");
            toggleAutoplay();
          }}
          type="button"
        >
          {autoplayIsPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>
    </div>
  );
};

export default EmblaCarousel;
