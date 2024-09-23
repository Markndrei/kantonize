import Image from "next/image";

interface ProductCardProps {
  name: string;
  price: string;
}

const ProductCard = ({ name, price }: ProductCardProps) => {
  return (
    <div className="bg-[#912828] rounded-lg p-4 relative shadow-md">
      <div className="w-20 h-32 rounded-lg mb-4">
        <Image
          src="/assets/main-asset.png"
          alt={name}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="flex flex-col items-start justify-between">
        <div>
          <h2 className="text-white text-lg font-semibold">{name}</h2>
          <p className="text-white text-sm mt-1">₱ {price}</p>
        </div>

        <div className="flex items-center mt-3 space-x-2">
          {/* Star Rating (using font icons or images) */}
          <span className="text-yellow-400">★★★★★</span>

          {/* Add to Cart Button */}
          <button className="bg-[#FFCECE] text-[#912828] rounded-full p-2 shadow-md">
            {/* Shopping Cart Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Heart Icon (using font icons or images) */}
      <div className="absolute top-4 right-4 bg-[#FFCECE] rounded-full p-2 shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-[#912828]"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default function ProductList() {
  return (
    <div>
      <ProductCard name="Pancit Canton Espesyal" price="80.00" />
    </div>
  );
}
