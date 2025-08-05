interface InformationAboutUsProps {
  mainText: string;
  text: string;
}

export default function InformationAboutUs({
  mainText,
  text,
}: InformationAboutUsProps) {
  return (
    <div>
      <p>{mainText}</p>

      <p>{text}</p>
    </div>
  );
}
