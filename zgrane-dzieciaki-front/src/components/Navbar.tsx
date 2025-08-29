import { useState, useEffect } from "react";
import logo from "../assets/ZgraneDzieciakiLogo.png";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaList,
  FaEnvelope,
  FaShieldAlt,
  FaChevronDown,
  FaGraduationCap,
  FaFlask,
  FaChild,
  FaMoneyBill,
  FaHandPaper,
  FaComments,
  FaHeadphones,
  FaWalking,
  FaHandHoldingMedical,
} from "react-icons/fa";
import { Submenu } from "./Submenu";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        className={`bg-white shadow-lg fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "h-14" : "h-22"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 h-full">
          <div
            className={`flex justify-between items-center h-full transition-all duration-300`}
          >
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src={logo}
                  alt="Zgrane Dzieciaki Logo"
                  className={`transition-all duration-300 ${isScrolled ? "h-10 w-[150px]" : "h-14 lg:h-20 w-[300px]"}`}
                />
              </Link>
            </div>

            <button
              className="md:hidden text-gray-600 hover:text-gray-900"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <FaTimes size={isScrolled ? 20 : 24} />
              ) : (
                <FaBars size={isScrolled ? 20 : 24} />
              )}
            </button>

            <div className="hidden md:flex md:gap-4 lg:space-x-8 items-center">
              <Link
                href="/"
                className={`text-gray-600 hover:text-gray-900 transition-all duration-300 flex items-center gap-1 ${
                  isScrolled ? "text-sm" : "text-base"
                }`}
              >
                Strona główna
              </Link>

              <div className="relative group flex flex-col items-center">
                <Link
                  href="/o-nas"
                  className={`text-gray-600 hover:text-gray-900 transition-all duration-300 flex items-center gap-1 ${
                    isScrolled ? "text-sm" : "text-base"
                  }`}
                >
                  O nas
                  <FaChevronDown
                    className={`transform transition-transform duration-200 group-hover:rotate-180`}
                    size={12}
                  />
                </Link>
                {/* Dropdown O nas */}
                <div className="absolute hidden group-hover:block flex-col items-center justify-center min-w-[300px] mt-6 bg-gray-100">
                  <Submenu
                    link="/o-nas/standardy-ochrony-maloletnich"
                    label="Standardy ochrony małoletnich"
                    // eslint-disable-next-line react/no-children-prop
                    children={<FaChild className="text-blue-500" />}
                  />
                </div>
              </div>

              <div className="relative group flex flex-col items-center">
                <Link
                  href="/oferta"
                  className={`text-gray-600 hover:text-gray-900 transition-all duration-300 flex items-center gap-1 ${
                    isScrolled ? "text-sm" : "text-base"
                  }`}
                >
                  Oferta
                  <FaChevronDown
                    className={`transform transition-transform duration-200 group-hover:rotate-180`}
                    size={12}
                  />
                </Link>
                <div className="absolute hidden group-hover:block flex-col items-center justify-center min-w-[300px] mt-6 bg-gray-100">
                  <Submenu
                    link="/oferta/integracja-sensoryczna"
                    label="Integracja sensoryczna"
                    // eslint-disable-next-line react/no-children-prop
                    children={<FaGraduationCap className="text-blue-500" />}
                  />
                  <Submenu
                    link="/oferta/tus"
                    label="Trening umiejętności społecznych"
                    // eslint-disable-next-line react/no-children-prop
                    children={<FaFlask className="text-blue-500" />}
                  />
                  <Submenu
                    link="/oferta/terapia-kregoslupa"
                    label="Terapia kręgosłupa"
                    // eslint-disable-next-line react/no-children-prop
                    children={
                      <FaHandHoldingMedical className="text-blue-500" />
                    }
                  />
                  <Submenu
                    link="/oferta/trening-neuroflow"
                    label="Neuroflow"
                    // eslint-disable-next-line react/no-children-prop
                    children={<FaHeadphones className="text-blue-500" />}
                  />
                  <Submenu
                    link="/oferta/korektywa"
                    label="Korektywa"
                    // eslint-disable-next-line react/no-children-prop
                    children={<FaWalking className="text-blue-500" />}
                  />
                  <Submenu
                    link="/oferta/terapia-dloni"
                    label="Terapia dłoni"
                    // eslint-disable-next-line react/no-children-prop
                    children={<FaHandPaper className="text-blue-500" />}
                  />
                  <Submenu
                    link="/oferta/logopedia"
                    label="Logopedia"
                    // eslint-disable-next-line react/no-children-prop
                    children={<FaComments className="text-blue-500" />}
                  />
                  <Submenu
                    link="/oferta/cennik"
                    label="Cennik"
                    // eslint-disable-next-line react/no-children-prop
                    children={<FaMoneyBill className="text-blue-500" />}
                  />
                </div>
              </div>

              {/* <div className="relative group">
              <Link
                href="/gallery"
                className={`text-gray-600 hover:text-gray-900 transition-all duration-300 flex items-center gap-1 ${
                  isScrolled ? 'text-sm' : 'text-base'
                }`}
              >
                Galeria
                <FaChevronDown
                  className={`transform transition-transform duration-200 group-hover:rotate-180`}
                  size={12}
                />
              </Link>

              <div className="absolute rounded-md left-1/2 transform -translate-x-1/2 pt-1 hidden group-hover:block group-hover:rounded-md">
                <div className="bg-white shadow-lg rounded-md w-48 border-t-2 border-blue-500">
                  <Link
                    href="/gallery/office"
                    className="flex p-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-center items-center justify-center gap-2"
                  >
                    <FaBuilding className="text-blue-500" />
                    <span>Biuro</span>
                  </Link>
                  <Link
                    href="/gallery/classes"
                    className="flex p-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-center items-center justify-center gap-2"
                  >
                    <FaChalkboardTeacher className="text-blue-500" />
                    <span>Zajęcia</span>
                  </Link>
                  <Link
                    href="/gallery/therapy"
                    className="flex p-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-center items-center justify-center gap-2"
                  >
                    <FaHandHoldingHeart className="text-blue-500" />
                    <span>Terapia</span>
                  </Link>
                </div>
              </div>
            </div> */}

              <Link
                href="/kontakt"
                className={`text-gray-600 hover:text-gray-900 transition-all duration-300 flex items-center gap-1 ${
                  isScrolled ? "text-sm" : "text-base"
                }`}
              >
                Kontakt
              </Link>
              <Link
                href="/rodo"
                className={`text-gray-600 hover:text-gray-900 transition-all duration-300 flex items-center gap-1 ${
                  isScrolled ? "text-sm" : "text-base"
                }`}
              >
                RODO
              </Link>
            </div>
          </div>

          {/* Mobile menu - with icons and borders */}
          <div
            className={`md:hidden ${isMenuOpen ? "block" : "hidden"} absolute top-full left-0 right-0 bg-white shadow-lg z-50`}
          >
            <div className="flex flex-col">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200"
                onClick={toggleMenu}
              >
                <FaHome className="text-blue-500" />
                <span>Strona główna</span>
              </Link>

              {/* About Mobile Dropdown */}
              <div>
                <div className="w-full text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200">
                  <FaInfoCircle className="text-blue-500" />
                  <Link href="/o-nas" onClick={toggleMenu}>
                    <span>O nas</span>
                  </Link>
                  <button
                    onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                  >
                    <FaChevronDown
                      className={`transform transition-transform duration-200 ${isMobileAboutOpen ? "rotate-180" : ""}`}
                      size={12}
                    />
                  </button>
                </div>

                {isMobileAboutOpen && (
                  <>
                    <Link
                      href="/o-nas/standardy-ochrony-maloletnich"
                      className="text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200 bg-gray-50"
                      onClick={toggleMenu}
                    >
                      <FaChild className="text-blue-500" />
                      <span>Standardy ochrony małoletnich</span>
                    </Link>
                  </>
                )}
              </div>

              {/* oferta Mobile Dropdown */}
              <div>
                <div className="w-full text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200">
                  <FaList className="text-blue-500" />
                  <Link href="/oferta" onClick={toggleMenu}>
                    <span>Oferta</span>
                  </Link>
                  <button
                    onClick={() =>
                      setIsMobileDropdownOpen(!isMobileDropdownOpen)
                    }
                  >
                    <FaChevronDown
                      className={`transform transition-transform duration-200 ${isMobileDropdownOpen ? "rotate-180" : ""}`}
                      size={12}
                    />
                  </button>
                </div>

                {isMobileDropdownOpen && (
                  <>
                    <Link
                      href="/oferta/intergacja-sensoryczna"
                      className="text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200 bg-gray-50"
                      onClick={toggleMenu}
                    >
                      <FaGraduationCap className="text-blue-500" />
                      <span>Integracja Sensoryczna</span>
                    </Link>
                    <Link
                      href="/oferta/trening-umiejetnosci-spolecznych"
                      className="text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200 bg-gray-50"
                      onClick={toggleMenu}
                    >
                      <FaFlask className="text-blue-500" />
                      <span>Trening umiejętności społecznych</span>
                    </Link>
                    <Link
                      href="/oferta/terapia-kregoslupa"
                      className="text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200 bg-gray-50"
                      onClick={toggleMenu}
                    >
                      <FaGraduationCap className="text-blue-500" />
                      <span>Terapia kręgosłupa</span>
                    </Link>
                    <Link
                      href="/oferta/trening-neuroflow"
                      className="text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200 bg-gray-50"
                      onClick={toggleMenu}
                    >
                      <FaFlask className="text-blue-500" />
                      <span>Neuroflow</span>
                    </Link>
                    <Link
                      href="/oferta/korektywa"
                      className="text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200 bg-gray-50"
                      onClick={toggleMenu}
                    >
                      <FaGraduationCap className="text-blue-500" />
                      <span>Korektywa</span>
                    </Link>
                    <Link
                      href="/oferta/terapia-dloni"
                      className="text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200 bg-gray-50"
                      onClick={toggleMenu}
                    >
                      <FaFlask className="text-blue-500" />
                      <span>Terapia Dłoni</span>
                    </Link>
                    <Link
                      href="/oferta/logopedia"
                      className="text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200 bg-gray-50"
                      onClick={toggleMenu}
                    >
                      <FaGraduationCap className="text-blue-500" />
                      <span>Logopedia</span>
                    </Link>
                    <Link
                      href="/oferta/cennik"
                      className="text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200 bg-gray-50"
                      onClick={toggleMenu}
                    >
                      <FaFlask className="text-blue-500" />
                      <span>Cennik</span>
                    </Link>
                  </>
                )}
              </div>

              {/* <div>
              <div className="w-full text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200">
                <FaImages className="text-blue-500" />
                <a href="gallery">
                  <span>Galeria</span>
                </a>
                <button onClick={() => setIsMobileGalleryOpen(!isMobileGalleryOpen)}>
                  <FaChevronDown
                    className={`transform transition-transform duration-200 ${isMobileGalleryOpen ? 'rotate-180' : ''}`}
                    size={12}
                  />
                </button>
              </div>

              {isMobileGalleryOpen && (
                <>
                  <Link
                    href="/gallery/office"
                    className="text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200 bg-gray-50"
                    onClick={toggleMenu}
                  >
                    <FaBuilding className="text-blue-500" />
                    <span>Office</span>
                  </Link>
                  <Link
                    href="/gallery/classes"
                    className="text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200 bg-gray-50"
                    onClick={toggleMenu}
                  >
                    <FaChalkboardTeacher className="text-blue-500" />
                    <span>Classes</span>
                  </Link>
                  <Link
                    href="/gallery/therapy"
                    className="text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200 bg-gray-50"
                    onClick={toggleMenu}
                  >
                    <FaHandHoldingHeart className="text-blue-500" />
                    <span>Therapy</span>
                  </Link>
                </>
              )}
            </div> */}

              <Link
                href="/kontakt"
                className="text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2 border-b border-gray-200"
                onClick={toggleMenu}
              >
                <FaEnvelope className="text-blue-500" />
                <span>Kontakt</span>
              </Link>
              <Link
                href="/rodo"
                className="text-gray-600 hover:text-gray-900 py-3 flex items-center justify-center space-x-2"
                onClick={toggleMenu}
              >
                <FaShieldAlt className="text-blue-500" />
                <span>RODO</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
