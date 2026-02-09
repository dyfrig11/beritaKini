import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NewsCard from "./NewsCard";

const PopularNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        // Mengambil data dari API yang sama agar ID sinkron
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        
        // Kita ambil 3 data saja untuk bagian "Terpopuler"
        const popularData = response.data.slice(0, 3).map((item) => ({
          id: item.id,
          title: item.title,
          image: `https://picsum.photos/400/300?random=${item.id + 100}`, // Random seed berbeda agar gambar tidak sama dengan Recommendation
          category: "Terpopuler",
          date: "22 Jan 2024",
        }));
        
        setNews(popularData);
      } catch (error) {
        console.error("Gagal memuat berita populer", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPopular();
  }, []);

  if (loading) return <div className="text-center py-10">Memuat Berita Populer...</div>;

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-8 border-l-4 border-blue-600 pl-4">
        Berita Terpopuler
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {news.map((item) => (
          /* Bungkus dengan Link ke /detail/id */
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
    </section>
  );
};

export default PopularNews;