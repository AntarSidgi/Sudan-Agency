import React from "react";
import logo from "../img/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { SiMattermost } from "react-icons/si";

const footer = {
  solutions: [
    { name: "من نحن", href: "https://kri.org.sd/%d9%85%d9%86-%d9%86%d8%ad%d9%86/" },
    { name: "الرؤية والرسالة", href: "https://kri.org.sd/%d8%a7%d9%84%d8%b1%d8%a4%d9%8a%d8%a9-%d9%88%d8%a7%d9%84%d8%b1%d8%b3%d8%a7%d9%84%d8%a9/" },
    { name: "الهيكل التنظيمي", href: "https://kri.org.sd/%d8%a7%d9%84%d9%87%d9%8a%d9%83%d9%84-%d8%a7%d9%84%d8%aa%d9%86%d8%b8%d9%8a%d9%85%d9%8a/" },
    { name: "فريق العمل", href: "https://kri.org.sd/%d9%81%d8%b1%d9%8a%d9%82-%d8%a7%d9%84%d8%b9%d9%85%d9%84/" },
  ],
  support: [
    { name: "سجل في المبادرة", href: "https://kri.org.sd/register" },
    { name: "القطاعات واللجان", href: "https://kri.org.sd/%d8%a7%d9%84%d9%82%d8%b7%d8%a7%d8%b9%d8%a7%d8%aa/" },

  ],
  company: [
    { name: "اتصل بنا", href: "https://kri.org.sd/contact/" },
    { name: "ارسل فكرة", href: "https://kri.org.sd/ideas/" },

  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/KRI4SD",
      icon: () => <FaFacebook />,
    },
    {
      name: "antar",
      href: "#",
      icon: () => {},
    },
    {
      name: "Youtube",
      href: "https://www.youtube.com/@KRI4SD",
      icon: () => <FaYoutube />,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/kri4sd",
      icon: () => <FaTwitter />,
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/kri4sd/",
      icon: () => <FaLinkedin />,
    },
    {
      name: "Telegram",
      href: "https://t.me/+e6QmixSdU78zZGM0",
      icon: () => <FaTelegram />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/kri4sd/",
      icon: () => <FaInstagram />,
    },
    {
      name: "Chat",
      href: "https://chat.kri.org.sd/",
      icon: () => <SiMattermost />,
    },
  ],
};
const Footer = () => {
  return (
    <footer dir="rtl" className="bg-gray-50" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl py-12 px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <img className="h-10" src={logo} alt="Kri" />
            <p className="text-base text-gray-500">
              نتضامن لنجعل السودان مكان أجمل .
            </p>
            <div className="flex space-x-6">
              {footer.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-medium text-gray-900">
                  عن المبادرة
                </h3>
                <ul role="presentation" className="mt-4 space-y-4">
                  {footer.solutions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-medium text-gray-900">روابط مهمة</h3>
                <ul role="presentation" className="mt-4 space-y-4">
                  {footer.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-medium text-gray-900">التواصل</h3>
                <ul role="presentation" className="mt-4 space-y-4">
                  {footer.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
          &copy;{(new Date().getFullYear())} جميع الحقوق محفوظة. لدى مبادرة إعمار الخرطوم.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
