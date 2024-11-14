"use client";
import { ProjectsCarousel } from "@/components/Carousel";
import { Certifications } from "@/components/Certifications";
import { SideNavbar } from "@/components/SideNavbar";
import SocialPlatforms from "@/components/SocialPlatforms";
// import Triangle from "@/components/Triangle";
import { useState } from "react";

export default function Home() {
  const skills = [
    "React",
    "React Native",
    "NextJS",
    "SvelteKit",
    "Laravel11",
    "PHP",
    "JavaScript",
    "Typescript",
    "TailwindCSS",
    "MySQL",
    "PostgreSQL",
    "Prisma",
    "Bootstrap",
    "React3Fiber",
    "ThreeJS",
    "Python",
    "Github",
    "Figma",
    "Sketch",
    "Slack",
    "Trello",
    "Jira",
    "Confluence",
  ];

  const experiences = ["Milele", "Peekabox", "AccuMed"];

  const [clickedIndex, setClickedIndex] = useState<number>(0);

  function handleItemClick(Index: number) {
    setClickedIndex(Index);
  }

  return (
    <div className="font-NTR flex flex-col">
      {/* NAV BAR */}
      <nav className="sticky top-0 z-50 text-gray-200  bg-indigo-400 py-2">
        <div className="flex justify-center px-7 lg:px-40 md:px-20 sm:px-10">
          <SideNavbar />
          <a
            href="#"
            className="hover:text-white text-lg font-bold w-[97%] xl:w-[20%] lg:w-[20%] md:w-[20%] font-garamond"
          >
            Helia Haghighi
          </a>
          <div className="container flex flex-row items-center justify-end md:justify-between xl:w-[90%] lg:w-[80%] md:w-[80%] sm:w-[40%]">
            <div className="md:flex md:flex-row md:justify-evenly md:text-base md:font-medium  xl:w-[40%] lg:w-[50%] md:w-[60%]  hidden">
              <a href="#home" className="hover:text-white">
                Home
              </a>
              <a href="#about" className="hover:text-white">
                About
              </a>
              <a href="#projects" className="hover:text-white">
                Projects
              </a>
              <a href="#experiences" className="hover:text-white">
                Experiences
              </a>
              <a href="#certifications" className="hover:text-white">
                Certifications
              </a>
            </div>
            <SocialPlatforms />
          </div>
        </div>
      </nav>

      {/* HOME */}
      <div
        id="home"
        className="p-7 pt-20 lg:p-40 lg:pt-56 md:p-20 sm:p-10 sm:pt-16 flex flex-col items-center justify-between gap-3 bg-gradient-to-b from-indigo-400 to-80%"
      >
        <div className="flex flex-row text-4xl xl:text-7xl sm:text-5xl cursor-default">
          <p className="text-gray-200">
            <b className="text-indigo-400">Helia</b> here.
          </p>
          <p className="rounded ml-1 text-indigo-400 blink">|</p>
        </div>
        <span className="text-xl text-gray-400 mb-4 xl:text-4xl sm:text-2xl cursor-default">
          Driven by challenges, fueled by learning
        </span>
        <span className="text-m sm:text-xl text-justify xl:w-[70%] md:w-[90%] text-gray-400 mb-7 cursor-default">
          With a desire to solve problems through web app development. Bringing
          user-friendly products to the forefront, I'm sharpening my skills in
          full-stack development, especially front-end. Explore my GitHub
          projects to see my growth journey, and let's connect to craft
          something amazing together!
        </span>
        <button className="flex flex-row items-center p-2 xl:p-4 xl:text-2xl sm:text-lg text-indigo-400 rounded border border-indigo-400 hover:text-gray-100 hover:bg-indigo-400 hover:bg-opacity-15">
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
      <div id="about" className="p-7 lg:p-40 md:p-20 sm:p-10 cursor-default">
        <div className="inline-flex items-center justify-center font-bold text-2xl xl:text-5xl md:text-4xl sm:text-3xl ">
          <span className="text-gray-200">About me</span>
        </div>

        <div className="mt-12 text-gray-400 xl:flex xl:flex-row xl:items-center lg:items-start flex flex-col-reverse">
          <div className="xl:mr-6 text-justify text-m sm:text-xl">
            <p className="mb-5">
            Software Developer and UI/UX Designer with a Bachelor of Computer Science. My expertise spans enterprise solutions and user-centered design, continuously delivering innovative products that drive business impact.
            </p>
            <p className="mb-5">
              Here are technologies I have been working with:
            </p>
            <ul className="columns-4 gap-20 mb-10">
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
          <div className="w-[40%] xl:w-[80%] mb-7">
            <img
              src="Helia.jpg"
              alt="Helia Haghighi"
              className="rounded-lg shadow-xl border-2 border-indigo-300"
            />
          </div>
        </div>
      </div>

      {/* PROJECTS */}
      <div id="projects" className="p-7 lg:p-40 pb-12 md:p-20 sm:p-10">
        <div className="inline-flex items-center justify-center font-bold text-2xl xl:text-5xl md:text-4xl sm:text-3xl ">
          <span className="text-gray-200">Projects</span>
        </div>

        <ProjectsCarousel />
      </div>

      {/* Other Projects */}
      <div className="px-7 pb-20 lg:px-40 lg:pb-40 md:px-20 sm:px-10">
        <div className="w-full h-full grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {/* Rick & Morty  */}

          <div className="card p-8">
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
                <a href="https://rickandmorty-dc095.web.app" target="_blank">
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
                </a>
              </div>
            </div>
            <span className="text-xl md:text-2xl text-gray-200">
              Rick & Morty
            </span>
            <div className="flex flex-col justify-between h-full">
              <span className="">
                Utilizing the Rick & Morty API involves integrating external
                data to fetch and display dynamic information.
              </span>
              <span className="mt-[25%]">React, TailwindCSS</span>
            </div>
          </div>

          {/* Course Management */}
          <div className="card p-8">
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
              </div>
            </div>
            <span className="text-xl md:text-2xl text-gray-200">
              Course Management
            </span>
            <div className="flex flex-col justify-between h-full">
              <span className="">
                Implementing CRUD operations, utilizing Prisma as the ORM for
                migrations and querying, and leveraging the SheetJS library to
                extract useful data from spreadsheets.
              </span>
              <span className="mt-[15%]">
                React, NextJS, SheetJS, TailwindCSS, Postgress, Prisma
              </span>
            </div>
          </div>
          {/* Digitize Shop */}
          <div className="card p-8">
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
              </div>
            </div>
            <span className="text-xl md:text-2xl text-gray-200">
              Digitize Shop
            </span>
            <div className="flex flex-col justify-between h-full">
              <span className="">
                Creating responsive and adaptable for various screen sizes,
                user-friendly e-commerce website.
              </span>
              <span className="mt-[15%]">HTML, TailwindCSS</span>
            </div>
          </div>
          {/* Notepad */}

          <div className="card p-8">
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
                <a href="https://notepad-db048.web.app" target="_blank">
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
                </a>
              </div>
            </div>
            <span className="text-xl md:text-2xl text-gray-200">Notepad</span>
            <div className="flex flex-col justify-between h-full">
              <span className="">
                CRUD operations in React and incorporated Toasts, which are
                lightweight notifications designed to mimic push notifications.
              </span>
              <span className="mt-[11%]">HTML, React, CSS</span>
            </div>
          </div>
          {/* Resume Template */}
          <div className="card p-8">
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
                <a
                  href="https://resume-template-46b7e.firebaseapp.com"
                  target="_blank"
                >
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
                </a>
              </div>
            </div>
            <span className="text-xl md:text-2xl text-gray-200">
              Resume Template
            </span>
            <div className="flex flex-col justify-between h-full">
              <span>
                A resume template website styled with vanilla CSS to boost the
                speed and efficiency of individuals in creating professional
                resumes quickly and easily
              </span>
              <span className="mt-[30%]">HTML, JavaScript, CSS</span>
            </div>
          </div>
          {/* Todo List  */}
          <div className="card p-8">
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
                <a href="https://todo-list-8a83e.web.app/" target="_blank">
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
                </a>
              </div>
            </div>
            <span className="text-xl md:text-2xl text-gray-200">Todo List</span>
            <div className="flex flex-col justify-between h-full">
              <span className="">
                Todo list web app, designed to streamline task creation,
                organization, and tracking through vanilla JavaScript.
              </span>
              <span className="mt-[20%]">HTML, JavaScript, TailwindCSS</span>
            </div>
          </div>
        </div>
      </div>

      {/* EXPERIENCES */}
      <div id="experiences" className="p-7 lg:p-40 md:p-20 sm:p-10">
        <div className="inline-flex items-center justify-center font-bold text-2xl xl:text-5xl md:text-4xl sm:text-3xl ">
          <span className="text-gray-200">Experiences</span>
        </div>

        <div className="flex flex-col sm:flex-row  h-96 mt-12 text-gray-400">
          <div className=" sm:w-[30%] py-3">
            <ul className="h-full">
              {experiences.map((item, index) => (
                <li
                  key={index}
                  className={`px-5 pb-2 pt-3 cursor-pointer text-sm xl:text-lg md:text-m ${
                    clickedIndex === index
                      ? "border-l-2 border-y-2 border-indigo-400 text-white bg-indigo-400 bg-opacity-15 clickEffect w-[40%] sm:w-[100%]"
                      : ""
                  }`}
                  onClick={() => handleItemClick(index)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="h-full  sm:w-[70%] ">
            {/* Milele */}
            <div
              className={`pl-5 sm:pl-10 sm:pr-6  py-5 text-base rounded-lg border-l-2 border-indigo-400  ${
                clickedIndex !== 0 ? "hidden" : ""
              }`}
            >
              <div className="flex flex-col">
                <span className="text-lg xl:text-3xl md:text-2xl font-extrabold text-gray-200 ">
                  Software Developer @&nbsp;
                  <a
                    href="https://www.milele.com/"
                    target="_blank"
                    className="text-indigo-400"
                  >
                    Milele 
                  </a>
                </span>
                <span className="text-sm xl:text-lg md:text-m">
                  Oct 2024 - Present
                </span>
              </div>
              <ul className=" text-xs 2xl:w-[80%] sm:text-xs md:text-lg">
                <li className="flex flex-row mt-5 mb-2 text-justify">
                  <p className="text-indigo-400 mr-5">▹</p>
                  <p>
                    Engineered a secure testing platform with anti-cheating mechanisms leveraging Laravel 11.
                  </p>
                </li>
                <li className="flex flex-row mt-2 text-justify">
                  <p className="text-indigo-400 mr-5">▹</p>
                  <p>
                    Developed bulk question import system and invitation email infrastructure, reducing creation time by 60%.
                  </p>
                </li>
                <li className="flex flex-row mt-2 text-justify">
                  <p className="text-indigo-400 mr-5">▹</p>
                  <p>
                    Integrated TensorFlow.js for advanced anti-cheating detection, including tab switching and window blur monitoring, achieving 95% fraud prevention rate.
                  </p>
                </li>
                <li className="flex flex-row mt-2 text-justify">
                  <p className="text-indigo-400 mr-5">▹</p>
                  <p>
                    Implemented comprehensive time-based analytics dashboard, generating detailed performance metrics.
                  </p>
                </li>
                <li className="flex flex-row mt-2 text-justify">
                  <p className="text-indigo-400 mr-5">▹</p>
                  <p>
                    Developed a secure file storage system and session management, maintaining 80% data integrity.
                  </p>
                </li>
              </ul>
            </div>
            {/* Peekabox */}
            <div
              className={`pl-5 sm:pl-10 sm:pr-6  py-5 text-base rounded-lg border-l-2 border-indigo-400  ${
                clickedIndex !== 1 ? "hidden" : ""
              }`}
            >
              <div className="flex flex-col">
                <span className="text-lg xl:text-3xl md:text-2xl font-extrabold text-gray-200 ">
                  UI/UX Team Lead & Designer @&nbsp;
                  <a
                    href="https://www.linkedin.com/company/peekabox/mycompany/"
                    target="_blank"
                    className="text-indigo-400"
                  >
                    Peekabox
                  </a>
                </span>
                <span className="text-sm xl:text-lg md:text-m">
                  Oct 2024 - Present
                </span>
              </div>
              <ul className=" text-xs 2xl:w-[80%] sm:text-xs md:text-lg">
                <li className="flex flex-row mt-5 mb-2 text-justify">
                  <p className="text-indigo-400 mr-5">▹</p>
                  <p>
                    Spearheaded end-to-end user research and wireframing for SaaS products, improving user engagement metrics by implementing data-driven design solutions.
                  </p>
                </li>
                <li className="flex flex-row mt-2 text-justify">
                  <p className="text-indigo-400 mr-5">▹</p>
                  <p>
                    Created high-fidelity prototypes and design systems using Figma, conducting user testing sessions to optimize interface accessibility and user flows.                  </p>
                </li>
              </ul>
            </div>
            {/* AccuMed */}
            <div
              className={`pl-5 sm:pl-10 sm:pr-6  py-5 text-base rounded-lg border-l-2 border-indigo-400  ${
                clickedIndex !== 2 ? "hidden" : ""
              }`}
            >
              <div className="flex flex-col">
                <span className="text-lg xl:text-3xl md:text-2xl font-extrabold text-gray-200 ">
                  RPA Developer @&nbsp;
                  <a
                    href="http://www.accumed.sa"
                    target="_blank"
                    className="text-indigo-400"
                  >
                    AccuMed
                  </a>
                </span>
                <span className="text-sm xl:text-lg md:text-m">
                  Jun 2023 - Aug 2023
                </span>
              </div>
              <ul className=" text-xs 2xl:w-[80%] sm:text-xs md:text-lg">
                <li className="flex flex-row mt-5 mb-2 text-justify">
                  <p className="text-indigo-400 mr-5">▹</p>
                  <p>
                    Spearheaded the implementation of Robotic Process Automation (RPA) solutions, reducing human error by 25% and increasing work speed by 30% in daily operations.
                  </p>
                </li>
                <li className="flex flex-row mt-2 text-justify">
                  <p className="text-indigo-400 mr-5">▹</p>
                  <p>
                    Conducted comprehensive workflow analyses to identify and execute high-impact automation opportunities, enhancing overall operational efficiency.
                  </p>
                </li>
                <li className="flex flex-row mt-2 text-justify">
                  <p className="text-indigo-400 mr-5">▹</p>
                  <p>
                    Collaborated with cross-functional teams to gather requirements and align automation projects with organizational objectives, ensuring seamless integration of RPA solutions and web scrapping.
                  </p>
                </li>
                <li className="flex flex-row mt-2 text-justify">
                  <p className="text-indigo-400 mr-5">▹</p>
                  <p>
                    Developed and maintained detailed documentation for all RPA solutions, facilitating knowledge transfer and supporting long-term maintenance efforts.
                  </p>
                </li>
              </ul>
            </div>
            {/* <div
              className={`pl-10 pr-6 sm:px-10 py-5 text-base rounded-lg border-x-2 border-indigo-400 ${
                clickedIndex !== 1 ? "hidden" : ""
              }`}
            >
              <div className="flex flex-col">
                <span className="text-lg xl:text-3xl md:text-2xl font-extrabold text-gray-200 ">
                  Administrative Assistant @&nbsp;
                  <a
                    href="https://www.cud.ac.ae/"
                    target="_blank"
                    className="text-indigo-400"
                  >
                    CUD
                  </a>
                </span>
                <span className="text-sm xl:text-lg md:text-m">
                  Feb 2023 - Present
                </span>
              </div>
              <ul className="w-[85%] text-xs 2xl:w-[70%] sm:text-m">
                <li className="flex flex-row my-5 text-justify">
                  <p className="text-indigo-400 mr-5">▹</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                    veritatis nisi
                  </p>
                </li>
                <li className="flex flex-row my-5 text-justify">
                  <p className="text-indigo-400 mr-5">▹</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
              </ul>
            </div>
            <div
              className={`pl-10 pr-6 sm:px-10 py-5 text-base rounded-lg border-x-2 border-indigo-400 ${
                clickedIndex !== 2 ? "hidden" : ""
              }`}
            >
              <div className="flex flex-col">
                <span className="text-lg xl:text-3xl md:text-2xl font-extrabold text-gray-200 ">
                  Private Math Tutor -&nbsp;
                  <a className="text-indigo-400">Freelance</a>
                </span>
                <span className="text-sm xl:text-lg md:text-m">
                  Jun 2023 - Aug 2023
                </span>
              </div>
              <ul className="w-[85%] text-xs 2xl:w-[70%] sm:text-m">
                <li className="flex flex-row my-5 text-justify">
                  <p className="text-indigo-400 mr-5">▹</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                    veritatis nisi
                  </p>
                </li>
                <li className="flex flex-row my-5 text-justify">
                  <p className="text-indigo-400 mr-5">▹</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div id="certifications" className="p-7 lg:p-40 pb-12 md:p-20 sm:p-10">
        <div className="inline-flex items-center justify-center font-bold text-2xl xl:text-5xl md:text-4xl sm:text-3xl ">
          <span className="text-gray-200">Certifications</span>
        </div>

        <Certifications />
      </div>

      <footer>
        <p className="text-gray-700 ml-2">
          &copy; 2024 My Website. All rights reserved.
        </p>
      </footer>
      {/* <Triangle /> */}
    </div>
  );
}
