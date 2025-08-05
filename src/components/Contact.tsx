import type { ReactElement } from "react";

interface ContactProps {
  icon: ReactElement;
  text: string;
}

export default function Contact({ icon, text }: ContactProps) {
  return (
    <div className="flex items-center space-x-3 text-gray-400">
      {icon}
      <span>{text}</span>
    </div>
  );
}
