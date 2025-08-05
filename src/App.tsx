import { LuLeaf } from "react-icons/lu";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <main>
        <Home />
      </main>

      <Footer
        icon={<LuLeaf className="w-6 h-6 text-white" />}
        brandMame="EcoBottle"
        description="Revolucionando o futuro sustentável, uma garrafa por vez.
              Transformamos resíduos oceânicos em produtos inovadores e
              duráveis."
        footerText="© 2025 EcoBottle. Todos os direitos reservados."
        footerSubText="Feito com 💚 para um futuro mais sustentável"
      />
    </>
  );
}

export default App;
