import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import TableThead from "./TableThead";
import ComparisonData from "./ComparisonData";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function ImpactComparison() {
  const chartData = [
    { name: "Plástico Evitado (kg)", EcoBottle: 10, Convencional: 0 },
    { name: "CO2 Reduzido (kg)", EcoBottle: 15, Convencional: 0 },
    { name: "Vida Útil (anos)", EcoBottle: 5, Convencional: 2 },
    { name: "Taxa Reciclagem (%)", EcoBottle: 100, Convencional: 30 },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title=" EcoBottle vs Garrafas Convencionais"
          text="Veja por que o EcoBottle é a escolha mais inteligente e sustentável."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-green-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <TableThead
                  th={[
                    "Características",
                    "EcoBottle",
                    "Garrafa Convenciona",
                    "Impacto",
                  ]}
                />

                <tbody>
                  <ComparisonData
                    feature="Material"
                    delay={1}
                    ecobottle="100% Reciclado"
                    conventional="Plástico Virgem"
                    impact={90}
                  />

                  <ComparisonData
                    feature="Durabilidade"
                    delay={2}
                    ecobottle="5+ Anos"
                    conventional="1-2 Anos"
                    impact={75}
                  />

                  <ComparisonData
                    feature="Impacto Ambiental"
                    delay={3}
                    ecobottle="Positivo"
                    conventional="Negativo"
                    impact={95}
                  />

                  <ComparisonData
                    feature="Certificação"
                    delay={4}
                    ecobottle="ISO 14001"
                    conventional="Sem Certificação"
                    impact={80}
                  />

                  <ComparisonData
                    feature="Reciclabilidade"
                    delay={5}
                    ecobottle="100%"
                    conventional="30%"
                    impact={85}
                  />
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-green-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Impacto Ambiental Comparativo
          </h3>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 12 }}
                  stroke="#6b7280"
                />

                <YAxis stroke="#6b7280" />

                <Tooltip
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #d1fae5",
                    borderRadius: "12px",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  }}
                />

                <Bar
                  dataKey="EcoBottle"
                  fill="url(#greenGradient)"
                  radius={[8, 8, 0, 0]}
                  name="EcoBottle"
                />

                <Bar
                  dataKey="Convencional"
                  fill="#ef4444"
                  radius={[8, 8, 0, 0]}
                  name="Convencional"
                />

                <defs>
                  <linearGradient
                    id="greenGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#059669" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
