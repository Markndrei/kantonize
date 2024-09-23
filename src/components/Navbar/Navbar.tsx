import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  return (
    <header className="py-4 mx-[4rem]">
      <nav className="flex justify-between items-center">
        {/* Left: Brand (KANTONIZE) */}
        <h1 className="text-2xl font-bold text-gray-800">KANTONIZE</h1>

        {/* Center: Navigation Links */}
        <ul className="flex justify-center items-center space-x-24">
          <li>
            <a
              href="/"
              className="relative text-gray-600 hover:text-[#912828] transition-colors duration-300"
            >
              HOME
              <span className="absolute left-0 right-0 bottom-[-4px] h-0.5 bg-[#912828] transition-all duration-300 ease-in-out scale-x-0 hover:scale-x-100"></span>
            </a>
          </li>
          <li>
            <a
              href="/kantonize"
              className="relative text-gray-600 hover:text-[#912828] transition-colors duration-300"
            >
              KANTONIZE
              <span className="absolute left-0 right-0 bottom-[-4px] h-0.5 bg-[#912828] transition-all duration-300 ease-in-out scale-x-0 hover:scale-x-100"></span>
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="relative text-gray-600 hover:text-[#912828] transition-colors duration-300"
            >
              ABOUT US
              <span className="absolute left-0 right-0 bottom-[-4px] h-0.5 bg-[#912828] transition-all duration-300 ease-in-out scale-x-0 hover:scale-x-100"></span>
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="relative text-gray-600 hover:text-[#912828] transition-colors duration-300"
            >
              CONTACT US
              <span className="absolute left-0 right-0 bottom-[-4px] h-0.5 bg-[#912828] transition-all duration-300 ease-in-out scale-x-0 hover:scale-x-100"></span>
            </a>
          </li>
        </ul>

        {/* Right: Avatar */}
        <div className="flex items-center">
          <Avatar>
            <AvatarImage src="/assets/image.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
