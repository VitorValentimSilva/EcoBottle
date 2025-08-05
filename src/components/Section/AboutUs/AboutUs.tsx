import type { ReactElement } from "react";

interface AboutUsProps {
  icon: ReactElement;
  title: string;
  subTitle: string;
  description: string;
}

export default function AboutUs({
  icon,
  title,
  subTitle,
  description,
}: AboutUsProps) {
  return (
    <section>
      <div>{icon}</div>

      <div>
        <h1>{title}</h1>

        <h2>{subTitle}</h2>

        <p>{description}</p>
      </div>

      <div>
        <button>Quero o Meu </button>

        <button>Saber Mais</button>
      </div>

      <div>
       
      </div>
    </section>
  );
}
