import React from "react";
import Link from "next/link";

const linkCategories = [
  {
    title: "دوره‌ها",
    links: [
      { name: "خانه", href: "/" },
      { name: "دوره‌ها", href: "/courses" },
      { name: "بلاگ", href: "/blog" },
    ],
  },
  {
    title: "پشتیبانی",
    links: [
      { name: "سوالات متداول", href: "/faq" },
      { name: "پشتیبانی", href: "/support" },
      { name: "تماس با ما", href: "/contact" },
    ],
  },
  {
    title: "قوانین و سیاست‌ها",
    links: [
      { name: "سیاست حفظ حریم خصوصی", href: "/privacy" },
      { name: "شرایط و قوانین", href: "/terms" },
    ],
  },
];

function FooterLinks() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {linkCategories.map((category) => (
        <div key={category.title} className="flex flex-col gap-2">
          <h4 className="font-semibold mb-2">{category.title}</h4>
          {category.links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

export default FooterLinks;
