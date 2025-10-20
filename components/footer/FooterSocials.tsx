import React from "react";
import { Instagram, Twitter, Linkedin } from "lucide-react";

const socials = [
  { icon: Instagram, href: "https://instagram.com" },
  { icon: Twitter, href: "https://twitter.com" },
  { icon: Linkedin, href: "https://linkedin.com" },
];

function FooterSocials() {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-semibold mb-2">ما را دنبال کنید</h3>
      <div className="flex gap-4">
        {socials.map((social, i) => {
          const Icon = social.icon;
          return (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-gray-400 transition-colors"
            >
              <Icon size={20} />
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default FooterSocials;
