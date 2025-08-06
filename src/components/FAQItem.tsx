import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";

interface FAQItemProps {
  id: number;
  delay: number;
  question: string;
  answer: string;
}

export default function FAQItem({ id, delay, question, answer }: FAQItemProps) {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay }}
      className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-2xl overflow-hidden shadow-lg"
    >
      <button
        onClick={() => toggleItem(id)}
        className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-green-75 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset"
        aria-expanded={openItem === id}
        aria-controls={`faq-${id}`}
      >
        <h3 className="text-lg font-semibold text-gray-900 pr-4">{question}</h3>
        <div className="flex-shrink-0">
          {openItem === id ? (
            <LuMinus className="w-6 h-6 text-green-600" />
          ) : (
            <LuPlus className="w-6 h-6 text-green-600" />
          )}
        </div>
      </button>

      <AnimatePresence>
        {openItem === id && (
          <motion.div
            id={`faq-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <p className="text-gray-700 leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
