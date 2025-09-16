import React from "react";

const Testimonials = () => {
  return (
    <div className="min-w-[375px] bg-[#493F3B] flex flex-col items-center px-4 py-6">
      {/* Заголовок */}
      <h2 className="text-white text-center text-2xl font-semibold mb-6">
        Kata mereka yang <br /> sudah coba
      </h2>

      {/* Блок Rina */}
      <div className="bg-white rounded-4xl p-6 mb-6 w-full h-[370px]">
        <h3 className="text-[#FF7E05] text-[32px] text-center font-medium mb-3">
          Rina, 27
        </h3>
        <p className="text-[#333333] text-base leading-relaxed">
          Dulu saya pikir nggak punya waktu atau uang buat masak makanan sehat.
          Dengan Fitcoach, saya bisa masak menu bergizi hanya dalam 10 menit.
          Badan terasa lebih bugar, dan biaya kursus saya bahkan tertutup hanya
          dengan berbagi ke teman-teman. Benar-benar worth it!
        </p>
      </div>

      {/* Блок Sari */}
      <div className="bg-white rounded-4xl p-6 mb-6 w-full h-[370px]">
        <h3 className="text-[#FF7E05] text-[32px] text-center font-medium mb-3">
          Sari, 24
        </h3>
        <p className="text-[#333333] text-base leading-relaxed">
          Dulu saya selalu ngemil tiap kali bosan dan berat badan terus naik.
          Setelah ikut Fitcoach, saya belajar mengendalikan craving dan menyiapkan
          makanan sehat sendiri. Sekarang nafsu makan lebih terkontrol, badan
          terasa lebih ringan, dan yang paling seru, teman-teman saya juga ikutan,
          jadi kita bareng-bareng menjalani ini!
        </p>
      </div>

      {/* Блок Dimas */}
      <div className="bg-white rounded-4xl p-6 mb-6 w-full h-[370px]">
        <h3 className="text-[#FF7E05] text-[32px] text-center font-medium mb-3">
          Dimas, 30
        </h3>
        <p className="text-[#333333] text-base leading-relaxed">
          Yang paling saya suka dari Fitcoach adalah kesederhanaannya. Nggak perlu
          pusing hitung kalori, cukup ikuti panduan. Saya jadi lebih percaya diri,
          dan keluarga saya juga ikut merasakan manfaatnya karena saya masak lebih
          sehat di rumah.
        </p>
      </div>

      {/* Нижній текст */}
      <p className="text-xs text-center text-[#D9D9D9] px-4">
        Pernyataan hukum: Hasil dapat bervariasi tergantung pada usaha masing-masing
        dan faktor lainnya.
      </p>
      <h2 className="text-white text-center text-3xl font-semibold mt-14 mb-6">
        Sekarang giliran <br />kamu!
      </h2>
      <a href="{offer}">
        <button className="bg-orange-500 text-white font-semibold rounded-full px-8 py-3">
          Langganan <br /> sekarang juga
        </button>
      </a>
    </div>
  );
};

export default Testimonials;
