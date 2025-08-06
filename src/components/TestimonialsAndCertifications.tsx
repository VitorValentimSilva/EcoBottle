import Certifications from "./Certifications";
import SectionTitle from "./SectionTitle";
import { motion, AnimatePresence } from "framer-motion";
import Testimonial, { type TestimonialProps } from "./Testimonial";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import { useEffect, useState } from "react";

export default function TestimonialsAndCertifications() {
  const testimonials: TestimonialProps[] = [
    {
      rating: 5,
      content:
        "O EcoBottle mudou completamente minha perspectiva sobre produtos sustentáveis. A qualidade é excepcional e saber que estou ajudando o meio ambiente torna cada gole mais especial.",
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      name: "Maria Silva",
      role: "Ambientalista",
    },
    {
      rating: 4,
      content:
        "Uso o EcoBottle há 6 meses e posso garantir: é o produto mais durável que já tive. Meus seguidores sempre perguntam onde comprar!",
      avatar:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      name: "João Santos",
      role: "Influencer Sustentável",
    },
    {
      rating: 5,
      content:
        "Como cientista, fico impressionada com a tecnologia por trás do EcoBottle. É uma solução real para o problema do plástico nos oceanos.",
      avatar:
        "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      name: "Ana Costa",
      role: "Bióloga Marinha",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Certificações e Reconhecimentos" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <Certifications
              delay={1}
              logo="🤝"
              name="Fair Trade"
              description="Comércio justo certificado"
            />

            <Certifications
              delay={2}
              logo="🌍"
              name="ISO 14001"
              description="Gestão ambiental internacional"
            />

            <Certifications
              delay={3}
              logo="🌊"
              name="Ocean Positive"
              description="Impacto positivo nos oceanos"
            />

            <Certifications
              delay={4}
              logo="🌱"
              name="Carbon Neutral"
              description="Neutralidade de carbono"
            />
          </div>
        </motion.div>

        <SectionTitle title="O que nossos clientes dizem" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {testimonials.map((t, idx) =>
                idx === currentTestimonial ? (
                  <Testimonial
                    key={idx}
                    rating={t.rating}
                    content={t.content}
                    avatar={t.avatar}
                    name={t.name}
                    role={t.role}
                  />
                ) : null
              )}
            </AnimatePresence>

            <div className="flex justify-center items-center space-x-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 hover:border-green-300"
                aria-label="Depoimento anterior"
              >
                <HiOutlineChevronLeft className="w-6 h-6 text-green-600" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-green-500"
                        : "bg-green-200"
                    }`}
                    aria-label={`Ir para depoimento ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 hover:border-green-300"
                aria-label="Próximo depoimento"
              >
                <HiOutlineChevronRight className="w-6 h-6 text-green-600" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
