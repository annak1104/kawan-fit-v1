import { useEffect, useState } from "react";

import burgerMenu from "../../assets/burger-menu.svg";
import check from "../../assets/checkmark-r.svg";
import closeIcon from "../../assets/close.svg";
import logoSmall from "../../assets/logo-small.svg";
import mainImg from "../../assets/main-img.webp";
import { useOfferLink } from "../../hooks/useOfferLink.jsx";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const offerLink = useOfferLink();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

const menuItems = [
  { label: "Kursus", href: "cursos" },
  { label: "Testimoni", href: "depoimentos" },
  { label: "Pertanyaan", href: "dúvidas" },
];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white w-full min-w-[375px] relative">
      {/* Header */}
      <div className="pt-[13px] flex justify-between items-center px-4">
        {/* Mobile Menu Button */}
        <img src={burgerMenu} onClick={toggleMenu} className="cursor-pointer" />

        {/* Logo */}
        <img src={logoSmall} alt="logo-small" className="ml-auto" />
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white bg-opacity-90 z-50 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ transitionDuration: "0.5s" }}
      >
        <div className="h-full mt-[12px] px-4">
          <div className="flex justify-between">
            <img
              src={closeIcon}
              onClick={toggleMenu}
              className="cursor-pointer ml-3"
            />
            <img src={logoSmall} alt="logo-small" />
          </div>
          <div className="flex flex-col items-start">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  handleScroll(item.href);
                  toggleMenu();
                }}
                className="text-black py-4 text-xl bg-transparent border-none cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section (Mobile) */}
      <section className="bg-[#404040] h-full text-white text-center px-6 py-8 mt-6">
        <h2 className="text-3xl font-bold leading-snug mb-6">
          Tetap bugar, <br />
          raih hadiah, <br />
          dan transformasikan kesehatanmu!
        </h2>

        {/* Image */}
        <div className="rounded-xl overflow-hidden mb-6">
          <img src={mainImg} alt="Healthy food" className="w-full h-auto" />
        </div>

        {/* Subtitle */}
        <p className="text-xl mb-6">
          Pelatih nutrisi di Telegram: makan lebih cerdas, bangun kebiasaan sehat,
          raih hasil nyata.
        </p>

        {/* CTA Button */}
        <a href={offerLink}>
          <button className="bg-[#FF7E05] text-white font-semibold shadow-[0_4px_6px_rgba(0,0,0,0.3)] rounded-full px-10 py-2 mb-8">
            Langganan <br /> Rp99.000!
          </button>
        </a>

        {/* Features */}
        <ul className="space-y-4 text-left">
          <li className="flex items-center gap-2">
            <img src={check} alt="check" />
            <span>Pahami apa yang tubuhmu butuhkan</span>
          </li>
          <li className="flex items-center gap-2">
            <img src={check} alt="check" />
            <span>Capai tujuan kesehatan dan kebugaranmu</span>
          </li>
          <li className="flex items-center gap-2">
            <img src={check} alt="check" />
            <span>Berbagi & dapatkan reward</span>
          </li>
          <li className="flex items-center gap-2">
            <img src={check} alt="check" />
            <span>Resep cepat, sehat, dan lezat</span>
          </li>
          <li className="flex items-center gap-2">
            <img src={check} alt="check" />
            <span>
              Bangun kebiasaan yang tetap terjaga meski memiliki aktivitas yang
              tinggi.
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
};
