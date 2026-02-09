import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

// Ikon Hamburger
const MenuIcon = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={`w-6 h-6 ${color}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

// Ikon Close
const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18 18 6M6 6l12 12"
    />
  </svg>
);

const Header = () => {
  const menuItems = [
    { name: "Beranda", path: "/" },
    { name: "Terbaru", path: "/terbaru" },
    { name: "Hiburan", path: "/hiburan" },
    { name: "Gaya Hidup", path: "/gaya-hidup" },
    { name: "Olahraga", path: "/olahraga" },
    { name: "Nasional", path: "/nasional" },
    { name: "Internasional", path: "/internasional" },
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* HEADER */}
      <header
        className={`sticky top-0 w-full py-6 px-6 sm:px-10 flex items-center justify-between z-30 transition-all duration-300 ${
          isScrolled
            ? "bg-blue-600 shadow-lg"
            : "bg-white shadow-sm"
        }`}
      >
        {/* Logo */}
        <Link to="/" onClick={closeSidebar}>
          <img
            src={Logo}
            alt="Logo"
            className={`h-8 w-auto transition-all duration-300 ${
              isScrolled ? "brightness-0 invert" : ""
            }`}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `font-semibold transition-colors duration-200 ${
                  isScrolled
                    ? isActive
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                    : isActive
                    ? "text-blue-600"
                    : "text-gray-500 hover:text-blue-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden"
          onClick={toggleSidebar}
          aria-label="Toggle menu"
        >
          <MenuIcon
            color={isScrolled ? "text-white" : "text-gray-800"}
          />
        </button>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
          isSidebarOpen
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeSidebar}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isSidebarOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6">
          <button onClick={closeSidebar}>
            <CloseIcon />
          </button>
        </div>

        <nav className="flex flex-col space-y-6 px-8">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={closeSidebar}
              className={({ isActive }) =>
                `text-xl font-semibold transition-colors duration-200 ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-500 hover:text-blue-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
