import { motion } from "framer-motion";

interface FooterPageProps {
  delay: number;
  title: string;
  page: Array<{
    text: string;
    href: string;
  }>;
}

export default function FooterPage({ delay, title, page }: FooterPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: delay }}
      className="space-y-6"
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <ul className="space-y-3">
        {page.map((item, key) => (
          <li key={key}>
            <a
              href={item.href}
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
