import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-12 bg-red-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between md:flex-row flex-col">
          {/* Left Section */}
          <div className="font-medium text-gray-900 md:w-[30%] w-full mb-8 md:mb-0">
            <div className="flex items-center">
              <Image
                src="/favicon.ico"
                alt="Kantonize"
                width={50}
                height={50}
                className="mb-2"
              />
              <div className="ml-4">
                <p className="font-black text-2xl">Kantonize</p>
              </div>
            </div>
            <p className="tracking-wider text-lg text-[#470F0F] mt-4">
              A website with unique features and customizing prowess. Based in
              Iloilo, Philippines.
            </p>
            <p className="mt-2">kantonize@gmail.com</p>
            <p className="mt-1 text-sm text-gray-600">
              © 2024 Kantonizers - All Rights Reserved
            </p>
          </div>

          {/* Navigation Section */}
          <div className="font-medium w-full md:w-auto mb-8 md:mb-0">
            <h3 className="font-extrabold mb-2 text-gray-800">NAVIGATION</h3>
            <ul>
              <li className="mt-3">
                <a href="/" className="text-gray-600 hover:text-[#912828]">
                  Home
                </a>
              </li>
              <li className="mt-3">
                <a href="/" className="text-gray-600 hover:text-[#912828]">
                  Ingredients
                </a>
              </li>
              <li className="mt-3">
                <a href="/" className="text-gray-600 hover:text-[#912828]">
                  Online Forum
                </a>
              </li>
              <li className="mt-3">
                <a href="/" className="text-gray-600 hover:text-[#912828]">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Socials Section */}
          <div className="font-medium w-full md:w-auto mb-8 md:mb-0">
            <h3 className="font-extrabold mb-2 text-gray-800">SOCIALS</h3>
            <ul>
              <li className="mt-3">
                <a href="/" className="text-gray-600 hover:text-[#912828]">
                  Facebook
                </a>
              </li>
              <li className="mt-3">
                <a href="/" className="text-gray-600 hover:text-[#912828]">
                  Instagram
                </a>
              </li>
              <li className="mt-3">
                <a href="/" className="text-gray-600 hover:text-[#912828]">
                  X
                </a>
              </li>
              <li className="mt-3">
                <a href="/" className="text-gray-600 hover:text-[#912828]">
                  Telegram
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="font-medium w-full md:w-auto">
            <h3 className="font-extrabold mb-2 text-gray-800">COMPANY</h3>
            <ul>
              <li className="mt-3">
                <a href="/" className="text-gray-600 hover:text-[#912828]">
                  Terms & Conditions
                </a>
              </li>
              <li className="mt-3">
                <a href="/" className="text-gray-600 hover:text-[#912828]">
                  Privacy Policy
                </a>
              </li>
              <li className="mt-3">
                <a href="/" className="text-gray-600 hover:text-[#912828]">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
