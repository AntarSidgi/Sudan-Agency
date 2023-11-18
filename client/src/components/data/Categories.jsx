import React from "react";

// link
import { Link } from "react-router-dom";
// useFetch
import useFetch from "../../hooks/useFetch";

const Categories = () => {
  // get categories
  const { data } = useFetch("/categories");
  //console.log(data[0].attributes.title);
  return (
    <div className="flex flex-col gap-y-8">
      {data?.map((category) => {
        return (
          <Link
            dir="rtl"
            to={`agencies/${category.id}`}
            className="uppercase font-medium"
            key={category.id}
          >
            {category.attributes.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Categories;
