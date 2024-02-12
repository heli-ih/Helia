"use client";
import Triangle from "@/components/Triangle";
import { Carousel } from "@material-tailwind/react";
import { useState } from "react";

export default function Home() {
  const skills = [
    "React",
    "NextJS",
    "JavaScript",
    "Typescript",
    "TailwindCSS",
    "PostgreSQL",
    "Prisma",
    "Bootstrap",
    "ThreeJS",
    "React3Fiber",
    "Python",
    "Java",
    "C",
    "Figma",
    "Github",
  ];

  const experiences = ["ACCUMED", "CANADIAN UNIVERSITY DUBAI", "FREELANCER"];

  const [clickedIndex, setClickedIndex] = useState<number>(0);

  function handleItemClick(Index: number) {
    setClickedIndex(Index);
  }

  return (
    <div className="font-NTR">
      {/* NAV BAR */}
      <nav className=" text-gray-200  bg-indigo-400 pt-4">
        <div className="flex justify-center px-40">
          <a
            href="#"
            className="hover:text-white text-lg font-bold w-[7%] md:w-[15%] 2xl:w-[16%]"
          >
            Helia Haghighi
          </a>
          <div className="container flex flex-row items-center justify-between">
            <div className="flex flex-row justify-evenly text-base font-medium w-[27%] md:w-[35%] 2xl:w-[30%] ">
              <a href="#home" className="hover:text-white">
                Home
              </a>
              <a href="#about" className="hover:text-white">
                About
              </a>
              <a href="#experiences" className="hover:text-white">
                Experiences
              </a>
              <a href="#projects" className="hover:text-white">
                Projects
              </a>
            </div>
            <div className="flex flex-row justify-evenly items-center w-[15%]">
              <a href="mailto:heliaa.haghighi@gmail.com" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="19"
                  height="19"
                  className="fill-gray-200 hover:fill-white"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/helia-haghighi-3a9a99166/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="15"
                  height="15"
                  viewBox="0,0,255.99263,255.99263"
                  className="fill-gray-200 hover:fill-white"
                >
                  <g transform="scale(9.84615,9.84615)">
                    <path d="M21.125,0h-16.25c-2.69141,0 -4.875,2.18359 -4.875,4.875v16.25c0,2.69141 2.18359,4.875 4.875,4.875h16.25c2.69141,0 4.875,-2.18359 4.875,-4.875v-16.25c0,-2.69141 -2.18359,-4.875 -4.875,-4.875zM8.03906,22.07031h-4.03906l-0.02344,-12.09375h4.03906zM5.91797,8.39453h-0.02344c-1.32031,0 -2.17187,-0.91016 -2.17187,-2.04297c0,-1.16016 0.87891,-2.03906 2.22266,-2.03906c1.34375,0 2.16797,0.87891 2.19531,2.03906c0,1.13281 -0.85547,2.04297 -2.22266,2.04297zM22.04297,22.07031h-4.07422v-6.57031c0,-1.58984 -0.42187,-2.67187 -1.84375,-2.67187c-1.08594,0 -1.67187,0.73047 -1.95312,1.4375c-0.10547,0.25391 -0.13281,0.60156 -0.13281,0.95703v6.84766h-4.09375l-0.02344,-12.09375h4.09375l0.02344,1.70703c0.52344,-0.80859 1.39453,-1.95312 3.48047,-1.95312c2.58594,0 4.51953,1.6875 4.51953,5.31641v7.02344z"></path>
                  </g>
                </svg>
              </a>
              <a href="https://github.com/heli-ih" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="19"
                  height="19"
                  viewBox="0,0,255.99263,255.99263"
                  className="fill-gray-200 hover:fill-white"
                >
                  <g transform="scale(10.66667,10.66667)">
                    <path d="M10.9,2.1c-4.6,0.5 -8.3,4.2 -8.8,8.7c-0.5,4.7 2.2,8.9 6.3,10.5c0.3,0.1 0.6,-0.1 0.6,-0.5v-1.6c0,0 -0.4,0.1 -0.9,0.1c-1.4,0 -2,-1.2 -2.1,-1.9c-0.1,-0.4 -0.3,-0.7 -0.6,-1c-0.3,-0.1 -0.4,-0.1 -0.4,-0.2c0,-0.2 0.3,-0.2 0.4,-0.2c0.6,0 1.1,0.7 1.3,1c0.5,0.8 1.1,1 1.4,1c0.4,0 0.7,-0.1 0.9,-0.2c0.1,-0.7 0.4,-1.4 1,-1.8c-2.3,-0.5 -4,-1.8 -4,-4c0,-1.1 0.5,-2.2 1.2,-3c-0.1,-0.2 -0.2,-0.7 -0.2,-1.4c0,-0.4 0,-0.9 0.2,-1.3c0,-0.2 0.2,-0.3 0.3,-0.3h0.1c0.5,0.1 1.5,0.4 2.4,1.3c0.6,-0.2 1.3,-0.3 2,-0.3c0.7,0 1.4,0.1 2,0.3c0.9,-0.9 2,-1.2 2.5,-1.3h0.1c0.2,0 0.3,0.1 0.4,0.3c0,0.4 0,0.9 0,1.3c0,0.8 -0.1,1.2 -0.2,1.4c0.7,0.8 1.2,1.8 1.2,3c0,2.2 -1.7,3.5 -4,4c0.6,0.5 1,1.4 1,2.3v2.6c0,0.3 0.3,0.6 0.7,0.5c3.7,-1.5 6.3,-5.1 6.3,-9.3c0,-6 -5.1,-10.7 -11.1,-10z"></path>
                  </g>
                </svg>
              </a>
              <a href="callto:+9713746059" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="18"
                  height="18"
                  viewBox="0,0,255.99263,255.99263"
                  className="fill-gray-200 hover:fill-white"
                >
                  <g transform="scale(5.12,5.12)">
                    <path d="M14,3.99023c-5.51133,0 -10,4.48867 -10,10v22c0,5.51133 4.48867,10 10,10h22c5.51133,0 10,-4.48867 10,-10v-22c0,-5.51133 -4.48867,-10 -10,-10zM18.00586,12.0332c0.628,0.027 1.20473,0.38083 1.55273,0.92383c0.396,0.618 1.01055,1.57712 1.81055,2.82813c0.73,1.141 0.78091,2.61469 0.12891,3.80469l-1.46484,2.08398c-0.396,0.564 -0.47498,1.28588 -0.20898,1.92188c0.414,0.99 1.21658,2.5115 2.64258,3.9375c1.426,1.426 2.9475,2.22858 3.9375,2.64258c0.636,0.266 1.35788,0.18702 1.92188,-0.20898l2.08398,-1.46484c1.19,-0.652 2.66369,-0.60009 3.80469,0.12891c1.251,0.8 2.21012,1.41455 2.82813,1.81055c0.543,0.348 0.89683,0.92473 0.92383,1.55273c0.154,3.564 -2.60716,5.00781 -3.41016,5.00781c-0.556,0 -7.2403,0.7597 -14.7793,-6.7793c-7.539,-7.539 -6.7793,-14.2233 -6.7793,-14.7793c0,-0.803 1.44381,-3.56416 5.00781,-3.41016z"></path>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* HOME */}
      <div
        id="home"
        className="p-40 pt-56 flex flex-col items-center justify-between gap-3 bg-gradient-to-b from-indigo-400 to-80%"
      >
        <div className="flex flex-row text-7xl">
          <p className="text-gray-200">
            hi, <b className="text-indigo-400">Helia</b> here.
          </p>
          <p className="rounded ml-1 text-indigo-400 blink">|</p>
        </div>
        <span className="text-4xl text-gray-400 mb-4">
          Driven by challenges, fueled by learning
        </span>
        <span className="text-xl text-justify w-[70%] text-gray-400 mb-7">
          With a desire to solve problems through web app development. Bringing
          user-friendly products to the forefront, I'm sharpening my skills in
          full-stack development, especially front-end. Explore my GitHub
          projects to see my growth journey, and let's connect to craft
          something amazing together!
        </span>
        <button className="flex flex-row items-center text-2xl text-indigo-400 rounded border border-indigo-400 hover:text-gray-100 hover:bg-indigo-400 hover:bg-opacity-15 py-4 px-6 ">
          <a href="mailto:heliaa.haghighi@gmail.com" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="19"
              height="19"
              className="fill-indigo-400 mr-2"
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
          </a>
          Say hi!
        </button>
      </div>

      {/* ABOUT ME */}
      <div id="about" className="p-40">
        <div className="inline-flex items-center justify-center  font-bold text-5xl ">
          <span className="text-gray-200">&gt; About me</span>
        </div>
        <hr className="h-px w-[23%] border-none bg-indigo-400 rounded opacity-40" />

        <div className="flex flex-row items-center mt-12 text-gray-400">
          <div className="mr-6 text-justify text-xl">
            <p className="mb-5">
              I am currently in the final year of my CS degree, at{" "}
              <a
                href="https://www.cud.ac.ae"
                target="_blank"
                className="text-indigo-400"
              >
                Canadian University Dubai
              </a>
              . Beyond academic pursuits, I actively engage in coding
              competitions and work on my personal projects, continuously
              seeking challenges to refine my skills.
            </p>
            <p className="mb-5">
              Here are technologies I have been working with:
            </p>
            <ul className="columns-3 gap-20 mb-10">
              {skills.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-row text-base hover:text-white"
                >
                  <p className="text-indigo-400 mr-2">▹</p>
                  {item}
                </li>
              ))}
            </ul>
            <p>
              My goal? To contribute to the industry by building impactful
              products that make a positive difference, no matter how small.
            </p>
          </div>
          <div className="mx-5 ">
            <img
              src="Helia.jpg"
              alt="Helia Haghighi"
              className="rounded-lg shadow-xl border-2 border-indigo-300"
            />
          </div>
        </div>
      </div>

      {/* EXPERIENCES */}
      <div id="experiences" className="p-40">
        <div className="inline-flex items-center justify-center  font-bold text-5xl ">
          <span className="text-gray-200">&gt; Experiences</span>
        </div>
        <hr className="h-px w-[27%] border-none bg-indigo-400 rounded opacity-40" />

        <div className="flex flex-row text-base h-96 text-gray-400">
          <div className="font-medium w-[30%] mt-14">
            <ul className="h-full">
              {experiences.map((item, index) => (
                <li
                  key={index}
                  className={`px-5 pb-2 pt-3 cursor-pointer ${
                    clickedIndex === index
                      ? " border-l-2 border-y-2 border-indigo-400 text-white bg-indigo-400 bg-opacity-15 clickEffect"
                      : ""
                  }`}
                  onClick={() => handleItemClick(index)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 h-full w-[70%] ">
            <div
              className={`pl-12 py-6 text-base rounded-lg border-x-2 border-indigo-400  ${
                clickedIndex !== 0 ? "hidden" : ""
              }`}
            >
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold text-gray-200 ">
                  RPA Developer @&nbsp;
                  <a
                    href="http://www.accumed.sa/home"
                    target="_blank"
                    className="text-indigo-400"
                  >
                    Accumed
                  </a>
                </span>
                <span className=" text-lg">Jun 2023 - Aug 2023</span>
              </div>
              <ul className="w-[85%] 2xl:w-[70%]">
                <li className="flex flex-row my-5 text-justify">
                  <p className="text-indigo-400 mr-5">▹</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                    veritatis nisi cumque voluptatum rerum. Consectetur corrupti
                    beatae architecto itaque debitis? Facilis ducimus
                  </p>
                </li>
                <li className="flex flex-row my-5 text-justify">
                  <p className="text-indigo-400 mr-5">▹</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                    veritatis nisi
                  </p>
                </li>
              </ul>
            </div>
            <div
              className={`pl-12 py-6 text-base rounded-lg border-x-2 border-indigo-400 ${
                clickedIndex !== 1 ? "hidden" : ""
              }`}
            >
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold text-gray-200 ">
                  Administrative Assistant @&nbsp;
                  <a
                    href="https://www.cud.ac.ae/"
                    target="_blank"
                    className="text-indigo-400"
                  >
                    CUD
                  </a>
                </span>
                <span className=" text-lg">Feb 2023 - Present</span>
              </div>
              <ul className="w-[85%] 2xl:w-[70%]">
                <li className="flex flex-row my-5 text-justify">
                  <p className="text-indigo-400 mr-5">▹</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                    veritatis nisi cumque voluptatum rerum. Consectetur corrupti
                    beatae architecto itaque debitis? Facilis ducimus
                  </p>
                </li>
                <li className="flex flex-row my-5 text-justify">
                  <p className="text-indigo-400 mr-5">▹</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                    veritatis nisi
                  </p>
                </li>
              </ul>
            </div>
            <div
              className={`pl-12 py-6 text-base rounded-lg border-x-2 border-indigo-400 ${
                clickedIndex !== 2 ? "hidden" : ""
              }`}
            >
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold text-gray-200 ">
                  Private Math Tutor -&nbsp;
                  <a className="text-indigo-400">Freelance</a>
                </span>
                <span className=" text-lg">Jun 2023 - Aug 2023</span>
              </div>
              <ul className="w-[85%] 2xl:w-[70%]">
                <li className="flex flex-row my-5 text-justify">
                  <p className="text-indigo-400 mr-5">▹</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                    veritatis nisi cumque voluptatum rerum. Consectetur corrupti
                    beatae architecto itaque debitis? Facilis ducimus
                  </p>
                </li>
                <li className="flex flex-row my-5 text-justify">
                  <p className="text-indigo-400 mr-5">▹</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                    veritatis nisi
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* PROJECTS */}
      <div id="projects" className="p-40 pb-12">
        <div className="inline-flex items-center justify-center  font-bold text-5xl ">
          <span className="text-gray-200">&gt; Projects</span>
        </div>
        <hr className="h-px w-[20%] border-none bg-indigo-400 rounded opacity-40 mb-12" />

        <Carousel
          className="rounded-3xl border-x-2 border-indigo-300"
          placeholder={<div>Projects</div>}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2 ">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i
                      ? "w-8 bg-indigo-400"
                      : "w-4 bg-indigo-400/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          {/* img 1 */}
          <div className="relative h-full w-full overflow-hidden">
            <div className="bg-gray-900 ">
              <img
                src="CUD-Nav.png"
                alt="CUD Indoor map Navigator"
                className="h-full w-full object-cover opacity-35"
              />
            </div>
            <div className="absolute inset-0 grid h-full w-full items-end ">
              <div className="flex flex-col justify-center items-center gap-1 mb-16 text-gray-200">
                <span className="text-2xl bold ">CUD Navigator</span>
                <span>
                  Interactive indoor map for Canadian University Dubai
                </span>
                <span className="text-indigo-300">
                  NextJS, React, TailwindCSS, Prisma, PostgreSQL, React Three
                  Fiber
                </span>
                <div>
                  <a href="https://github.com/heli-ih" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="19"
                      height="19"
                      viewBox="0,0,255.99263,255.99263"
                      className="fill-gray-200"
                    >
                      <g transform="scale(10.66667,10.66667)">
                        <path d="M10.9,2.1c-4.6,0.5 -8.3,4.2 -8.8,8.7c-0.5,4.7 2.2,8.9 6.3,10.5c0.3,0.1 0.6,-0.1 0.6,-0.5v-1.6c0,0 -0.4,0.1 -0.9,0.1c-1.4,0 -2,-1.2 -2.1,-1.9c-0.1,-0.4 -0.3,-0.7 -0.6,-1c-0.3,-0.1 -0.4,-0.1 -0.4,-0.2c0,-0.2 0.3,-0.2 0.4,-0.2c0.6,0 1.1,0.7 1.3,1c0.5,0.8 1.1,1 1.4,1c0.4,0 0.7,-0.1 0.9,-0.2c0.1,-0.7 0.4,-1.4 1,-1.8c-2.3,-0.5 -4,-1.8 -4,-4c0,-1.1 0.5,-2.2 1.2,-3c-0.1,-0.2 -0.2,-0.7 -0.2,-1.4c0,-0.4 0,-0.9 0.2,-1.3c0,-0.2 0.2,-0.3 0.3,-0.3h0.1c0.5,0.1 1.5,0.4 2.4,1.3c0.6,-0.2 1.3,-0.3 2,-0.3c0.7,0 1.4,0.1 2,0.3c0.9,-0.9 2,-1.2 2.5,-1.3h0.1c0.2,0 0.3,0.1 0.4,0.3c0,0.4 0,0.9 0,1.3c0,0.8 -0.1,1.2 -0.2,1.4c0.7,0.8 1.2,1.8 1.2,3c0,2.2 -1.7,3.5 -4,4c0.6,0.5 1,1.4 1,2.3v2.6c0,0.3 0.3,0.6 0.7,0.5c3.7,-1.5 6.3,-5.1 6.3,-9.3c0,-6 -5.1,-10.7 -11.1,-10z"></path>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* img 2 */}
          <div className="relative h-full w-full overflow-hidden">
            <div className="bg-gray-900 ">
              <img
                src="Food-Pickup.png"
                alt="Food Pickup App"
                className="h-full w-full object-cover opacity-25"
              />
            </div>
            <div className="absolute inset-0 grid h-full w-full items-end ">
              <div className="flex flex-col justify-center items-center mb-16 text-gray-200">
                <span className="text-2xl bold ">Food Pickup</span>
                <span>
                  A food ordering application designated for pickup services
                </span>
                <span className="text-indigo-300">
                  React Native, Typescript, Firebase
                </span>
                <div>
                  <a href="https://github.com/heli-ih" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="19"
                      height="19"
                      viewBox="0,0,255.99263,255.99263"
                      className="fill-gray-200"
                    >
                      <g transform="scale(10.66667,10.66667)">
                        <path d="M10.9,2.1c-4.6,0.5 -8.3,4.2 -8.8,8.7c-0.5,4.7 2.2,8.9 6.3,10.5c0.3,0.1 0.6,-0.1 0.6,-0.5v-1.6c0,0 -0.4,0.1 -0.9,0.1c-1.4,0 -2,-1.2 -2.1,-1.9c-0.1,-0.4 -0.3,-0.7 -0.6,-1c-0.3,-0.1 -0.4,-0.1 -0.4,-0.2c0,-0.2 0.3,-0.2 0.4,-0.2c0.6,0 1.1,0.7 1.3,1c0.5,0.8 1.1,1 1.4,1c0.4,0 0.7,-0.1 0.9,-0.2c0.1,-0.7 0.4,-1.4 1,-1.8c-2.3,-0.5 -4,-1.8 -4,-4c0,-1.1 0.5,-2.2 1.2,-3c-0.1,-0.2 -0.2,-0.7 -0.2,-1.4c0,-0.4 0,-0.9 0.2,-1.3c0,-0.2 0.2,-0.3 0.3,-0.3h0.1c0.5,0.1 1.5,0.4 2.4,1.3c0.6,-0.2 1.3,-0.3 2,-0.3c0.7,0 1.4,0.1 2,0.3c0.9,-0.9 2,-1.2 2.5,-1.3h0.1c0.2,0 0.3,0.1 0.4,0.3c0,0.4 0,0.9 0,1.3c0,0.8 -0.1,1.2 -0.2,1.4c0.7,0.8 1.2,1.8 1.2,3c0,2.2 -1.7,3.5 -4,4c0.6,0.5 1,1.4 1,2.3v2.6c0,0.3 0.3,0.6 0.7,0.5c3.7,-1.5 6.3,-5.1 6.3,-9.3c0,-6 -5.1,-10.7 -11.1,-10z"></path>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* img 3 */}
          <div className="relative h-full w-full overflow-hidden">
            <div className="bg-gray-900 ">
              <img
                src="Household-Food-Waste-Management.png"
                alt="Household Food Waste Management App"
                className="h-full w-full object-cover opacity-65"
              />
            </div>
            <div className="absolute inset-0 grid h-full w-full items-end ">
              <div className="flex flex-col justify-center items-center mb-16 text-gray-200">
                <span className="text-2xl bold  font-NTR">
                  Household Food Waste Management
                </span>
                <span>
                  Providing digital solutions to reduce food waste and monitor
                  their expiry dates
                </span>
                <span className="text-indigo-300">React Native, Firebase</span>
                <div>
                  <a href="https://github.com/heli-ih" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="19"
                      height="19"
                      viewBox="0,0,255.99263,255.99263"
                      className="fill-gray-200"
                    >
                      <g transform="scale(10.66667,10.66667)">
                        <path d="M10.9,2.1c-4.6,0.5 -8.3,4.2 -8.8,8.7c-0.5,4.7 2.2,8.9 6.3,10.5c0.3,0.1 0.6,-0.1 0.6,-0.5v-1.6c0,0 -0.4,0.1 -0.9,0.1c-1.4,0 -2,-1.2 -2.1,-1.9c-0.1,-0.4 -0.3,-0.7 -0.6,-1c-0.3,-0.1 -0.4,-0.1 -0.4,-0.2c0,-0.2 0.3,-0.2 0.4,-0.2c0.6,0 1.1,0.7 1.3,1c0.5,0.8 1.1,1 1.4,1c0.4,0 0.7,-0.1 0.9,-0.2c0.1,-0.7 0.4,-1.4 1,-1.8c-2.3,-0.5 -4,-1.8 -4,-4c0,-1.1 0.5,-2.2 1.2,-3c-0.1,-0.2 -0.2,-0.7 -0.2,-1.4c0,-0.4 0,-0.9 0.2,-1.3c0,-0.2 0.2,-0.3 0.3,-0.3h0.1c0.5,0.1 1.5,0.4 2.4,1.3c0.6,-0.2 1.3,-0.3 2,-0.3c0.7,0 1.4,0.1 2,0.3c0.9,-0.9 2,-1.2 2.5,-1.3h0.1c0.2,0 0.3,0.1 0.4,0.3c0,0.4 0,0.9 0,1.3c0,0.8 -0.1,1.2 -0.2,1.4c0.7,0.8 1.2,1.8 1.2,3c0,2.2 -1.7,3.5 -4,4c0.6,0.5 1,1.4 1,2.3v2.6c0,0.3 0.3,0.6 0.7,0.5c3.7,-1.5 6.3,-5.1 6.3,-9.3c0,-6 -5.1,-10.7 -11.1,-10z"></path>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>

      {/* other projects */}
      <div className="px-40 pb-40">
        <div className="w-full h-full grid grid-cols-3 gap-4">
          <div className="project-card">
            <div className="flex flex-row justify-between items-center w-full mb-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#5F6BBA"
                  className="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"
                  />
                </svg>
              </div>
              <div className="flex flex-row gap-2">
                <a
                  href="https://github.com/heli-ih/Rick-Morty.git"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="22"
                    height="22"
                    viewBox="0,0,255.99263,255.99263"
                    className="fill-gray-200"
                  >
                    <g transform="scale(10.66667,10.66667)">
                      <path d="M10.9,2.1c-4.6,0.5 -8.3,4.2 -8.8,8.7c-0.5,4.7 2.2,8.9 6.3,10.5c0.3,0.1 0.6,-0.1 0.6,-0.5v-1.6c0,0 -0.4,0.1 -0.9,0.1c-1.4,0 -2,-1.2 -2.1,-1.9c-0.1,-0.4 -0.3,-0.7 -0.6,-1c-0.3,-0.1 -0.4,-0.1 -0.4,-0.2c0,-0.2 0.3,-0.2 0.4,-0.2c0.6,0 1.1,0.7 1.3,1c0.5,0.8 1.1,1 1.4,1c0.4,0 0.7,-0.1 0.9,-0.2c0.1,-0.7 0.4,-1.4 1,-1.8c-2.3,-0.5 -4,-1.8 -4,-4c0,-1.1 0.5,-2.2 1.2,-3c-0.1,-0.2 -0.2,-0.7 -0.2,-1.4c0,-0.4 0,-0.9 0.2,-1.3c0,-0.2 0.2,-0.3 0.3,-0.3h0.1c0.5,0.1 1.5,0.4 2.4,1.3c0.6,-0.2 1.3,-0.3 2,-0.3c0.7,0 1.4,0.1 2,0.3c0.9,-0.9 2,-1.2 2.5,-1.3h0.1c0.2,0 0.3,0.1 0.4,0.3c0,0.4 0,0.9 0,1.3c0,0.8 -0.1,1.2 -0.2,1.4c0.7,0.8 1.2,1.8 1.2,3c0,2.2 -1.7,3.5 -4,4c0.6,0.5 1,1.4 1,2.3v2.6c0,0.3 0.3,0.6 0.7,0.5c3.7,-1.5 6.3,-5.1 6.3,-9.3c0,-6 -5.1,-10.7 -11.1,-10z"></path>
                    </g>
                  </svg>
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 22 22"
                  stroke-width="1.5"
                  stroke="#EEEEEE"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </div>
            </div>
            <span className="text-2xl text-gray-200">Rick & Morty</span>
            <span>
              Using Rick & Morty API to display information related to this
              series.
            </span>
            <span className="mt-[25%]">React, TailwindCSS</span>
          </div>
          <div className="project-card">
            <div className="flex flex-row justify-between items-center w-full mb-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#5F6BBA"
                  className="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"
                  />
                </svg>
              </div>
              <div className="flex flex-row gap-2">
                <a
                  href="https://github.com/heli-ih/CLO-PLO-managment-CRUD.git"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="22"
                    height="22"
                    viewBox="0,0,255.99263,255.99263"
                    className="fill-gray-200"
                  >
                    <g transform="scale(10.66667,10.66667)">
                      <path d="M10.9,2.1c-4.6,0.5 -8.3,4.2 -8.8,8.7c-0.5,4.7 2.2,8.9 6.3,10.5c0.3,0.1 0.6,-0.1 0.6,-0.5v-1.6c0,0 -0.4,0.1 -0.9,0.1c-1.4,0 -2,-1.2 -2.1,-1.9c-0.1,-0.4 -0.3,-0.7 -0.6,-1c-0.3,-0.1 -0.4,-0.1 -0.4,-0.2c0,-0.2 0.3,-0.2 0.4,-0.2c0.6,0 1.1,0.7 1.3,1c0.5,0.8 1.1,1 1.4,1c0.4,0 0.7,-0.1 0.9,-0.2c0.1,-0.7 0.4,-1.4 1,-1.8c-2.3,-0.5 -4,-1.8 -4,-4c0,-1.1 0.5,-2.2 1.2,-3c-0.1,-0.2 -0.2,-0.7 -0.2,-1.4c0,-0.4 0,-0.9 0.2,-1.3c0,-0.2 0.2,-0.3 0.3,-0.3h0.1c0.5,0.1 1.5,0.4 2.4,1.3c0.6,-0.2 1.3,-0.3 2,-0.3c0.7,0 1.4,0.1 2,0.3c0.9,-0.9 2,-1.2 2.5,-1.3h0.1c0.2,0 0.3,0.1 0.4,0.3c0,0.4 0,0.9 0,1.3c0,0.8 -0.1,1.2 -0.2,1.4c0.7,0.8 1.2,1.8 1.2,3c0,2.2 -1.7,3.5 -4,4c0.6,0.5 1,1.4 1,2.3v2.6c0,0.3 0.3,0.6 0.7,0.5c3.7,-1.5 6.3,-5.1 6.3,-9.3c0,-6 -5.1,-10.7 -11.1,-10z"></path>
                    </g>
                  </svg>
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 22 22"
                  stroke-width="1.5"
                  stroke="#EEEEEE"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </div>
            </div>
            <span className="text-2xl text-gray-200">Course Management</span>
            <span>
              Creating Courses, manually or from a xlsx file with their
              corresponding "Course Learning Outcomes".
            </span>
            <span className="mt-[15%]">
              React, NextJS, TailwindCSS, Postgress, Prisma
            </span>
          </div>
          <div className="project-card">
            <div className="flex flex-row justify-between items-center w-full mb-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#5F6BBA"
                  className="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"
                  />
                </svg>
              </div>
              <div className="flex flex-row gap-2">
                <a
                  href="https://github.com/heli-ih/Digitize-Shop.git"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="22"
                    height="22"
                    viewBox="0,0,255.99263,255.99263"
                    className="fill-gray-200"
                  >
                    <g transform="scale(10.66667,10.66667)">
                      <path d="M10.9,2.1c-4.6,0.5 -8.3,4.2 -8.8,8.7c-0.5,4.7 2.2,8.9 6.3,10.5c0.3,0.1 0.6,-0.1 0.6,-0.5v-1.6c0,0 -0.4,0.1 -0.9,0.1c-1.4,0 -2,-1.2 -2.1,-1.9c-0.1,-0.4 -0.3,-0.7 -0.6,-1c-0.3,-0.1 -0.4,-0.1 -0.4,-0.2c0,-0.2 0.3,-0.2 0.4,-0.2c0.6,0 1.1,0.7 1.3,1c0.5,0.8 1.1,1 1.4,1c0.4,0 0.7,-0.1 0.9,-0.2c0.1,-0.7 0.4,-1.4 1,-1.8c-2.3,-0.5 -4,-1.8 -4,-4c0,-1.1 0.5,-2.2 1.2,-3c-0.1,-0.2 -0.2,-0.7 -0.2,-1.4c0,-0.4 0,-0.9 0.2,-1.3c0,-0.2 0.2,-0.3 0.3,-0.3h0.1c0.5,0.1 1.5,0.4 2.4,1.3c0.6,-0.2 1.3,-0.3 2,-0.3c0.7,0 1.4,0.1 2,0.3c0.9,-0.9 2,-1.2 2.5,-1.3h0.1c0.2,0 0.3,0.1 0.4,0.3c0,0.4 0,0.9 0,1.3c0,0.8 -0.1,1.2 -0.2,1.4c0.7,0.8 1.2,1.8 1.2,3c0,2.2 -1.7,3.5 -4,4c0.6,0.5 1,1.4 1,2.3v2.6c0,0.3 0.3,0.6 0.7,0.5c3.7,-1.5 6.3,-5.1 6.3,-9.3c0,-6 -5.1,-10.7 -11.1,-10z"></path>
                    </g>
                  </svg>
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 22 22"
                  stroke-width="1.5"
                  stroke="#EEEEEE"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </div>
            </div>
            <span className="text-2xl text-gray-200">Digitize Shop</span>
            <span>
              An electronics shopping website designed adaptable for various
              screen sizes, Frontend developer.
            </span>
            <span className="mt-[15%]">HTML, TailwindCSS</span>
          </div>
          <div className="project-card">
            <div className="flex flex-row justify-between items-center w-full mb-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#5F6BBA"
                  className="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"
                  />
                </svg>
              </div>
              <div className="flex flex-row gap-2">
                <a
                  href="https://github.com/heli-ih/NotePad.git"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="22"
                    height="22"
                    viewBox="0,0,255.99263,255.99263"
                    className="fill-gray-200"
                  >
                    <g transform="scale(10.66667,10.66667)">
                      <path d="M10.9,2.1c-4.6,0.5 -8.3,4.2 -8.8,8.7c-0.5,4.7 2.2,8.9 6.3,10.5c0.3,0.1 0.6,-0.1 0.6,-0.5v-1.6c0,0 -0.4,0.1 -0.9,0.1c-1.4,0 -2,-1.2 -2.1,-1.9c-0.1,-0.4 -0.3,-0.7 -0.6,-1c-0.3,-0.1 -0.4,-0.1 -0.4,-0.2c0,-0.2 0.3,-0.2 0.4,-0.2c0.6,0 1.1,0.7 1.3,1c0.5,0.8 1.1,1 1.4,1c0.4,0 0.7,-0.1 0.9,-0.2c0.1,-0.7 0.4,-1.4 1,-1.8c-2.3,-0.5 -4,-1.8 -4,-4c0,-1.1 0.5,-2.2 1.2,-3c-0.1,-0.2 -0.2,-0.7 -0.2,-1.4c0,-0.4 0,-0.9 0.2,-1.3c0,-0.2 0.2,-0.3 0.3,-0.3h0.1c0.5,0.1 1.5,0.4 2.4,1.3c0.6,-0.2 1.3,-0.3 2,-0.3c0.7,0 1.4,0.1 2,0.3c0.9,-0.9 2,-1.2 2.5,-1.3h0.1c0.2,0 0.3,0.1 0.4,0.3c0,0.4 0,0.9 0,1.3c0,0.8 -0.1,1.2 -0.2,1.4c0.7,0.8 1.2,1.8 1.2,3c0,2.2 -1.7,3.5 -4,4c0.6,0.5 1,1.4 1,2.3v2.6c0,0.3 0.3,0.6 0.7,0.5c3.7,-1.5 6.3,-5.1 6.3,-9.3c0,-6 -5.1,-10.7 -11.1,-10z"></path>
                    </g>
                  </svg>
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 22 22"
                  stroke-width="1.5"
                  stroke="#EEEEEE"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </div>
            </div>
            <span className="text-2xl text-gray-200">Notepad</span>
            <span>
              A notepad web app offers a seamless and accessible platform for
              users to effortlessly jot down, organize, and access their notes
              from any device
            </span>
            <span className="mt-[11%]">HTML, TailwindCSS, JavaScript</span>
          </div>
          <div className="project-card">
            <div className="flex flex-row justify-between items-center w-full mb-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#5F6BBA"
                  className="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"
                  />
                </svg>
              </div>
              <div className="flex flex-row gap-2">
                <a
                  href="https://github.com/heli-ih/Resume-Website.git"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="22"
                    height="22"
                    viewBox="0,0,255.99263,255.99263"
                    className="fill-gray-200"
                  >
                    <g transform="scale(10.66667,10.66667)">
                      <path d="M10.9,2.1c-4.6,0.5 -8.3,4.2 -8.8,8.7c-0.5,4.7 2.2,8.9 6.3,10.5c0.3,0.1 0.6,-0.1 0.6,-0.5v-1.6c0,0 -0.4,0.1 -0.9,0.1c-1.4,0 -2,-1.2 -2.1,-1.9c-0.1,-0.4 -0.3,-0.7 -0.6,-1c-0.3,-0.1 -0.4,-0.1 -0.4,-0.2c0,-0.2 0.3,-0.2 0.4,-0.2c0.6,0 1.1,0.7 1.3,1c0.5,0.8 1.1,1 1.4,1c0.4,0 0.7,-0.1 0.9,-0.2c0.1,-0.7 0.4,-1.4 1,-1.8c-2.3,-0.5 -4,-1.8 -4,-4c0,-1.1 0.5,-2.2 1.2,-3c-0.1,-0.2 -0.2,-0.7 -0.2,-1.4c0,-0.4 0,-0.9 0.2,-1.3c0,-0.2 0.2,-0.3 0.3,-0.3h0.1c0.5,0.1 1.5,0.4 2.4,1.3c0.6,-0.2 1.3,-0.3 2,-0.3c0.7,0 1.4,0.1 2,0.3c0.9,-0.9 2,-1.2 2.5,-1.3h0.1c0.2,0 0.3,0.1 0.4,0.3c0,0.4 0,0.9 0,1.3c0,0.8 -0.1,1.2 -0.2,1.4c0.7,0.8 1.2,1.8 1.2,3c0,2.2 -1.7,3.5 -4,4c0.6,0.5 1,1.4 1,2.3v2.6c0,0.3 0.3,0.6 0.7,0.5c3.7,-1.5 6.3,-5.1 6.3,-9.3c0,-6 -5.1,-10.7 -11.1,-10z"></path>
                    </g>
                  </svg>
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 22 22"
                  stroke-width="1.5"
                  stroke="#EEEEEE"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </div>
            </div>
            <span className="text-2xl text-gray-200">Resume Template</span>
            <span>A resume template website, Frontend developer.</span>
            <span className="mt-[30%]">HTML, CSS, JavaScript</span>
          </div>
          <div className="project-card">
            <div className="flex flex-row justify-between items-center w-full mb-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#5F6BBA"
                  className="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"
                  />
                </svg>
              </div>
              <div className="flex flex-row gap-2">
                <a
                  href="https://github.com/heli-ih/Todolist.git"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="22"
                    height="22"
                    viewBox="0,0,255.99263,255.99263"
                    className="fill-gray-200"
                  >
                    <g transform="scale(10.66667,10.66667)">
                      <path d="M10.9,2.1c-4.6,0.5 -8.3,4.2 -8.8,8.7c-0.5,4.7 2.2,8.9 6.3,10.5c0.3,0.1 0.6,-0.1 0.6,-0.5v-1.6c0,0 -0.4,0.1 -0.9,0.1c-1.4,0 -2,-1.2 -2.1,-1.9c-0.1,-0.4 -0.3,-0.7 -0.6,-1c-0.3,-0.1 -0.4,-0.1 -0.4,-0.2c0,-0.2 0.3,-0.2 0.4,-0.2c0.6,0 1.1,0.7 1.3,1c0.5,0.8 1.1,1 1.4,1c0.4,0 0.7,-0.1 0.9,-0.2c0.1,-0.7 0.4,-1.4 1,-1.8c-2.3,-0.5 -4,-1.8 -4,-4c0,-1.1 0.5,-2.2 1.2,-3c-0.1,-0.2 -0.2,-0.7 -0.2,-1.4c0,-0.4 0,-0.9 0.2,-1.3c0,-0.2 0.2,-0.3 0.3,-0.3h0.1c0.5,0.1 1.5,0.4 2.4,1.3c0.6,-0.2 1.3,-0.3 2,-0.3c0.7,0 1.4,0.1 2,0.3c0.9,-0.9 2,-1.2 2.5,-1.3h0.1c0.2,0 0.3,0.1 0.4,0.3c0,0.4 0,0.9 0,1.3c0,0.8 -0.1,1.2 -0.2,1.4c0.7,0.8 1.2,1.8 1.2,3c0,2.2 -1.7,3.5 -4,4c0.6,0.5 1,1.4 1,2.3v2.6c0,0.3 0.3,0.6 0.7,0.5c3.7,-1.5 6.3,-5.1 6.3,-9.3c0,-6 -5.1,-10.7 -11.1,-10z"></path>
                    </g>
                  </svg>
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 22 22"
                  stroke-width="1.5"
                  stroke="#EEEEEE"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </div>
            </div>
            <span className="text-2xl text-gray-200">Todo List</span>
            <span>
              Todo list web app, designed to streamline task creation,
              organization, and tracking.
            </span>
            <span className="mt-[20%]">HTML, TailwindCSS, Javascript</span>
          </div>
        </div>
      </div>

      {/* <Triangle /> */}
    </div>
  );
}
