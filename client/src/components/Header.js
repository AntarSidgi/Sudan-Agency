import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { PlusIcon ,ChevronDownIcon} from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <Disclosure dir='rtl' as="nav" className="bg-green-900 shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="-mr-2 ml-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-100 hover:text-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://kri.org.sd/wp-content/uploads/2023/07/logo-white-336x188-1-300x168.png"
                    alt="KRI"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://kri.org.sd/wp-content/uploads/2023/07/logo-white-336x188-1-300x168.png"
                    alt="KRI"
                  />
                </div>
                <div className="hidden md:mr-6 md:flex md:space-x-6">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <a
                    href="/"
                    className="inline-flex items-center border-b-2 border-orange-500 pl-8 px-1 pt-1 text-sm font-medium text-orange-500"
                  >
                    الرئيسية
                  </a>
                  <Menu as="button" className="relative inline-block text-right border-b-2 border-transparent hover:border-orange-500 ">
      <div>
        <Menu.Button className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-orange-500">
         عن المبادرة
          <ChevronDownIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-green-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://kri.org.sd/%d9%85%d9%86-%d9%86%d8%ad%d9%86/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  من نحن 
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://kri.org.sd/%d8%a7%d9%84%d8%b1%d8%a4%d9%8a%d8%a9-%d9%88%d8%a7%d9%84%d8%b1%d8%b3%d8%a7%d9%84%d8%a9/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  الرؤية والرسالة
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://kri.org.sd/%d8%a7%d9%84%d9%87%d9%8a%d9%83%d9%84-%d8%a7%d9%84%d8%aa%d9%86%d8%b8%d9%8a%d9%85%d9%8a/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  الهيكل التنظيمي
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://kri.org.sd/%d9%81%d8%b1%d9%8a%d9%82-%d8%a7%d9%84%d8%b9%d9%85%d9%84/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  فريق العمل
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
                  <a
                    href="https://kri.org.sd/%d8%a7%d9%84%d9%82%d8%b7%d8%a7%d8%b9%d8%a7%d8%aa/"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:border-orange-500 hover:text-orange-500"
                  >
                    القطاعات واللجان
                  </a>
                  <a
                    href="https://kri.org.sd/%d8%a7%d9%84%d8%b9%d8%b6%d9%88%d9%8a%d8%a9/"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:border-orange-500 hover:text-orange-500"
                  >
                    العضوية
                  </a>
                  <Menu as="button" className="relative inline-block text-right border-b-2 border-transparent hover:border-orange-500 ">
      <div>
        <Menu.Button className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-orange-500">
          المركز الإعلامي
          <ChevronDownIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-green-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://kri.org.sd/events/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  الفعاليات القادمة 
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://kri.org.sd/news/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  الأخبار
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://kri.org.sd/%d8%a7%d9%84%d9%86%d8%b4%d8%b1%d8%a7%d8%aa-%d8%a7%d9%84%d8%a5%d8%b9%d9%84%d8%a7%d9%85%d9%8a%d8%a9/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  النشرات الإعلامية
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://kri.org.sd/%d8%a7%d9%84%d8%aa%d9%82%d8%a7%d8%b1%d9%8a%d8%b1/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  الإصدارات والتقارير
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://kri.org.sd/%d8%a7%d9%84%d9%82%d9%88%d8%a7%d8%a6%d9%85-%d8%a7%d9%84%d9%85%d8%a7%d9%84%d9%8a%d8%a9/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  القوائم المالية
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://kri.org.sd/%d8%a7%d9%84%d8%b4%d8%b1%d8%a7%d9%83%d8%a7%d8%aa/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  الشراكات
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
                  <a
                    href="https://kri.org.sd/%d8%a7%d9%84%d9%85%d9%86%d8%b5%d8%a7%d8%aa/"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:border-orange-500 hover:text-orange-500"
                  >
                    المنصات
                  </a>
                  <Menu as="button" className="relative inline-block text-right border-b-2 border-transparent hover:border-orange-500 ">
      <div>
        <Menu.Button className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-orange-500">
          التواصل 
          <ChevronDownIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-green-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://kri.org.sd/contact/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  تواصل معنا
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://kri.org.sd/ideas/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  الأفكار والمقترحات
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
                </div>
              </div>
                  
              <div className="flex items-center">
                  <Link to="https://kri.org.sd/register">
                <div className="flex-shrink-0">
                  <button
                    type="button"
                    className="relative inline-flex items-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  >
                    <PlusIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                    <span>تسجيل</span>
                  </button>
                
                </div> 

              </Link>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 pt-2 pb-3">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="/"
                className="block border-r-4 border-orange-500 bg-indigo-50 py-2 pr-3 pl-4 text-base font-medium text-orange-600 sm:pr-5 sm:pl-6"
              >
                الرئيسية
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-r-4 border-transparent py-2 pr-3 pl-4 text-base font-medium text-white hover:border-orange-600 hover:bg-gray-50 hover:text-orange-600 sm:pr-5 sm:pl-6"
              >
                <Menu as="button" className="relative inline-block text-right">
      <div>
        <Menu.Button className="inline-flex items-center px-1 pt-1 text-sm font-medium  hover:text-orange-500">
          عن المبادرة 
          <ChevronDownIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-green-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://kri.org.sd/%d9%85%d9%86-%d9%86%d8%ad%d9%86/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  من نحن 
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://kri.org.sd/%d8%a7%d9%84%d8%b1%d8%a4%d9%8a%d8%a9-%d9%88%d8%a7%d9%84%d8%b1%d8%b3%d8%a7%d9%84%d8%a9/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  الرؤية والرسالة
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://kri.org.sd/%d8%a7%d9%84%d9%87%d9%8a%d9%83%d9%84-%d8%a7%d9%84%d8%aa%d9%86%d8%b8%d9%8a%d9%85%d9%8a/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  الهيكل التنظيمي
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://kri.org.sd/%d9%81%d8%b1%d9%8a%d9%82-%d8%a7%d9%84%d8%b9%d9%85%d9%84/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  فريق العمل
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="https://kri.org.sd/%d8%a7%d9%84%d9%82%d8%b7%d8%a7%d8%b9%d8%a7%d8%aa/"
                className="block border-r-4 border-transparent py-2 pr-3 pl-4 text-base font-medium text-white hover:border-orange-600 hover:bg-gray-50 hover:text-orange-600 sm:pr-5 sm:pl-6"
              >
                القطاعات واللجان
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="https://kri.org.sd/%d8%a7%d9%84%d8%b9%d8%b6%d9%88%d9%8a%d8%a9/"
                className="block border-r-4 border-transparent py-2 pr-3 pl-4 text-base font-medium text-white hover:border-orange-600 hover:bg-gray-50 hover:text-orange-600 sm:pr-5 sm:pl-6"
              >
                العضوية
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-r-4 border-transparent py-2 pr-3 pl-4 text-base font-medium text-white hover:border-orange-600 hover:bg-gray-50 hover:text-orange-600 sm:pr-5 sm:pl-6"
              >
                <Menu as="button" className="relative inline-block text-right">
      <div>
        <Menu.Button className="inline-flex items-center px-1 pt-1 text-sm font-medium  hover:text-orange-500">
          المركز الإعلامي 
          <ChevronDownIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-green-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://kri.org.sd/events/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  الفعاليات القادمة 
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://kri.org.sd/news/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  الأخبار
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://kri.org.sd/%d8%a7%d9%84%d9%86%d8%b4%d8%b1%d8%a7%d8%aa-%d8%a7%d9%84%d8%a5%d8%b9%d9%84%d8%a7%d9%85%d9%8a%d8%a9/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  النشرات الإعلامية
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://kri.org.sd/%d8%a7%d9%84%d8%aa%d9%82%d8%a7%d8%b1%d9%8a%d8%b1/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  الإصدارات والتقارير
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://kri.org.sd/%d8%a7%d9%84%d9%82%d9%88%d8%a7%d8%a6%d9%85-%d8%a7%d9%84%d9%85%d8%a7%d9%84%d9%8a%d8%a9/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  القوائم المالية
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://kri.org.sd/%d8%a7%d9%84%d8%b4%d8%b1%d8%a7%d9%83%d8%a7%d8%aa/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  الشراكات
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="https://kri.org.sd/%d8%a7%d9%84%d9%85%d9%86%d8%b5%d8%a7%d8%aa/"
                className="block border-r-4 border-transparent py-2 pr-3 pl-4 text-base font-medium text-white hover:border-orange-600 hover:bg-gray-50 hover:text-orange-600 sm:pr-5 sm:pl-6"
              >
                المنصات
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-r-4 border-transparent py-2 pr-3 pl-4 text-base font-medium text-white hover:border-orange-600 hover:bg-gray-50 hover:text-orange-600 sm:pr-5 sm:pl-6"
              >
                <Menu as="button" className="relative inline-block text-right">
      <div>
        <Menu.Button className="inline-flex items-center px-1 pt-1 text-sm font-medium  hover:text-orange-500">
          التواصل 
          <ChevronDownIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-green-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://kri.org.sd/contact/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  تواصل معنا
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://kri.org.sd/ideas/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  الأفكار والمقترحات
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}