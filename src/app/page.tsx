"use client";
import React from "react";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import ProductCard from "@/components/ProductCard";
import SpecialProduct from "@/components/SpecialProduct";

const Home: React.FC = () => {
  const items = [
    {
      image: "/favicon.ico",
      title: "MANOK NI SAN JOSE",
      description: "WOW APAKAGALING OMG OMG OMG",
      job: "Oa mong Friend",
    },
    {
      image: "/assets/images.png",
      title: "Kaba Gang",
      description:
        "Ih, its like very 10/10. It's giving very very slayful. WAHHHHHHHHHHH",
      job: "Iniwang Kaibigan na di na minahal",
    },
    {
      image: "/assets/bhela.png",
      title: "Bhela Thangherl",
      description:
        "Loh, Sinaasabi ko sa inyo, go na here. It's like the best cuz I get to make kaen the way I want it",
      job: "Bijj Ghurlie",
    },
    {
      image: "/another-icon.png",
      title: "Anonymous",
      description: "...",
      job: "Mysterious Guy na may secret",
    },
    {
      image: "/assets/image.webp",
      title: "CICTSC",
      description:
        "Hala, bih. This is so like the best website I've been to. Ang galing ng mga developers",
      job: "Oa mong Friend",
    },
  ];
  return (
    <div className="container max-w-max">
      <main className="mt-5">
        <div className="overflow-x-hidden">
          <section
            className="flex flex-col md:flex-row gap-20 items-center bg-[#FFCECE] mx-8 px-20 tracking-wider overflow-hidden"
            style={{ borderRadius: "20px 120px 20px 120px" }}
          >
            <div className="md:w-1/2 pt-36">
              <h2 className="text-sm font-light text-gray-800 mb-4">
                CUSTOMIZE YOUR PANCIT CANTON
              </h2>
              <h1 className="text-5xl font-black text-[#470F0F] mb-4">
                HERE AT KANTONIZE, FIND THE MIX THAT MAKES YOU HAPPY
              </h1>
              <button
                className="bg-[#912828] hover:bg-[#470F0F] text-white font-semibold py-2 px-4 rounded"
                style={{ borderRadius: "1rem 0rem 1rem 0rem" }}
              >
                KANTONIZE NOW -&gt;
              </button>
              <div className="py-16 px-20">
                <SpecialProduct />
              </div>
            </div>
            <div
              className="md:w-1/2 mt-8 md:mt-0 relative"
              style={{ transform: "translateX(10.5rem) translateY(-4.5rem)" }}
            >
              <div
                className="bg-[#9b3737] rounded-full w-[50rem] h-[50rem] absolute z-0"
                style={{ top: "-15rem", left: "-12rem" }}
              ></div>

              <Image
                src="/assets/bowl_blend.png"
                alt="Pancit Canton"
                width={400}
                height={400}
                className="relative z-10"
              />
            </div>
            <div className="absolute" style={{ top: "32rem", left: "38rem" }}>
              <Image
                src="/assets/main-line.png"
                alt="Pancit Canton"
                width={550}
                height={400}
                className="relative z-0"
              />{" "}
            </div>
          </section>
        </div>

        <section className="mt-12 mx-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
            <div className="p-4 flex items-center">
              <Image
                src="/assets/kanton-icon.png"
                alt="Customizable Kanton"
                width={70}
                height={70}
                className="mr-4"
              />
              <div>
                <h3 className="text-sm font-bold text-gray-800 mb-1">
                  Customizable Kanton
                </h3>
                <p className="text-[0.75rem] text-gray-600">
                  Tailor your perfect meal with our customizable Kanton to your
                  personal preferences.
                </p>
              </div>
            </div>

            <div className="p-4 flex items-center">
              <Image
                src="/assets/voucher-icon.png"
                alt="Voucher Discounts"
                width={70}
                height={70}
                className="mr-4"
              />
              <div>
                <h3 className="text-sm font-bold text-gray-800 mb-1">
                  Voucher Discounts
                </h3>
                <p className="text-[0.75rem] text-gray-600">
                  Enjoy exclusive deals and special offers that make shopping
                  more affordable.
                </p>
              </div>
            </div>

            <div className="p-4 flex items-center">
              <Image
                src="/assets/fresh-icon.png"
                alt="Fresh Ingredients"
                width={70}
                height={70}
                className="mr-4"
              />
              <div>
                <h3 className="text-sm font-bold text-gray-800 mb-1">
                  Fresh Ingredients
                </h3>
                <p className="text-[0.75rem] text-gray-600">
                  Savor the difference with our premium, farm-fresh ingredients
                  for exceptional flavor and quality in every bite.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-[12rem] mx-11">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <ProductCard />
              <ProductCard />
            </div>
            <div>
              <h1 className="text-[2rem] font-extrabold">Our Special Dishes</h1>
              <p className="text-[1rem] text-gray-600 mt-12 text-justify">
                Our Espesyal Canton dishes offer a delicious twist on the
                traditional Filipino stir-fried noodles. Made with fresh egg
                noodles, a blend of savory sauces, and loaded with tender meats,
                seafood, and crisp vegetables, each bite is bursting with
                flavor. Whether it&apos;s our classic Espesyal Canton with pork
                and shrimp or a spicy version with chili and garlic, these
                dishes are sure to satisfy your cravings for hearty, Filipino
                comfort food. Perfect for any occasion, served fresh and hot!
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="my-[20rem]">
            <Image
              src="/assets/home-canton.png"
              width={1920}
              height={480}
              alt={""}
            />
          </div>
        </section>
        <section className="mt-[5rem]">
          <p className="flex justify-start text-[1rem] font-bold tracking-wider mx-8">
            TESTIMONIALS{" "}
          </p>
          <div className="flex flex-col items-center mx-4">
            <h2 className="text-[5.5rem] font-[900] text-gray-800 mb-4 mx-6 text-center">
              WHAT DO KANTONIZERS SAY ABOUT US.
            </h2>
            <div>
              <Carousel items={items} />
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center mt-[30rem] bg-[#912828] rounded-[1.5rem] p-8 mx-10 text-center mb-[12rem]">
          <h2 className="text-[64px] font-[500] text-[#FFCECE] mb-4 px-[10rem]">
            Don&apos;t be surprised at how satisfied your tummy is once you
            kantonize.
          </h2>
          <button className="bg-[#FFCECE] hover:bg-gray-100 text-[#470F0F] font-bold py-[0.5rem] text-[20px] px-[5rem] rounded-3xl mt-4 tracking-wider">
            Kantonize Now
          </button>
        </section>
      </main>
    </div>
  );
};

export default Home;
