import { motion } from "framer-motion";
import { FaCheck, FaXmark } from "react-icons/fa6";

interface ComparisonDataProps {
  feature: string;
  delay: number;
  ecobottle: string;
  conventional: string;
  impact: number;
}

export default function ComparisonData({
  feature,
  delay,
  ecobottle,
  conventional,
  impact,
}: ComparisonDataProps) {
  return (
    <motion.tr
      key={feature}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      className="border-b border-green-50 hover:bg-green-25 transition-colors"
    >
      <td className="px-6 py-4 font-medium text-gray-900">{feature}</td>
      <td className="px-6 py-4 text-center">
        <div className="flex items-center justify-center space-x-2">
          <FaCheck className="w-5 h-5 text-green-500" />
          <span className="text-green-700 font-medium">{ecobottle}</span>
        </div>
      </td>
      <td className="px-6 py-4 text-center">
        <div className="flex items-center justify-center space-x-2">
          <FaXmark className="w-5 h-5 text-red-500" />
          <span className="text-red-600">{conventional}</span>
        </div>
      </td>
      <td className="px-6 py-4 text-center">
        <div className="flex items-center justify-center">
          <div className="w-20 bg-gray-200 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${impact}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: delay * 0.1 }}
              className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full"
            />
          </div>
          <span className="ml-2 text-sm text-gray-600">{impact}%</span>
        </div>
      </td>
    </motion.tr>
  );
}
