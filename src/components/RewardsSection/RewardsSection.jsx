import diet from "../../assets/diet.svg";
import goal from "../../assets/goal.svg";
import app1 from "../../assets/mobiles.webp";
import money from "../../assets/money.svg";
import partners from "../../assets/partners.svg";
import rewardsImg from "../../assets/rewards-img.webp";
import stopwatch from "../../assets/stopwatch.svg";
import { useOfferLink } from "../../hooks/useOfferLink.jsx";

export const RewardsSection = () => {
  const offerLink = useOfferLink();

  return (
    <div className="bg-white w-full min-w-[375px]">
      {/* Top Banner */}
      <section className="flex flex-col bg-white">
        <div className="flex flex-col">
          <div className="flex bg-[#493F3B]">
            {/* Left image */}
            <div className="w-1/2">
              <img
                src={rewardsImg}
                alt="Rewards promo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right text block */}
            <div className="w-1/2 relative bg-[#FF7E05] text-white p-4 flex flex-col">
              <h2 className="text-2xl font-bold mb-3 leading-snug">
                Dapatkan hadiah saat belajar!
              </h2>
              <p className="text-sm mb-4 leading-snug">
                Raih 25% untuk setiap teman yang bergabung lewat link kamu,
                langsung dibayarkan ke akunmu.
              </p>
              <a href={offerLink}>
                <button className="bg-[#454545] absolute top-61 left-[15%] text-white font-semibold rounded-full px-4 py-2 w-fit shadow-[0_4px_6px_rgba(0,0,0,0.3)]">
                  Langganan <br /> sekarang juga
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-[#493F3B] text-white px-6 py-10 text-center">
        <h3 className="text-[32px] font-bold mb-10">
          Apa yang ada di dalam KawanFit
        </h3>

        <ul className="space-y-8 text-left">
          <li className="flex items-start gap-14">
            <img src={diet} alt="diet-icon" className="w-[60px]" />
            <p className="text-base">
              Menu sehat 10 menit lengkap dengan makro yang tepat
            </p>
          </li>
          <li className="flex items-start gap-14">
            <img src={stopwatch} alt="stopwatch-icon" className="w-[60px]" />
            <p className="text-base">
              Pelajaran singkat sesuai dengan tujuanmu
            </p>
          </li>
          <li className="flex items-start gap-14">
            <img src={goal} alt="goal-icon" className="w-[60px]" />
            <p className="text-base">
              Rencana fleksibel untuk turun berat badan, tambah otot, atau
              tingkatkan energi
            </p>
          </li>
          <li className="flex items-start gap-14">
            <img src={money} alt="money-icon" className="w-[60px]" />
            <p className="text-base">
              Komisi 25% untuk setiap teman yang kamu ajak
            </p>
          </li>
          <li className="flex items-start gap-14">
            <img src={partners} alt="money-icon" className="w-[60px]" />
            <p className="text-base">
              Komunitas untuk berbagi tips & tambahan motivasi
            </p>
          </li>
        </ul>
      </section>

      {/* App screenshots */}
      <section className="bg-[#493F3B] px-6 py-10 flex flex-col gap-6 items-center">
        <img
          src={app1}
          alt="App screenshot 1"
          className="w-[250px] rounded-xl shadow-md"
        />
      </section>
    </div>
  );
};
