interface InformationAboutUsProps {
  mainText: string;
  text: string;
}

export default function InformationAboutUs({
  mainText,
  text,
}: InformationAboutUsProps) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-green-600">
        {mainText}
      </div>
      <div className="text-gray-600 mt-2">{text}</div>
    </div>
  );
}
