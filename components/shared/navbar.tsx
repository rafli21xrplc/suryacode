import { Command } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { HoverBorderGradient } from "../ui/BorderButtom";

const variants = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/surya-rafli/",
  },
  {
    name: "Instagram",
    href: "/https://www.instagram.com/surya.rafliansyah?igsh=MXVuaG96MzUyNG41bQ==",
  }
];
export const Navbar = () => {
  return (
    <nav className="px-5 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white">
          <h1 className="font-bold text-2xl">SC</h1>
        </div>
        <div>
          <ul className="flex space-x-4">
            {variants.map((item) => (
              <li className="text-white" key={item.href}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            <Command className="h-4 w-4" />
            <span>Les't Talk</span>
          </HoverBorderGradient>
        </div>
      </div>
    </nav>
  );
};
