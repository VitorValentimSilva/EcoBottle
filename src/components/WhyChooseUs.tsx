import { FaRecycle } from "react-icons/fa6";
import Highlights from "./Highlights";
import SectionTitle from "./SectionTitle";
import { FiShield } from "react-icons/fi";
import { LuLeaf } from "react-icons/lu";

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Por que escolher o EcoBottle?"
          text="Tecnologia sustentável que combina responsabilidade ambiental com
            qualidade superior."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Highlights
            delay={0.2}
            icon={<FaRecycle className="w-8 h-8 text-white" />}
            stat="100%"
            title="100% Material Reciclado"
            description="Feita inteiramente com plástico recuperado dos oceanos e reciclado com tecnologia avançada."
          />

          <Highlights
            delay={0.4}
            icon={<FiShield className="w-8 h-8 text-white" />}
            stat="5 anos"
            title="5 Anos de Garantia"
            description="Durabilidade excepcional testada em laboratório. Resistente a impactos e variações de temperatura."
          />

          <Highlights
            delay={0.6}
            icon={<LuLeaf className="w-8 h-8 text-white" />}
            stat="10kg"
            title="10kg de Plástico Evitado"
            description="Cada EcoBottle previne o equivalente a 10kg de resíduos plásticos no meio ambiente."
          />
        </div>
      </div>
    </section>
  );
}
