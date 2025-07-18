"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export const About = () => {
  const [isCopied, setIsCopied] = useState(false);
  const email = "yourEmail@mail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <section className="text-white px-6 py-16">
      <div className="container mx-auto flex justify-around items-start flex-col lg:flex-row gap-12 lg:gap-36">
        <div className="flex items-start">
          <button
            onClick={handleCopy}
            className="flex items-center gap-3 text-left p-2 rounded-lg transition-colors duration-300"
          >
            <h1 className="text-xl font-semibold">{email}</h1>
            {isCopied ? (
              <Check className="h-5 w-5 text-green-400" />
            ) : (
              <Copy className="h-5 w-5 text-gray-400" />
            )}
          </button>
        </div>

         <div>
            <p className="text-2xl font-light leading-relaxed">
              With a strong educational background in{' '}
              <strong className="bg-orange-500/20 text-orange-300 font-semibold px-2 py-1 rounded-md transition-all duration-300">
                Software Development
              </strong>
              {' '}and a focus on{' '}
              <strong className="bg-orange-500/20 text-orange-300 font-semibold px-2 py-1 rounded-md transition-all duration-300">
                Fullstack and Mobile Development
              </strong>
              {' '}, my career is driven by a commitment to delivering high-quality digital solutions. I have a solid understanding of key programming concepts such as MVC architecture and SOLID principles, which allow me to create scalable, maintainable, and efficient applications. My success is reflected in the effectiveness, performance, and user satisfaction of the platforms I develop, showcasing my dedication to innovation and quality.
            </p>
        </div>
      </div>
    </section>
  );
};
