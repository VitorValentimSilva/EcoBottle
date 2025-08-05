import type { ReactElement } from "react";

interface SocialNetworkProps {
  link: string;
  icon: ReactElement;
}

export default function SocialNetwork({ link, icon }: SocialNetworkProps) {
  return (
    <a
      href={link}
      target="_blank"
      className="text-gray-400 hover:text-green-400 transition-colors"
      aria-label="Instagram"
    >
      {icon}
    </a>
  );
}
