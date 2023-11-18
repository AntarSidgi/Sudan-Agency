import React, { useEffect, useState } from "react";
// useParams hook
import { useParams } from "react-router-dom";
// useFetch hook
import useFetch from "../hooks/useFetch";
// components
import CategoryNav from "../components/CategoryNav";
import Agency from "../components/Agency";
const Agencies = () => {
  const { id } = useParams();
  //console.log(id);
  // get agencies based on id
  const { data } = useFetch(
    `/agencies?populate=*&filters[categories][id][$eq]=${id}`
  );
  //console.log(data);
  const [title, setTitle] = useState(null);
  // set the title when data is fetched
  useEffect(() => {
    if (data) {
      setTitle(data[0].attributes.categories.data[0].attributes.title);
    }
  },[data]);
  return (
    <div dir="rtl" className="mb-16 pt-40 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex gap-x-[30px]">
          <CategoryNav />
          <main>
            {/** title */}
            <div className="py-3 text-xl uppercase text-center lg:text-left">
              {title}
            </div>
            {/** agency grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]">
              {data?.map((agency) => {
                return <Agency agency={agency} key={agency.id} />;
              })}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Agencies;
