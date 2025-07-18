"use client"

import { BackgroundLines } from "../ui/BackgroundLines";
import { FlipWords } from "../ui/FlipWords";
import { Spotlight } from "../ui/spotlight";
import { motion } from "motion/react"

export const Header = () => {
  const words = ["Frontend Developer", "Backend Developer", "Data Scientist", "AI Engineer", "Fullstack Developer"];

  return (
    <header className="text-white px-6 py-16">
      <Spotlight />
      <Spotlight />
      <div className="container mx-auto flex justify-around items-start flex-row flex-wrap">
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
                as a{' '}<FlipWords words={words} /> <br />
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* <BackgroundLines className="bg-transparent"> */}
          <div className="w-40 h-40 rounded-full bg-white"></div>
          {/* </BackgroundLines> */}
        </div>
      </div>
    </header>
  );
};