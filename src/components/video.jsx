import React from "react";

const Video = () => {
  return (
    <section className="w-full py-20" id="project">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl text-black font-serif">
            Exhibition
          </h2>
          <p className="text-gray-300 mt-3">
            Discover the beauty of Uzbek plov
          </p>
        </div>

        {/* Video */}
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <video
            className="w-full h-[400px] md:h-[650px] object-cover"
            controls
            autoPlay
            muted
            loop
          >
            <source
              src="https://ydk1tcgolp.ufs.sh/f/WL8eQfpTCliYBnDOafvkmlHyUZEI1XtafuO7K04cj6Pv2xRS"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Video;
