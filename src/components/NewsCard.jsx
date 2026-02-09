import { Link } from "react-router-dom";

const NewsCard = ({ id, image, title, category, date }) => {
  return (
    <Link to={`/detail/${id}`} className="block">
      <div className="cursor-pointer">
        <img
          src={image}
          alt={title}
          className="rounded-xl mb-3 w-full h-40 object-cover"
        />
        <h3 className="font-semibold mb-2">{title}</h3>
        <div className="text-sm text-gray-500">
          <span className="text-blue-600 font-medium">{category}</span>
          <span className="mx-2">•</span>
          {date}
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
