import FAQItem from "./FAQItem";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";

export default function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Perguntas Frequentes"
          text="Tire suas dúvidas sobre o EcoBottle"
        />

        <div className="space-y-4">
          <FAQItem
            id={1}
            delay={0.1}
            question="O EcoBottle é realmente feito 100% de material reciclado?"
            answer="Sim! O EcoBottle é produzido inteiramente com plástico reciclado coletado dos oceanos e centros de reciclagem. Nosso processo patenteado garante que 100% do material seja proveniente de fontes recicladas, sem adição de plástico virgem."
          />

          <FAQItem
            id={2}
            delay={0.2}
            question="Qual é a garantia de durabilidade?"
            answer="Oferecemos 5 anos de garantia contra defeitos de fabricação. O EcoBottle é testado em laboratório para resistir a impactos, variações de temperatura e uso intensivo. Se houver qualquer problema dentro do período de garantia, substituímos gratuitamente."
          />

          <FAQItem
            id={3}
            delay={0.3}
            question="Como o EcoBottle ajuda o meio ambiente?"
            answer="Cada EcoBottle previne que aproximadamente 10kg de plástico cheguem aos oceanos. Além disso, nossa produção é carbono neutro, utilizamos embalagens biodegradáveis e mantemos parcerias com ONGs para limpeza oceânica."
          />

          <FAQItem
            id={4}
            delay={0.4}
            question="O sabor da água fica alterado?"
            answer="Não! Nosso processo de purificação molecular remove 99.9% dos contaminantes, garantindo que o EcoBottle seja seguro para contato alimentar. O material é certificado para não alterar sabor, odor ou cor da água."
          />

          <FAQItem
            id={5}
            delay={0.5}
            question="Posso lavar na lava-louças?"
            answer="Sim! O EcoBottle é totalmente seguro para lava-louças em temperaturas até 80°C. Recomendamos usar a prateleira superior e evitar detergentes muito abrasivos para manter a aparência original por mais tempo."
          />

          <FAQItem
            id={6}
            delay={0.6}
            question="Qual o prazo de entrega?"
            answer="A entrega é feita em até 3 dias úteis para todo o Brasil, com frete grátis. Utilizamos logística carbono neutro e embalagem 100% biodegradável. Você recebe o código de rastreamento por email após a confirmação do pedido."
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">Não encontrou sua resposta?</p>
          <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-2xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            Entre em Contato
          </button>
        </motion.div>
      </div>
    </section>
  );
}
