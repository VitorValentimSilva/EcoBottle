import { LuLeaf } from "react-icons/lu";
import AboutUs from "../components/AboutUs";
import WhyChooseUs from "../components/WhyChooseUs";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <>
      <AboutUs
        icon={<LuLeaf className="w-10 h-10 text-white" />}
        title="Conheça o"
        brandMame="EcoBottle"
        subTitle="Garrafa 100% Reciclável"
        description="Revolucione sua forma de beber água com tecnologia sustentável. Cada EcoBottle evita 10kg de plástico no meio ambiente."
      />

      <WhyChooseUs />

      <FAQ />
    </>
  );
}
