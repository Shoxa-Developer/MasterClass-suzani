import React from "react";
import { Globe, Mail, Instagram, MapPin, ArrowUpRight } from "lucide-react";

const aloqa = [
  {
    title: "WEBSITE",
    value: "artsuzani.com",
    link: "https://artsuzani.com",
    icon: <Globe size={22} />,
  },
  {
    title: "EMAIL",
    value: "zarinaisomova89@icloud.com",
    link: "mailto:zarinaisomova89@icloud.com",
    icon: <Mail size={22} />,
  },
  {
    title: "INSTAGRAM",
    value: "@artsuzani.decor.textile",
    link: "https://instagram.com/artsuzani.decor.textile",
    icon: <Instagram size={22} />,
  },
];

const Contact = () => {
  return (
    <section className="bg-[#f4efe8] py-24" id="contact">
      <div className="max-w-3xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-[#2f2926]">Connection</h2>

          <p className="text-gray-500 mt-3">
            Contact us for cooperation, orders or questions
          </p>

          <div className="w-16 h-[2px] bg-amber-500 mx-auto mt-5"></div>
        </div>

        {/* Contact cards */}
        <div className="space-y-6">
          {aloqa.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border border-amber-200 rounded-2xl p-6 bg-[#f0e9e0] hover:shadow-md hover:scale-[1.02] transition"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full border border-amber-300 text-amber-600">
                  {item.icon}
                </div>

                <div>
                  <p className="text-xs tracking-[4px] text-gray-500">
                    {item.title}
                  </p>

                  <p className="text-lg font-medium text-[#2f2926]">
                    {item.value}
                  </p>
                </div>
              </div>

              <ArrowUpRight className="text-amber-500" />
            </a>
          ))}
        </div>

        {/* Location */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-2 border border-amber-300 px-6 py-3 rounded-full text-gray-600">
            <MapPin size={18} className="text-amber-500" />
            Bukhara, ARTSUZANI NATIONAL HOUSE
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
