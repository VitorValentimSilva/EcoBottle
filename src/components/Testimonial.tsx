import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa6";

export interface TestimonialProps {
  rating: number;
  content: string;
  avatar: string;
  name: string;
  role: string;
}

export default function Testimonial({
  rating,
  content,
  avatar,
  name,
  role,
}: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 shadow-lg border border-green-100"
    >
      <div className="flex justify-center mb-6">
        {" "}
        {Array.from({ length: rating }, (_, i) => (
          <FaStar
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
          />
        ))}
      </div>

      <blockquote className="text-xl md:text-2xl text-gray-700 font-medium mb-8 leading-relaxed">
        "{content}"
      </blockquote>

      <div className="flex items-center justify-center space-x-4">
        <img
          src={avatar}
          alt={name}
          className="w-16 h-16 rounded-full object-cover shadow-lg"
        />
        <div className="text-left">
          <div className="font-semibold text-gray-900 text-lg">{name}</div>
          <div className="text-green-600 font-medium">{role}</div>
        </div>
      </div>
    </motion.div>
  );
}
