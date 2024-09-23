import { useState } from "react";
import Image from "next/image";

interface CarouselItem {
  image: string;
  title: string;
  description: string;
  job: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={`min-w-full transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="w-full flex justify-center items-center">
              <div className="w-[70rem] bg-white rounded-3xl p-8 shadow-lg shadow-black/25 border border-gray-200 relative text-center">
                <p className="text-[120px] font-black -start-96 relative">
                  &quot;
                </p>
                <p className="text-gray-600  italic">{item.description}</p>
                <p className="Milker text-[120px] font-black mt-6 -end-96 relative">
                  &quot;
                </p>
                <div className="flex flex-col items-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={120}
                    height={120}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-black text-[1.75rem] tracking-wider text-gray-800 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 font-medium">{item.job}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {items.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${
              index === currentIndex ? "bg-black" : "bg-gray-300"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
