import React from "react";
import NewsCard from "../components/NewsCard";

const CategoryPage = ({ title }) => {
  // dummy data sementara
  const dummyData = Array.from({ length: 12 }).map((_, index) => ({
    id: index + 1,
    title: `${title} - Berita ${index + 1}`,
    image: `https://picsum.photos/400/300?random=${index + 20}`,
    category: title,
    date: "22 Jan 2024",
  }));

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-6">
        Beranda &gt; {title}
      </p>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-10 border-l-4 border-blue-600 pl-4">
        {title}
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {dummyData.map((item) => (
          <NewsCard
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            category={item.category}
            date={item.date}
          />
        ))}
      </div>
    </section>
  );
};

export default CategoryPage;
