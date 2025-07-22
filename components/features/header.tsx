"use client"

import Image from "next/image";
import { BackgroundLines } from "../ui/BackgroundLines";
import { FlipWords } from "../ui/FlipWords";
import { Spotlight } from "../ui/spotlight";
import { motion } from "motion/react"

export const Header = () => {
  const words = ["Frontend Developer", "Backend Developer", "Data Scientist", "AI Engineer", "Fullstack Developer"];

  return (
    <header className="text-white px-6 py-16">
      <div className="container mx-auto flex justify-around items-start flex-row flex-wrap relative">
      <Spotlight />
      <Spotlight />
        <div className="flex items-start space-x-4 flex-col  gap-2">
          <div>
            <h1 className="text-9xl font-bold">SURYA</h1>
          </div>
          <div>
            <h1 className="text-9xl font-bold">RAFLIANSYAH</h1>
          </div>
          <div>
            <div className="flex justify-center items-center">
              <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                I can handle it as{' '}<FlipWords words={words} /> <br />
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* <BackgroundLines className="bg-transparent"> */}
          {/* <div className="w-40 h-40 rounded-full bg-white"></div> */}
          <div>
            <Image
              src="/images/profile.png"
              alt="Surya Rafliansyah"
              width={300}
              height={300}
              className="rounded-full shadow-lg z-10"
              />
          </div>
          {/* </BackgroundLines> */}
        </div>
      </div>
    </header>
  );
};