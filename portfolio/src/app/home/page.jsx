"use client";

import Image from "next/image";
import Link from "next/link";
import Slideshow from "@/components/v1/slideshow";
export default function Home() {
  return (
    <div className="bg-[#121212] min-h-screen p-4 md:p-6 lg:p-8 text-[#e6ddd1]">
      <div className="max-w-7xl mx-auto flex flex-col h-screen">
        {/* Navigation */}
        <nav className="flex justify-between items-center bg-[#1c1c1c] rounded-full px-6 py-3 mb-4 md:mb-6 lg:mb-8">
          <div className="text-xl md:text-2xl font-light">DJ LIZA</div>
          <div className="space-x-4 md:space-x-6 text-xs md:text-sm">
            <Link href="/about" className="hover:underline">
              ABOUT
            </Link>
            <Link href="/weddings" className="hover:underline">
              WEDDINGS
            </Link>
            <Link href="/contact" className="hover:underline">
              CONTACT
            </Link>
          </div>
        </nav>

        {/* Main content grid */}
        <div className="border-2 border-red-600 grid grid-cols-1  lg:grid-cols-12 gap-4 md:gap-6 flex-grow">
          {/* Left column */}
          <div className="border-2 border-green-600 lg:col-span-5 space-y-4 md:space-y-6 flex flex-col">
            {/* beige box */}
            <div className="bg-[#e6ddd1] border-4 border-blue-600  text-[#121212] p-6 md:p-8 rounded-2xl relative flex-grow">
              <div className="absolute top-4 border-4 border-blue-600 right-4 md:top-6 md:right-6">
                <Image
                  src="/placeholder.svg"
                  alt="Decorative icon"
                  width={24}
                  height={24}
                  className="md:w-8 md:h-8"
                />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
                Creating Web Solutions Tailored for Your Needs
                <em className="font-normal not-italic">magic</em> for your
                special day
              </h1>
            </div>

            {/* passionate box */}
            <div className="bg-[#1c1c1c] p-4 md:p-6 rounded-2xl border-4 border-blue-600">
              <p className="text-xs md:text-sm leading-relaxed">
                I am a passionate web developer with expertise in creating
                seamless web experiences powered by cloud technologies. From
                crafting dynamic front-end designs to implementing robust
                back-end systems, I turn ideas into reality
              </p>
            </div>

            {/* Get in touch box */}
            <div className="border-4 border-blue-600 bg-[#1c1c1c] p-4 md:p-6 rounded-2xl flex items-center justify-between mt-auto">
              <span className="text-xl md:text-2xl lg:text-3xl font-light">
                Get in touch
              </span>
              <Image
                src="/placeholder.svg"
                alt="Arrow icon"
                width={20}
                height={20}
                className="md:w-6 md:h-6"
              />
            </div>
          </div>

          {/* Center column */}
          <div
            className="lg:col-span-4 md:row-span-1 lg:row-span-1 
          order-first md:order-none 
          border-2 border-green-600"
          >
            <div className="bg-[#1c1c1c] rounded-2xl overflow-hidden h-full max-h-[50vh] md:max-h-full">
              {/* <Image
                src="/placeholder.svg"
                alt="DJ Liza"
                width={400}
                height={800}
                className="w-full h-full object-cover"
              /> */}
              <Slideshow />
            </div>
          </div>

          {/* Right column */}
          <div className=" lg:col-span-3 border-4 border-green-600 space-y-4 md:space-y-6 flex flex-col">
            <div className="bg-[#1c1c1c] border-4 border-blue-600 p-4 md:p-6 rounded-2xl flex-grow">
              <div className="flex justify-between items-center mb-3 md:mb-4">
                <h2 className="text-base md:text-lg font-light">First Dance</h2>
                <Image
                  src="/placeholder.svg"
                  alt="Expand"
                  width={16}
                  height={16}
                  className="md:w-5 md:h-5"
                />
              </div>
              <div className="relative pt-[75%]">
                <Image
                  src="/placeholder.svg"
                  alt="First Dance"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* 2nd */}
            <div className="bg-[#1c1c1c]  border-4 border-blue-600 p-4 md:p-6 rounded-2xl space-y-3 md:space-y-4">
              <h3 className="text-xs md:text-sm font-light pb-2 border-b border-[#e6ddd1]/20">
                Cocktail Hour
              </h3>
              <h3 className="text-xs md:text-sm font-light pb-2 border-b border-[#e6ddd1]/20">
                Dinner Music
              </h3>
              <h3 className="text-xs md:text-sm font-light">After Party</h3>
            </div>
            <div className="bg-[#1c1c1c] border-4 border-blue-600 p-3 md:p-4 rounded-2xl mt-auto">
              <div className="flex justify-between text-[10px] md:text-xs">
                <Link href="https://instagram.com" className="hover:underline">
                  INSTAGRAM
                </Link>
                <Link href="https://twitter.com" className="hover:underline">
                  TWITTER
                </Link>
                <Link href="https://pinterest.com" className="hover:underline">
                  PINTEREST
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
