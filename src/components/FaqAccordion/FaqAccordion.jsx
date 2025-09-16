import React, { useEffect, useRef, useState } from "react";

import { useOfferLink } from "../../hooks/useOfferLink.jsx";
import { CloseIcon } from "../../icons/CloseIcon.jsx";

const FAQS = [
  {
    q: "Apakah saya perlu install aplikasi?",
    a: "Tidak perlu! Semua bisa langsung dipakai di chat Telegram kamu.",
  },
  {
    q: "Bagaimana cara saya menghasilkan uang?",
    a: "Kamu akan mendapat link referral. Setiap kali teman membeli kursus, kamu dapat komisi 25%.",
  },
  {
    q: "Apakah KawanFit cocok untuk pemula?",
    a: "Tentu saja! Setiap kursus dirancang mulai dari dasar hingga strategi lanjutan, jadi baik pemula maupun yang sudah berpengalaman bisa mengikuti tanpa kesulitan.",
  },
  {
    q: "Bagaimana kalau saya punya pantangan makanan atau kondisi kesehatan khusus?",
    a: "Kursus kami menyediakan panduan dan resep fleksibel dengan pilihan substitusi untuk berbagai jenis diet (vegan, bebas gluten, dll.). Namun, selalu konsultasikan dengan tenaga medis untuk saran yang sesuai kebutuhan pribadi.",
  },
];

function AccordionItem({ index, item, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const [maxH, setMaxH] = useState("0px");

  useEffect(() => {
    const el = contentRef.current;
    if (el) {
      setMaxH(isOpen ? `${el.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  useEffect(() => {
    function handleResize() {
      const el = contentRef.current;
      if (el && isOpen) {
        setMaxH(`${el.scrollHeight}px`);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <article className="w-full">
      <div
        className="bg-[#FF7E05] overflow-hidden transition-all duration-300"
        style={{
          borderRadius: "1rem",
          transition: "border-radius 300ms ease",
        }}
      >
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={`faq-panel-${index}`}
          onClick={() => onToggle(index)}
          className="w-full flex items-center justify-between
            px-6 py-4 md:px-8 md:py-5
            text-left
            hover:shadow-lg transition-shadow duration-200
            focus:outline-none"
        >
          <h3
            className={`text-lg md:text-xl font-medium transition-colors duration-200 ${
              isOpen ? "text-[#493F3B]" : "text-white"
            }`}
          >
            {item.q}
          </h3>

          <span
            className="ml-4 flex-shrink-0 text-white/70 bg-transparent cursor-pointer rounded-full p-2"
            aria-hidden
          >
            <CloseIcon open={isOpen} />
          </span>
        </button>

        <div
          id={`faq-panel-${index}`}
          ref={contentRef}
          className="overflow-hidden transition-all duration-300"
          style={{ maxHeight: maxH }}
        >
          <div className="px-6 py-4 text-white">
            <p className="text-sm leading-relaxed">{item.a}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);
  const offerLink = useOfferLink();

  function toggle(index) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section
      aria-labelledby="faq-title"
      className="relative bg-[#493F3B] text-white py-16 md:py-20"
    >
      <img
        src="/faqBackground.jpg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-20"
        style={{ filter: "blur(2px) brightness(0.35)" }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <h1
            id="faq-title"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold"
          >
            Pertanyaan yang sering diajukan
          </h1>
        </header>

        <div className="space-y-6">
          {FAQS.map((item, idx) => (
            <AccordionItem
              key={idx}
              index={idx}
              item={item}
              isOpen={openIndex === idx}
              onToggle={toggle}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-base md:text-lg font-semibold">
            Masih ada pertanyaan?
          </h2>
          <p className="mt-3 text-sm m-auto w-[320px] md:w-[380px] md:text-base text-white">
            Kami siap membantu Anda menjelaskan segala pertanyaan.
            <span className="block text-center">
              Hubungi kami.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
