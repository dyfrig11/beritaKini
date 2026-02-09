import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Headline = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (posts.length === 0) return <div className="p-10">Loading...</div>;

  const currentPost = posts[currentPage - 1];

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < 5) {
      setCurrentPage(currentPage + 1);
    }
  };

  const createSlug = (title) => {
  return title.toLowerCase().replace(/\s+/g, "-");
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <p className="text-sm text-gray-500 mb-6">
        {/* Beranda &gt; Headline */}
        Headline
      </p>
      <div className="grid md:grid-cols-2 gap-10 items-center">
  <div>
    <Link to={`/detail/${currentPost.id}`}>
      <h1 className="text-4xl font-bold mb-4 capitalize cursor-pointer">
        {currentPost.title}
      </h1>
    </Link>

    <p className="text-gray-600 mb-4">
      {currentPost.body}
    </p>
  </div>

  <div>
    <Link to={`/detail/${currentPost.id}`}>
      <img
        src={`https://picsum.photos/800/500?random=${currentPost.id}`}
        alt="headline"
        className="rounded-2xl w-full object-cover cursor-pointer"
      />
    </Link>
  </div>
</div>


      {/* Pagination */}
      {/* Pagination */}
<div className="flex justify-center items-center gap-6 mt-10 text-gray-600">
  <button
    onClick={handlePrev}
    className="text-xl hover:text-black"
  >
    {"<"}
  </button>

  <span className="text-base">
    {currentPage} dari {posts.length}
  </span>

  <button
    onClick={handleNext}
    className="text-xl hover:text-black"
  >
    {">"}
  </button>
</div>

    </section>
  );
};

export default Headline;
