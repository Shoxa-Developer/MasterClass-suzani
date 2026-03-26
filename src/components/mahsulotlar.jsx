import React from "react";

const products = [
  {
    id: 1,
    title: " What Guests Will Do",
    description: [
      "Learn about the history of suzani embroidery",
      "Try simple embroidery techniques",
      "Dye natural silk using eco-friendly colors (pomegranate, onion skins, herbs)",
      " Create their own handmade souvenir",
    ],
    image:
      "https://ydk1tcgolp.ufs.sh/f/WL8eQfpTCliYMpfMWNUJiNslbWVE06cgZHxS7KfjDIYkhyv3",
  },
  {
    id: 2,
    title: "Duration, Group Size",
    description: [" 1 hour", "Min: 2 guests", "Max: 10 guests"],
    image:
      "https://ydk1tcgolp.ufs.sh/f/WL8eQfpTCliYfwvuxoM5ZimTlzRaNt203rqUCWEKQ87Apbye",
  },
  {
    id: 3,
    title: "Pricing",
    description: [
      " $25 per person (group rate)",
      "  Private experience available",
      " 👆 Special rates for tour companies",
    ],
    image:
      "https://ydk1tcgolp.ufs.sh/f/WL8eQfpTCliYeNcgxkXgbdCTpEr9QuxHOvFsYc6UKt73RmW8",
  },
  {
    id: 4,
    title: "Included",
    description: [
      " All materials (silk, threads, dyes)",
      " Tea & traditional sweets",
      " Handmade souvenir to take home",
      " Photo-friendly interior",
    ],
    image:
      "https://ydk1tcgolp.ufs.sh/f/WL8eQfpTCliY0BYbAwQsWiaBpwSYRuOqc5A6oPHn38fFDVrU",
  },
];

const Mahsulotlar = () => {
  return (
    <section className="bg-[#f6f1ea] py-20" id="products">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-20">
          <p className="text-sm tracking-[4px] text-amber-600 uppercase">
            TRADITIONAL TECHNIQUE AND CREATIVE PROCESS  
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-semibold mt-3">
            Experience
          </h2>

          <div className="w-20 h-[2px] bg-amber-500 mx-auto mt-4"></div>
        </div>

        {/* Products */}
        <div className="space-y-24">
          {products.map((item, index) => (
            <div
              key={item.id}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Image */}
              <div
                className={`rounded-xl overflow-hidden shadow-xl group 
    ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[350px] md:h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Text */}
              <div
                className={`relative space-y-6 
    ${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}
              >
                <span className="absolute -top-10 left-0 text-[120px] font-bold text-amber-200 opacity-40">
                  {`0${item.id}`}
                </span>

                <h3 className="text-3xl font-serif font-semibold relative z-10 text-amber-600">
                  {item.title}
                </h3>

                <ul className="space-y-3 text-lg relative z-10">
                  {item.description.map((text, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-amber-600">•</span> {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mahsulotlar;
