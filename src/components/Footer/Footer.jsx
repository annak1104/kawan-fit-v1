import instagram from "../../assets/instagram.svg";
import mainLogo from "../../assets/logo-small.svg";
import dana from "../../assets/image 27.svg";
import link from "../../assets/image 28.svg";
import oris from "../../assets/image 29.svg";
import pay from "../../assets/image 25.svg";
import docu from "../../assets/image 26.svg";
import ovo from "../../assets/image 24.svg";
import telegram from "../../assets/telegram.svg";
import tiktok from "../../assets/tiktok.svg";
import { CreditCardIcon } from "../../icons/CreditCardIcon.jsx";
import { LockIcon } from "../../icons/Lock.jsx";
import { MastercardIcon } from "../../icons/MastercardIcon.jsx";
import { PayPalIcon } from "../../icons/PayPalIcon.jsx";
import { ShieldIcon } from "../../icons/ShieldIcon.jsx";
import { VisaIcon } from "../../icons/VisaIcon.jsx";

const Footer = () => {
  return (
    <div className="min-w-[375px] flex flex-col items-center bg-[#f5f2eb]">
      {/* Соцмережі */}
      <div className="w-full flex flex-col rounded items-center py-10 bg-[#F3F0E7]">
        <h2 className="text-[#493F3B] text-2xl font-medium mb-6">
          Ikuti kami
        </h2>
        <div className="flex flex-col gap-6 items-center">
          <a href="https://www.instagram.com/kawanfit_indonesia/"><img src={instagram} alt="instagram" className="w-14 h-14" /></a>
          <a href="https://www.tiktok.com/@kawanfit?_t=ZN-8zYI3OCBStO&_r=1"><img src={tiktok} alt="tiktok" className="w-14 h-14" /></a>
          <a href="https://t.me/+Str_7Isa2oMzYmY0"><img src={telegram} alt="telegram" className="w-14 h-14" /></a>
        </div>
      </div>

      {/* Логотип і платіжки */}
      <div className="bg-white w-full flex flex-col items-center py-10">
        <img src={mainLogo} alt="logo" className="w-60 h-16" />
        <div className="flex gap-5"> 
        <img src={dana} alt="dana" className="h-8 mt-8" />
        <img src={link} alt="link" className="h-8 mt-8" />
        <img src={oris} alt="oris" className="h-8 mt-8" />
        </div>
        <div className="flex gap-5"> 
        <img src={pay} alt="pay" className="h-8 mt-8" />
        <img src={docu} alt="docu" className="h-8 mt-8" />
        <img src={ovo} alt="ovo" className="h-8 mt-8" />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
          <VisaIcon />
          <MastercardIcon />
          <PayPalIcon />
        </div>

        <div className="flex justify-center items-center gap-8 mt-8">
          <CreditCardIcon />
          <LockIcon />
          <ShieldIcon />
        </div>
      </div>

      {/* Нижній блок */}
      <div className="w-full border-t border-black text-center py-6 bg-white">
        <a href="https://www.fitkawan.id/terms.html"><p className="text-base font-medium mb-6">Syarat dan ketentuan</p></a>
        <p className="text-sm text-[#333]">
          2025 KawanFit. <br /> Seluruh hak cipta dilindungi.
        </p>
      </div>
    </div>
  );
};

export default Footer;
