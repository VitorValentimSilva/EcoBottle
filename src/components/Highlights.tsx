import { motion } from "framer-motion";
import type { ReactElement } from "react";

interface HighlightsProps {
  delay: number;
  icon: ReactElement;
  stat: string;
  title: string;
  description: string;
}

export default function Highlights({
  delay,
  icon,
  stat,
  title,
  description,
}: HighlightsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: delay }}
      whileHover={{ y: -10 }}
      className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-100"
    >
      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-6 shadow-lg">
        {icon}
      </div>

      <div className="text-4xl font-bold text-green-600 mb-2">{stat}</div>

      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>

      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}
