import React from "react";

const Main = () => {
  return (
    <section className="bg-[#f5f3ef] min-h-screen flex items-center" id="home">
      <div className="max-w-7xl mx-auto grid w-full md:grid-cols-2 gap-10 items-center justify-between">
        {/* Left Side */}
        <div className="space-y-6">
          <span className="border border-yellow-500 text-yellow-600 px-5 py-2 rounded-full text-sm tracking-widest">
            Silk Dyeing & Suzani Workshop Experience
          </span>

          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 leading-tight">
            Authentic 1-hour cultural experience in Uzbekistan
          </h1>
          <p className="text-yellow-600 italic text-lg"></p>
        </div>

        {/* Right Side Image */}
        <div className="relative">
          <img
            src="https://ydk1tcgolp.ufs.sh/f/WL8eQfpTCliYcXHR3hn8R7lrXD5j93SMtGspwqzZhILnuUTi"
            alt="suzani art"
            className="rounded-2xl shadow-lg object-cover w-full h-[550px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Main;
