import React from "react";
// useFetch hook
import useFetch from "../hooks/useFetch";
// components
import AgencySlider from "./AgencySlider";

const RelatedAgencies = ({ categoryTitle }) => {
  // Agencies by category title
  const { data } = useFetch(
    `/agencies?populate=*&filters[categories][title]=${categoryTitle}`
  );
  //console.log(data);
  return <div className="mb-16">
    <div className="container mx-auto">
      <h2 className="h2 mb-6 text-center xl:text-left">Related Agencies</h2>
      <AgencySlider data={data} />
    </div>
  </div>;
};

export default RelatedAgencies;
