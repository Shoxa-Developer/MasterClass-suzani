import React from "react";

const Main2 = () => {
  return (
    <section className="bg-[#f5f3ef] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto grid w-full md:grid-cols-2 gap-10 items-center justify-between">
        {/* Right Side Image */}
        <div className="relative">
          <img
            src="https://ydk1tcgolp.ufs.sh/f/WL8eQfpTCliYC8AzdhviwBIA7uP1ZgmtJc9aKdGDUkzxl2FH"
            alt="suzani art"
            className="rounded-2xl shadow-lg object-cover w-full h-[550px]"
          />
        </div>

        {/* Left Side */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight text-amber-700">
            Overview
          </h1>
          <p className="font-bold text-[25px]">
            Discover the beauty of Uzbek traditions through a hands-on workshop
            combining silk dyeing and suzani embroidery. This experience is
            perfect for travelers who want to create something unique and
            connect with local culture. Hosted by a local artisan family, this
            workshop offers a warm, authentic atmosphere.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Main2;
