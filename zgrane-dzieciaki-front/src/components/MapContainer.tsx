"use client";
import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(
  () => import("./Map").then((module) => module.Map),
  {
    ssr: false,
  }
);

export const Container = () => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6" id="map-section">
        Nasza lokalizacja
      </h2>
      <MapWithNoSSR />
    </div>
  );
};
