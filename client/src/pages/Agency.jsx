import { Fragment, useState } from "react";
import {
  Dialog,
  Menu,
  Transition,
} from "@headlessui/react";
import {
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
} from "@heroicons/react/20/solid";

import useFetch from "../hooks/useFetch";
import Categories from "../components/data/Categories";
import SearchFilter from "../components/SearchFilter";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const sortOptions = [
  { name: 'ذات صلة', href: '#', current: true },
  { name: 'أبجدي: أ الى ي', href: '#', current: false },
  { name: 'أبجدي: ي الى أ', href: '#', current: false },
]
export default function Example() {
  const { data } = useFetch("/agencies/?populate=*");
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div className="bg-white">

      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div dir="rtl" className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      التصنيفات
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">التصنيفات</h3>
                    <ul
                      role="presentation"
                      className="px-2 py-3 font-medium text-gray-900"
                    >
                      <Categories />
                    </ul>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main dir="rtl" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 pt-6">دليل الجهات الحكومية</h2>
            <p className="text-base font-medium text-gray-600 pt-6 text-right">يعرض الدليل المعلومات ذات العلاقة بجميع الجهات الحكومية في السودان ، وتشمل الموقع الإلكتروني للجهة ومعلومات الاتصال وموقعها على الخريطة وحساباتها على مواقع التواصل الاجتماعي، علاوة على بيانات المسؤول الأول بالجهة وأداة التواصل معه. ويمكن عن طريق صفحة الجهة في الدليل الدخول إلى خدماتها الإلكترونية والاستفادة منها.</p>
            </div>
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
            <h1 className="text-xl font-bold tracking-tight text-gray-900 lg:text-4xl">
              المحصورات
            </h1>

{/** search */}
<SearchFilter />
              {/** search end */}
            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-right">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    تصنيف حسب
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                    {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">التصنيفات</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section
            dir="rtl"
            aria-labelledby="agency-heading"
            className="pt-6 pb-24"
          >

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">التصنيفات</h3>
                <ul
                  role="presentation"
                  className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                >
                  <Categories />
                </ul>
              </form>

              {/* Product grid */}
              <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:col-span-3 lg:gap-x-8">
                <section
                  aria-labelledby="agency-heading"
                  className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8"
                >
                  <h2 id="agency-heading" className="sr-only">
                    Agencies
                  </h2>

                  <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
                    {data?.map((agency, index) => (
                      <div
                        key={agency.id}
                        className="group relative border-r border-b border-gray-200 p-4 sm:p-6"
                      >
                        <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                          <img
                            src={`http://localhost:1337${agency.attributes.image.data.attributes.url}`}
                            alt={agency.attributes.image.data.attributes.name}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="pt-10 pb-4 text-center">
                          <h3 className="text-sm font-medium text-gray-900">
                            <a href={`agency/${agency.id}`}>
                              <span
                                aria-hidden="true"
                                className="absolute inset-0"
                              />
                              {agency.attributes.title}
                            </a>
                          </h3>
                          <div className="mt-3 flex flex-col items-center">
                            <p className="sr-only"></p>
                            <div className="flex items-center"></div>
                            <p className="mt-1 text-sm text-gray-500"></p>
                          </div>
                          <p className="mt-4 text-base font-medium text-gray-900"></p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
