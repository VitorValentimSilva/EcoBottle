import { LuPackage, LuTrash2, LuTruck } from "react-icons/lu";
import SectionTitle from "./SectionTitle";
import TimelineStep from "./TimelineStep";
import { HiOutlineCog } from "react-icons/hi2";

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Como Funciona"
          text="Do resíduo ao produto final: conheça nosso processo sustentável de transformação."
        />

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-300 to-emerald-500 rounded-full"></div>

          <div className="space-y-12 md:space-y-24">
            <TimelineStep
              id={0}
              icon={<LuTrash2 className="w-8 h-8 text-white" />}
              title="Coleta de Plástico"
              description="Coletamos plástico dos oceanos e centros de reciclagem."
              detail="Parcerias com ONGs marinhas e cooperativas de reciclagem garantem a coleta responsável de materiais plásticos, removendo até 500 toneladas por mês dos oceanos."
            />

            <TimelineStep
              id={1}
              icon={<HiOutlineCog className="w-8 h-8 text-white" />}
              title="Processamento"
              description="Tecnologia avançada de purificação e moldagem."
              detail="Processo patenteado de limpeza molecular remove 99.9% dos contaminantes, transformando resíduos em material de qualidade alimentar certificado."
            />

            <TimelineStep
              id={2}
              icon={<LuPackage className="w-8 h-8 text-white" />}
              title="Moldagem"
              description="Criação das garrafas com design inovador."
              detail="Moldagem por injeção com controle de qualidade rigoroso. Cada garrafa passa por 12 testes de resistência e durabilidade antes da aprovação final."
            />

            <TimelineStep
              id={3}
              icon={<LuTruck className="w-8 h-8 text-white" />}
              title="Entrega"
              description="Embalagem sustentável e entrega carbono neutro."
              detail="Embalagem 100% biodegradável e logística com compensação total de carbono. Entrega em até 3 dias úteis com rastreamento em tempo real."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
