import { motion } from "framer-motion";
import { useState, type CSSProperties, type ReactElement } from "react";

interface TimelineStepProps {
  id: number;
  icon: ReactElement;
  title: string;
  description: string;
  detail: string;
}

export default function TimelineStep({
  id,
  icon,
  title,
  description,
  detail,
}: TimelineStepProps) {
  const [flipped, setFlipped] = useState(false);
  const isEven = id % 2 === 0;

  const perspectiveStyle: CSSProperties = { perspective: "1000px" };
  const innerStyle: CSSProperties = {
    transformStyle: "preserve-3d",
    transition: "transform 0.7s",
    transform: flipped ? "rotateY(180deg)" : "none",
  };
  const faceStyle: CSSProperties = {
    backfaceVisibility: "hidden",
    position: "absolute",
    inset: 0,
  };
  const backFaceStyle: CSSProperties = {
    ...faceStyle,
    transform: "rotateY(180deg)",
  };

  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: id * 0.2 }}
      className={`relative flex items-center ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } flex-col md:space-x-8`}
    >
      <div
        className={`w-full md:w-5/12 ${
          isEven ? "md:text-right" : "md:text-left"
        } text-center mb-8 md:mb-0`}
      >
        <motion.div
          onClick={() => setFlipped((f) => !f)}
          className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-64 relative"
          style={perspectiveStyle}
          whileHover={{ scale: 1.02 }}
        >
          <div style={innerStyle} className="w-full h-full relative">
            <div
              style={faceStyle}
              className="flex flex-col items-center justify-center h-full space-y-4"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                {icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
              <p className="text-gray-600">{description}</p>
              <div className="text-sm text-green-600 font-medium">
                Clique para detalhes
              </div>
            </div>

            <div
              style={backFaceStyle}
              className="flex flex-col items-center justify-center h-full p-4"
            >
              <p className="text-gray-700 text-sm leading-relaxed text-center">
                {detail}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-4 border-green-500 rounded-full shadow-lg z-10 items-center justify-center">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
      </div>

      <div className="md:hidden w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg">
        {id}
      </div>

      <div className="hidden md:block w-5/12"></div>
    </motion.div>
  );
}
