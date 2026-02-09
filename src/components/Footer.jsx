import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo1.png";

import FaYoutube from "../assets/images/FaYoutube.png";
import FaInstagram from "../assets/images/FaInstagram.png";
import FaFacebook from "../assets/images/FaFacebook.png";
import SendButton from "../assets/images/sendButton.png";

const Footer = () => {
  const menuItems = [
    { name: "Beranda", path: "/" },
    { name: "Terbaru", path: "/terbaru" },
    { name: "Hiburan", path: "/hiburan" },
    { name: "Gaya Hidup", path: "/gaya-hidup" },
    { name: "Olahraga", path: "/olahraga" },
    { name: "Nasional", path: "/nasional" },
    { name: "Internasional", path: "/internasional" },
  ];

  return (
    <footer className="bg-slate-800 text-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={Logo} alt="Berita Kini Logo" className="h-10 w-auto" />
            <h2 className="text-lg font-semibold">Berita Kini</h2>
          </div>

          <p className="text-sm text-slate-400 mb-4">
            © 2023 Berita Kini. All Rights Reserved.
          </p>

          <p className="text-sm mb-2">Ikuti Kami</p>
          <div className="flex gap-4">
            <img src={FaYoutube} alt="YouTube" className="w-5 h-5 cursor-pointer hover:opacity-80 transition" />
            <img src={FaInstagram} alt="Instagram" className="w-5 h-5 cursor-pointer hover:opacity-80 transition" />
            <img src={FaFacebook} alt="Facebook" className="w-5 h-5 cursor-pointer hover:opacity-80 transition" />
          </div>
        </div>

        {/* Telusuri */}
        <div>
          <h3 className="font-semibold mb-4">Telusuri</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="hover:text-white transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Bantuan */}
        <div>
          <h3 className="font-semibold mb-4">Bantuan</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li className="hover:text-white cursor-pointer">Kontak Kami</li>
            <li className="hover:text-white cursor-pointer">Laporan Pembajakan</li>
            <li className="hover:text-white cursor-pointer">Kebijakan</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="font-semibold mb-4">
            Berlangganan Berita Terbaru
          </h3>
          <div className="bg-gray-200 rounded-2xl p-2 flex items-center border border-gray-300">
  <input
    type="email"
    placeholder="Masukan email"
    className="flex-1 bg-transparent px-4 py-3 text-gray-500 placeholder-gray-400 focus:outline-none text-lg"
  />
  <button
    type="button"
    className=" hover:bg-blue-700 transition w-14 h-14 rounded-xl flex items-center justify-center"
  >
    <img
      src={SendButton}
      alt="Send"
      className="w-15 h-15"
    />
  </button>
</div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
