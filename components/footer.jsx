import React from "react";
import { Mail, Phone, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 text-gray-300">
      <div className="container mx-auto text-center space-y-4">
        <p className="text-lg flex items-center justify-center gap-1">
          Made with <Heart className="text-red-500" /> by Yash
        </p>
        <div className="flex items-center justify-center space-x-6">
          <a
            href="mailto:your-email@example.com"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <Mail /> yash99gautam@gmail.com
          </a>
          <a
            href="tel:+1234567890"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <Phone /> +91 9911497974
          </a>
        </div>
        <p className="text-sm opacity-70">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
