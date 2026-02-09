import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NewsCard from "./NewsCard";
import SearchIcon from "../assets/images/search.png";

const Recommendation = () => {
  const [news, setNews] = useState([]); // State untuk menampung data dari API
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Mengambil data dari API yang sama dengan DetailBerita.jsx
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        // Kita petakan agar strukturnya cocok dengan NewsCard
        const formattedData = response.data.map((item) => ({
          id: item.id,
          title: item.title,
          image: `https://picsum.photos/400/300?random=${item.id}`,
          category: "Nasional",
          date: "22 Jan 2024",
        }));
        setNews(formattedData);
      } catch (error) {
        console.error("Gagal memuat rekomendasi", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Filter Search
  const filteredData = news.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (loading) return <div className="text-center py-10">Memuat Rekomendasi...</div>;

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold border-l-4 border-blue-600 pl-4">
          Rekomendasi Untuk Anda
        </h2>

        {/* Search Bar */}
        <div className="relative w-72">
          <input
            type="text"
            placeholder="Cari disini..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full border rounded-lg py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <img
            src={SearchIcon}
            alt="search"
            className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 opacity-60"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {currentItems.map((item) => (
          <Link key={item.id} to={`/detail/${item.id}`} className="block group">
            <NewsCard
              image={item.image}
              title={item.title}
              category={item.category}
              date={item.date}
            />
          </Link>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-center mt-10">
        <p className="text-sm text-gray-500">
          Showing {filteredData.length === 0 ? 0 : startIndex + 1} to{" "}
          {Math.min(startIndex + itemsPerPage, filteredData.length)} of{" "}
          {filteredData.length} results
        </p>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`text-gray-500 ${currentPage === 1 ? "opacity-30" : "hover:text-black"}`}
          >
            ← Previous
          </button>

          {/* Menampilkan 5 halaman pertama saja agar tidak terlalu panjang */}
          {[...Array(Math.min(totalPages, 5))].map((_, index) => {
            const page = index + 1;
            return (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-1 rounded ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
              >
                {page}
              </button>
            );
          })}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`text-gray-500 ${currentPage === totalPages ? "opacity-30" : "hover:text-black"}`}
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Recommendation;