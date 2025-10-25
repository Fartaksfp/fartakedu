import React from "react";
import FooterLinks from "./FooterLinks";
import FooterSocials from "./FooterSocials";
import Logo from "../shared/Logo";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="w-full mx-auto flex flex-col md:flex-row items-center sm:justify-around gap-8">
        <Logo width="200px" inFooter={true} />
        <FooterLinks />
        <FooterSocials />
      </div>

      <div className="text-center text-sm text-gray-400 mt-8">
        © {new Date().getFullYear()} نام سایت. همه حقوق محفوظ است.
      </div>
    </footer>
  );
}

export default Footer;
