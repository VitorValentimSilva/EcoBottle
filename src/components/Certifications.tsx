import { motion } from "framer-motion";

interface CertificationsProps {
  delay: number;
  logo: string;
  name: string;
  description: string;
}

export default function Certifications({
  delay,
  logo,
  name,
  description,
}: CertificationsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      whileHover={{ scale: 1.1 }}
      className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100"
    >
      <div className="text-4xl mb-4">{logo}</div>
      <h3 className="font-semibold text-gray-900 mb-2">{name}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </motion.div>
  );
}
