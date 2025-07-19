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
    <section id="about" className="text-white px-6 py-20 sm:py-24">
      <div className="container mx-auto">

        <div className="flex flex-col md:flex-row items-start justify-center gap-12 md:gap-16">
          <div className="w-full md:w-auto">
            <button
              onClick={handleCopy}
              className="flex w-full items-center gap-3 rounded-lg border border-transparent p-3 text-left transition-all duration-300 hover:border-gray-700 hover:bg-gray-800/50 md:w-auto"
            >
              <h3 className="text-lg font-semibold sm:text-xl">{email}</h3>
              {isCopied ? (
                <Check className="h-5 w-5 flex-shrink-0 text-green-400" />
              ) : (
                <Copy className="h-5 w-5 flex-shrink-0 text-gray-400" />
              )}
            </button>
          </div>

          <div className="flex-1 max-w-4xl">
            <p className="text-lg font-light leading-relaxed text-gray-300 md:text-xl">
              With a strong educational background in{" "}
              <strong className="rounded-md bg-orange-500/20 px-2 py-1 font-semibold text-orange-300">
                Software Development
              </strong>{" "}
              and a focus on{" "}
              <strong className="rounded-md bg-orange-500/20 px-2 py-1 font-semibold text-orange-300">
                Fullstack and Mobile Development
              </strong>
              , my career is driven by a commitment to delivering high-quality
              digital solutions. I have a solid understanding of key programming
              concepts such as MVC architecture and SOLID principles, which allow
              me to create scalable, maintainable, and efficient applications.
              My success is reflected in the effectiveness, performance, and
              user satisfaction of the platforms I develop, showcasing my
              dedication to innovation and quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};