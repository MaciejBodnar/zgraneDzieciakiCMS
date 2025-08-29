"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { usePathname } from "next/navigation";

export const Main = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="bg-gray-100 flex flex-col">
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
            onClick={toggleMenu}
          />
        )}
        <Navbar />
      </div>
    </>
  );
};
