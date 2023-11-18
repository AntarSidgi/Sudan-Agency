import React from "react";
// link
import { Link } from "react-router-dom";

const Agency = ({ agency }) => {
  //console.log(agency);
  return (
    <Link dir="rtl" to={`/agency/${agency.id}`}>
      <div className="grad w-full h-[362px] rounded-[8px] overflow-hidden relative group">
        {/** badge */}
        {agency.attributes.isNew ? (
          <div className="absolute bg-lime-600 text-primary text-[12px] font-extrabold uppercase top-4 right-4 px-2 rounded-full z-10">
            مضاف حديثاً
          </div>
        ) : (
          ""
        )}
        {/** image */}
        <div className="flex items-center justify-center relative w-full h-[200px]">
          <img
            className="group-hover:scale-90 transition-all w-[160px] h-[160px]"
            src={`http://localhost:1337${agency.attributes.image.data.attributes.url}`}
            alt={`error getting http://localhost:1337${agency.attributes.image.data.attributes.name}`}
          />
        </div>
        {/** Text */}
        <div className="px-6 pb-8 flex flex-col">
          {/** Category title */}
          <div className="text-sm text-lime-600 capitalize mb-2 ">
            {agency.attributes.categories.data[0].attributes.title}
          </div>
          {/** title */}
          <div className="text-[15px] mb-4 lg:mb-9">
            {agency.attributes.title.substring(0, 35)}
          </div>
          {/** location */}
          {/* <div className="text-lg text-lime-600">
            {agency.attributes.categories.data[0].attributes.title}
          </div> */}
        </div>
      </div>
    </Link>
  );
};

export default Agency;
