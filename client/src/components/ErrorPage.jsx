import backGroundImage from "../img/khartoum.jpg";
import logo from "../img/logo.png";
import Footer from "./Footer";
export default function ErrorPage() {
  return (
    <>
      <div className="flex min-h-full flex-col bg-white lg:relative">
        <div className="flex flex-grow flex-col">
          <main className="flex flex-grow flex-col bg-white">
            <div className="mx-auto flex w-full max-w-7xl flex-grow flex-col px-6 lg:px-8">
              <div className="flex-shrink-0 pt-10 sm:pt-16">
                <a href="/" className="inline-flex">
                  <span className="sr-only">kri</span>
                  <img className="h-12 w-auto" src={logo} alt="" />
                </a>
              </div>
              <div className="my-auto flex-shrink-0 py-16 sm:py-32">
                <p className="text-base font-semibold text-green-600">404</p>
                <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  ياساتر شكلك رحت
                </h1>
                <p className="mt-2 text-base text-gray-500">
                  اضغط الرجوع للصفحة الرئيسية عشان ترجع ولو اتكررت المشكلة معاك
                  اتواصل مع الدعم
                </p>
                <div className="mt-6">
                  <a
                    href="/"
                    className="text-base font-medium text-green-600 hover:text-green-500"
                  >
                    <span aria-hidden="true"> &larr;</span>
                    الرجوع للصفحة الرئيسية
                  </a>
                </div>
              </div>
            </div>
          </main>
          <footer className="flex-shrink-0 bg-gray-50">
            <div className="mx-auto w-full max-w-7xl py-16 px-6 lg:px-8">
              <nav className="flex space-x-4">
                <a
                  href="https://kri.org.sd/contact/"
                  className="text-sm font-medium text-gray-500 hover:text-gray-600"
                >
                  تواصل مع الدعم
                </a>
                <span
                  className="inline-block border-l border-gray-300"
                  aria-hidden="true"
                />
                <a
                  href="https://kri.org.sd/%d9%85%d9%86-%d9%86%d8%ad%d9%86/"
                  className="text-sm font-medium text-gray-500 hover:text-gray-600"
                >
                  من نحن
                </a>
                <span
                  className="inline-block border-l border-gray-300"
                  aria-hidden="true"
                />
                <a
                  href="https://chat.kri.org.sd/"
                  className="text-sm font-medium text-gray-500 hover:text-gray-600"
                >
                  منصة تواصل المبادرة
                </a>
              </nav>
            </div>
          </footer>
        </div>
        <div className="hidden lg:absolute lg:inset-y-0 lg:right-0 lg:block lg:w-1/2">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={backGroundImage}
            alt=""
          />
        </div>
      </div>
        <Footer />
    </>
  );
}
