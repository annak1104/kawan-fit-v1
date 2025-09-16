import before1 from "../../assets/cooking-before-3.webp";
import after1 from "../../assets/cooking-after-3.webp";
import before2 from "../../assets/fatigue-before-3.webp";
import after2 from "../../assets/fatigue-after-3.webp";
import before3 from "../../assets/food-before-3.webp";
import after3 from "../../assets/food-after-3.webp";

import ImageSlider from "./ImageSlider";

export default function SliderPage() {
  return (
    <div className="bg-[#4A3C37] min-h-screen">
      <ImageSlider
        title="Masak cepat "
        subtitle="dan mudah"
        slides={[before1, after1]}
      />
      <ImageSlider
        title="Dengan energi"
        subtitle="lebih"
        slides={[before2, after2]}
      />
      <ImageSlider
        title="Kebiasaan yang"
        subtitle="lebih sehat!"
        slides={[before3, after3]}
      />
    </div>
  );
}
