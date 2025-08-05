import { motion } from "framer-motion";
import type { ReactElement } from "react";
import { CiHeart, CiMail } from "react-icons/ci";
import { FiFacebook, FiMapPin, FiTwitter } from "react-icons/fi";
import { PiPhoneLight } from "react-icons/pi";
import Contact from "./Contact";
import FooterPage from "./FooterPage";
import { FaInstagram } from "react-icons/fa6";
import SocialNetwork from "./SocialNetwork";

interface FooterProps {
  icon: ReactElement;
  brandMame: string;
  description: string;
  footerText: string;
  footerSubText: string;
}

export default function Footer({
  icon,
  brandMame,
  description,
  footerText,
  footerSubText,
}: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center">
                {icon}
              </div>
              <span className="text-2xl font-bold">{brandMame}</span>
            </div>

            <p className="text-gray-400 leading-relaxed">{description}</p>

            <div className="space-y-2">
              <Contact
                icon={<CiMail className="w-5 h-5" />}
                text="contato@ecobottle.com.br"
              />

              <Contact
                icon={<PiPhoneLight className="w-5 h-5" />}
                text="(18) 9999-8888"
              />

              <Contact
                icon={<FiMapPin className="w-5 h-5" />}
                text="Presidente Prudente, SP - Brasil"
              />
            </div>
          </motion.div>

          <FooterPage
            delay={0.1}
            title="Produtos"
            page={[
              { text: "EcoBottle Original", href: "/ecoBottle-original" },
              { text: "EcoBottle Sport", href: "/ecoBottle-sport" },
              { text: "EcoBottle Kids", href: "/ecoBottle-kids" },
              { text: "Acessórios", href: "/acessorios" },
              { text: "Kits Especiais", href: "/kits-especiais" },
            ]}
          />

          <FooterPage
            delay={0.2}
            title="Empresa"
            page={[
              { text: "Sobre Nós", href: "/sobre-nos" },
              { text: "Nossa História", href: "/nossa-historia" },
              { text: "Impacto Ambiental", href: "/impacto-ambiental" },
              { text: "Certificações", href: "/certificacoes" },
              { text: "Trabalhe Conosco", href: "/trabalhe-conosco" },
            ]}
          />

          <FooterPage
            delay={0.3}
            title="Suporte"
            page={[
              { text: "Central de Ajuda", href: "/central-de-ajuda" },
              { text: "Política de Troca", href: "/politica-de-troca" },
              { text: "Garantia", href: "/garantia" },
              { text: "Frete e Entrega", href: "/frete-e-entrega" },
              { text: "Contato", href: "/contato" },
            ]}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-gray-800 pt-8 mt-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-2xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
                aria-label="Doar para ONG parceira"
              >
                <CiHeart className="w-5 h-5" />
                <span>Apoie nossa ONG Parceira</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors text-sm underline"
              >
                Política Ambiental
              </a>
            </div>

            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Siga-nos:</span>
              <div className="flex space-x-4">
                <SocialNetwork
                  link="https://www.instagram.com"
                  icon={<FaInstagram className="w-6 h-6" />}
                />

                <SocialNetwork
                  link="https://www.facebook.com"
                  icon={<FiFacebook className="w-6 h-6" />}
                />

                <SocialNetwork
                  link="https://www.x.com"
                  icon={<FiTwitter className="w-6 h-6" />}
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-gray-800 pt-8 mt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            {footerText}
            <a href="#" className="hover:text-green-400 transition-colors ml-1">
              Termos de Uso
            </a>{" "}
            |
            <a href="#" className="hover:text-green-400 transition-colors ml-1">
              Política de Privacidade
            </a>
          </p>
          <p className="text-gray-500 text-xs mt-2">{footerSubText}</p>
        </motion.div>
      </div>
    </footer>
  );
}
