import React, { useState } from 'react';

const HeroSection = () => {
  // State untuk melacak slide mana yang aktif
  const [activeDot, setActiveDot] = useState(1);

  return (
    <section className="relative w-full px-6 py-10 sm:px-10">
      {/* Container Utama dengan Background Hijau Tosca */}
      <div className="relative w-full max-w-7xl mx-auto bg-[#00C194] rounded-[32px] overflow-hidden min-h-[350px] flex items-center p-8 md:p-16">
        
        {/* Dekorasi Garis Putus-putus (Sederhana) */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 200C150 100 300 100 400 200C500 300 650 300 750 200" stroke="white" strokeWidth="2" strokeDasharray="8 8"/>
          </svg>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
          
          {/* Sisi Kiri: Teks */}
          <div className="text-white space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Petualangan <br /> Edukatif bersama <br /> Malang Mbois <br /> City Tour!
            </h1>
            <p className="text-blue-50 text-sm md:text-base opacity-90 max-w-sm">
              Petualangan Edukatif bersama Malang Mbois City Tour!
            </p>
          </div>

          {/* Sisi Kanan: Foto Bertumpuk (Polaroid Style) */}
          <div className="relative flex justify-center items-center h-[250px]">
            {/* Foto 1 - Museum Brawijaya */}
            <div className="absolute left-0 bottom-4 bg-white p-2 rounded-lg shadow-xl transform -rotate-12 w-32 md:w-44">
              <img src="https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=300" alt="Museum" className="rounded-sm mb-2" />
              <p className="text-[10px] text-gray-700 font-bold text-center">Museum Brawijaya</p>
            </div>

            {/* Foto 2 - Kayutangan (Tengah) */}
            <div className="absolute z-20 bg-white p-2 rounded-lg shadow-2xl transform rotate-3 w-36 md:w-48">
              <img src="https://images.unsplash.com/photo-1480714378408-67cf0d13ad1b?auto=format&fit=crop&w=300" alt="Kayutangan" className="rounded-sm mb-2" />
              <p className="text-[10px] text-gray-700 font-bold text-center">Kayutangan</p>
            </div>

            {/* Foto 3 - Kebun Binatang */}
            <div className="absolute right-0 top-4 bg-white p-2 rounded-lg shadow-xl transform rotate-12 w-32 md:w-44">
              <img src="https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=300" alt="Zoo" className="rounded-sm mb-2" />
              <p className="text-[10px] text-gray-700 font-bold text-center">Kebun Binatang</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Dot Page Indicators --- */}
      <div className="flex justify-center items-center space-x-2 mt-6">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => setActiveDot(index)}
            className={`transition-all duration-300 rounded-full h-2 ${
              activeDot === index 
                ? "w-6 bg-blue-600" // Dot Aktif: Lebih panjang dan berwarna biru
                : "w-2 bg-gray-300"  // Dot Tidak Aktif: Bulat kecil abu-abu
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;