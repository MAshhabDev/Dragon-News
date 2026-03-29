import React from "react";
import { FaStar, FaRegBookmark, FaShareAlt, FaEye } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    author,
    image_url,
    details,
    tags,
    rating,
    total_view,
  } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-GB",
    {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }
  );

  const shortDetails =
    details.length > 180 ? details.slice(0, 180) + "..." : details;

  return (
    <div className="card gap-2 bg-base-100 shadow-sm border border-base-200">
      <div className="flex items-center justify-between p-4 bg-base-200 rounded-t-2xl">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-base-content">{author.name}</h2>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-gray-500 text-lg">
          <button className="hover:text-primary">
            <FaRegBookmark />
          </button>
          <button className="hover:text-primary">
            <FaShareAlt />
          </button>
        </div>
      </div>

      <div className="card-body p-5">
        <h2 className="card-title text-2xl font-bold leading-snug">{title}</h2>

        <figure className="my-4">
          <img
            src={image_url}
            alt={title}
            className="w-full h-64 object-cover rounded-xl"
          />
        </figure>

        <p className="text-sm text-gray-500 leading-6">
          <span className="font-medium">
            {new Date(author.published_date).toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>{" "}
          | Tag Cloud Tags: {tags.join(", ")}
        </p>

        <p className="text-base text-gray-600 mt-2 leading-7">
          {shortDetails}{" "}
          <Link to={`/news-details/${id}`}  className="text-orange-500 font-semibold cursor-pointer">
            Read More
          </Link >
        </p>

        <div className="divider my-2" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-orange-400">
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar
                key={index}
                className={index < rating.number ? "opacity-100" : "opacity-30"}
              />
            ))}
            <span className="text-gray-600 font-medium ml-2">
              {rating.number}
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-500">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;