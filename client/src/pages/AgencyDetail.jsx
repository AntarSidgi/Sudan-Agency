import React from "react";
// useParams hook
import { useParams } from "react-router-dom";
// useFetch hook
import useFetch from "../hooks/useFetch";
// use icon
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

import {  FaAppStore, FaFacebook, FaGooglePlay, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";



// components
import RelatedAgencies from "../components/RelatedAgencies";

const AgencyDetail = () => {
  const { id } = useParams();
  //console.log(id);
  // get agency based on id
  const { data } = useFetch(`/agencies?populate=*&filters[id][$eq]=${id}`);
  //console.log(data);
  if (!data) {
    return <div dir="rtl" className="container mx-auto">صلي على محمد صلى الله عليه وسلم</div>;
  }
  // category title
  const categoryTitle = data[0].attributes.categories.data[0].attributes.title;
  //console.log(categoryTitle);
  return (
    <div className="mb-16 pt-44 lg:pt-[30px] xl:pt-0">
      <div className="container mx-auto">
        <div className="">
          {/** text */}
          <div className="flex flex-col lg:flex-row gap-[30px] mb-[30px]">
            <ul
              role="presentation"
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1"
            >
              {data?.map((person) => (
                <li
                  key={person.id}
                  className="col-span-3 flex flex-col divide-y divide-gray-900 rounded-lg bg-primary text-center shadow"
                >
                  <div className="flex flex-1 flex-col p-8 lg:mt-[30%]">
                    <img
                      className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                      src={`http://localhost:1337${data[0].attributes.person.data.attributes.url}`}
                      alt=""
                    />
                    <h3 className="mt-6 text-base font-medium text-white">
                    {person.attributes.officer}
                    </h3>
                    <dl className="mt-1 flex flex-grow flex-col justify-between">
                      <dt className="sr-only">About</dt>
              <dd className="mt-3">
                      <dt className="sr-only">Role</dt>
                      <dd className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                        {person.attributes.role}
                      </dd>
                <span className="text-sm text-gray-300">
                  {person.attributes.about}
                </span>
              </dd>
                    </dl>
                  </div>
                  <div>
                    <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <a
                  href={`mailto:${person.attributes.officermail}`}
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-green-700 hover:text-green-500"
                >
                  <EnvelopeIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                  <span className="ml-3">Email</span>
                </a>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <a
                  href={`tel:${person.attributes.officerphone}`}
                  className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-green-700 hover:text-green-500"
                >
                  <PhoneIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                  <span className="ml-3">Call</span>
                </a>
              </div>
            </div>
                  </div>
                </li>
              ))}
            </ul>

            <div
              dir="rtl"
              className="flex-1 bg-primary p-12 xl:p-20 rounded-lg flex flex-col justify-center"
            >
              {/** image */}
              <img
                className="mx-auto h-32 w-32 flex-shrink-0 rounded-full md:relative md:top-0 md:-inset-x-[150px] sm:z-10 top-96 -z-1 xl:top-0 xl:relative xl:-inset-x-[360px]"
                src={`http://localhost:1337${data[0].attributes.image.data.attributes.url}`}
                alt=""
              />
              {/** Category Title */}
              <div className="uppercase text-accent font-medium mb-2">
                {data[0].attributes.categories.data[0].attributes.title}
              </div>
              {/** Title */}
              <h2 className="h2 mb-4">{data[0].attributes.title}</h2>
              {/** Description */}
              <p className="mb-12">{data[0].attributes.description}</p>
              {/** website & btn */}
              <div className="flex items-center gap-x-8">
                {/** website */}
                <div className="text-3xl text-accent font-semibold"></div>
                <a href={data[0].attributes.link}>
                <button
                  className="btn btn-accent"
                  >
                  Visit website
                </button>
                  </a>
              </div>

                {/* Contact information */}

                            {/* Contact grid */}
        <section aria-labelledby="Contact-heading">
          <div className="mx-auto max-w-7xl py-24 px-6 lg:px-8">
            <h2 id="Contact-heading" className="text-3xl font-bold tracking-tight text-warm-gray-900">
              تواصل معنا
            </h2>
            <dl className="mt-8 space-y-6">
                    <dt>
                      <span className="sr-only">Phone number</span>
                    </dt>
                    <dd className="flex text-base text-green-50">
                      <PhoneIcon className="h-6 w-6 flex-shrink-0 text-accent" aria-hidden="true" />
                      <span className="ml-3 px-2">{data[0].attributes.phone}</span>
                    </dd>
                    <dt>
                      <span className="sr-only">Email</span>
                    </dt>
                    <dd className="flex text-base text-green-50">
                      <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-accent" aria-hidden="true" />
                      <span className="ml-3 px-2">{data[0].attributes.email}</span>
                    </dd>
                  </dl>
                  <ul role="presentation" className="mt-8 flex space-x-2">
                    <li>
                    </li>
                    <li>
                      <a className="text-accent hover:text-green-100" href={data[0].attributes.facebook}>
                        <span className="sr-only">Facebook</span>
                        <FaFacebook className="h-7 w-7" />
                      </a>
                    </li>
                    <li>
                      <a className="text-accent hover:text-green-100" href={data[0].attributes.twitter}>
                        <span className="sr-only">Twitter</span>
                        <FaTwitter className="h-7 w-7" />
                      </a>
                    </li>
                    <li>
                      <a className="text-accent hover:text-green-100" href={data[0].attributes.linkedin}>
                        <span className="sr-only">Linkedin</span>
                        <FaLinkedin className="h-7 w-7" />
                      </a>
                    </li>
                    <li>
                      <a className="text-accent hover:text-green-100" href={data[0].attributes.instagram}>
                        <span className="sr-only">Instagram</span>
                        <FaInstagram className="h-7 w-7" />
                      </a>
                    </li>
                    <li>
                      <a className="text-accent hover:text-green-100" href={data[0].attributes.youtube}>
                        <span className="sr-only">Youtube</span>
                        <FaYoutube className="h-7 w-7" />
                      </a>
                    </li>
                  </ul>
          </div>
        </section>
                  
            {/* Location grid */}
        <section aria-labelledby="Location-heading">
          <div className="mx-auto max-w-7xl py-8 px-6 lg:px-8">
            <h2 id="Location-heading" className="text-3xl font-bold tracking-tight text-warm-gray-900">
              موقعنا
            </h2>
            <p className="mt-6 max-w-3xl text-lg text-warm-gray-500">
            {data[0].attributes.location}
            </p>
          </div>
        </section>

                    {/* APP grid */}
                    <section aria-labelledby="APP-heading">
          <div className="mx-auto max-w-7xl py-8 px-6 lg:px-8">
            <h2 id="APP-heading" className="text-3xl font-bold tracking-tight text-warm-gray-900">
              حمل التطبيق
            </h2>
            <p className="flex span-x-8 px-8 mt-6 max-w-3xl text-lg text-warm-gray-500">
            <a className="px-4 text-accent hover:text-green-100" href={data[0].attributes.android}>
                        <span className="sr-only">Facebook</span>
                        <FaGooglePlay className="h-7 w-7" />
                      </a>
            <a className="text-accent hover:text-green-100" href={data[0].attributes.iphone}>
                        <span className="sr-only">Facebook</span>
                        <FaAppStore className="h-7 w-7" />
                      </a>  
            </p>
          </div>
        </section>

            </div>
          </div>
          {/** related agencies */}
          <RelatedAgencies categoryTitle={categoryTitle} />
        </div>
      </div>
    </div>
  );
};

export default AgencyDetail;
