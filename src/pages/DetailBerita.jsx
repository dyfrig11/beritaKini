import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import CommentSection from "../components/CommentSection";
import RelatedNews from "../components/RelatedNews";
import PopularSidebar from "../components/PopularSidebar";

const DetailBerita = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        const foundNews = response.data.find(
          (item) => item.id === Number(id)
        );

        setNews(foundNews);
      } catch (error) {
        console.error("Gagal mengambil data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id]);

  if (loading)
    return <div className="text-center py-20">Memuat Berita...</div>;

  if (!news)
    return <div className="text-center py-20">Berita tidak ditemukan.</div>;

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        Beranda &gt; Nasional &gt; Detail
      </nav>

      <div className="flex flex-col lg:flex-row gap-12">

        {/* ================= LEFT CONTENT ================= */}
        <div className="lg:w-2/3">

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 capitalize">
            {news.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-blue-600 mb-6">
            <span className="font-semibold uppercase">Nasional</span>
            <span className="text-gray-400">22 Jan 2024</span>
          </div>

          <img
            src={`https://picsum.photos/900/500?random=${news.id}`}
            alt={news.title}
            className="w-full rounded-xl mb-6 object-cover shadow-md"
          />

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p>{news.body}</p>
            <p className="mt-4">
              Jakarta, CNN Indonesia -- {news.body}
            </p>
          </div>

          {/* Komentar */}
          <CommentSection />

          {/* Related News */}
          <RelatedNews />

        </div>

        {/* ================= RIGHT SIDEBAR ================= */}
        <div className="lg:w-1/3">
          <PopularSidebar />
        </div>

      </div>
    </div>
  );
};

export default DetailBerita;
