const RelatedNews = () => (
  <div className="mt-16">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3">Berita Terkait</h2>
      <button className="text-blue-600 border border-blue-600 px-4 py-1 rounded-md text-sm hover:bg-blue-50">Lihat Semua</button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="group cursor-pointer">
          <img src="https://via.placeholder.com/300x200" alt="related" className="w-full h-40 object-cover rounded-xl mb-3" />
          <h4 className="font-bold text-sm group-hover:text-blue-600 transition">Flypass Bonanza dan Heli Bell SOS Warnai Tupdik...</h4>
          <p className="text-xs text-blue-600 mt-2">Nasional • 22 Jan 2024</p>
        </div>
      ))}
    </div>
  </div>
);

export default RelatedNews;