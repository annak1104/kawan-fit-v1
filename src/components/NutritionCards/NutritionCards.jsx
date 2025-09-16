import checkIcon from "../../assets/checkmark.svg"; 
import img1 from "../../assets/weight-loss.webp";
import img2 from "../../assets/muscle.webp";
import img3 from "../../assets/energy.webp";

const cards = [
  {
    id: "01",
    title: "Menurunkan berat badan secara sehat dan berkelanjutan",
    points: [
      "Kurangi kalori dengan resep cepat, lezat, dan sesuai tipe tubuhmu.",
      "Pahami bagaimana keseimbangan energi dan metabolisme memengaruhi penurunan berat badan.",
      "Gunakan teknik mindful eating untuk mengendalikan craving, menghindari emotional eating, dan menikmati makanan tanpa rasa bersalah.",
    ],
    img: img1,
  },
  {
    id: "02",
    title: "Bangun otot dan kekuatan dengan nutrisi yang tepat",
    points: [
      "Pahami cara menyeimbangkan protein, karbohidrat, dan lemak untuk membangun otot",
      "Resep yang memberi energi untuk latihanmu dan mempercepat pemulihan",
      "Gunakan suplemen yang aman dan efektif untuk mendukung tujuanmu",
    ],
    img: img2,
  },
  {
    id: "03",
    title: "Tingkatkan energi, fokus, dan kesehatan dengan nutrisi yang tepat",
    points: [
      "Bangun kebiasaan makan berkelanjutan yang meningkatkan energi, imunitas, dan kesejahteraan secara keseluruhan",
      "Rencanakan dan siapkan makanan sehat dan lezat bahkan di hari-hari sibuk",
      "Pahami saran nutrisi dan buat keputusan lebih cerdas setiap hari",
    ],
    img: img3,
  },
];

export const NutritionCards = () => {
  return (
    <div className="bg-[#493F3B] w-full min-w-[375px] px-4 py-8 flex flex-col gap-6">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-gradient-to-b from-[#FF7E05] from-100% via-[#FB8C00] via-76% to-[#FB8C00] to-46% rounded-3xl overflow-hidden text-white shadow-md"
        >
          <div className="p-5">
            <p className="text-sm font-medium mb-2">{card.id}</p>
            <h2 className="text-xl font-bold mb-4 leading-snug">
              {card.title}
            </h2>
            <ul className="space-y-3">
              {card.points.map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <img src={checkIcon} alt="check" className="w-5 h-5 mt-1" />
                  <span className="text-sm leading-snug">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="px-5 pb-5">
            <img
              src={card.img}
              alt={card.title}
              className="w-full rounded-xl object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
