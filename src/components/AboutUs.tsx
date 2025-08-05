import type { ReactElement } from "react";
import { motion } from "motion/react";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "./Button";
import InformationAboutUs from "./InformationAboutUs";
import ParticleBackground from "./ParticleBackground";

interface AboutUsProps {
  icon: ReactElement;
  title: string;
  brandMame: string;
  subTitle: string;
  description: string;
}

export default function AboutUs({
  icon,
  title,
  brandMame,
  subTitle,
  description,
}: AboutUsProps) {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center overflow-hidden">
      <ParticleBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl">
              {icon}
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
          >
            {title}{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              {brandMame}
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-700 font-medium"
          >
            {subTitle}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="group relative overflow-hidden"
              ariaLabel="Comprar EcoBottle"
            >
              <span className="flex items-center space-x-2">
                <span>Quero o Meu</span>
                <FaArrowRightLong className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              ariaLabel="Saber mais sobre EcoBottle"
            >
              Saber Mais
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-green-200"
          >
            <InformationAboutUs mainText="100%" text="Material Reciclado" />

            <InformationAboutUs
              mainText="5 Anos"
              text="Garantia de Durabilidade"
            />

            <InformationAboutUs mainText="10kg" text="Plástico Evitado" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-green-400 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
