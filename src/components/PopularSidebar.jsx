const PopularSidebar = () => {
  return (
    <aside className="sticky top-24">
      <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3 mb-6">Berita Terpopuler</h2>
      <div className="space-y-6">
        {[1, 2, 3].map((num) => (
          <div key={num} className="flex gap-4 group cursor-pointer">
            <span className="text-2xl font-bold text-gray-300 group-hover:text-blue-600">{num}</span>
            <div>
              <img src="https://via.placeholder.com/150" className="w-full h-32 object-cover rounded-lg mb-2" alt="populer" />
              <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-blue-600 transition">
                Daftar 6 Lahan Tambang Jatah Ormas Agama, NU Dapat Bekas Grup Bakrie
              </h3>
              <p className="text-xs text-blue-600 mt-1">Politik • 22 Jan 2024</p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default PopularSidebar;