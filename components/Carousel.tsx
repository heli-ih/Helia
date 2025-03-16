import { Carousel } from "@material-tailwind/react";

export function ProjectsCarousel() {
  return (
    <Carousel
      className="rounded-3xl border-x-2 border-indigo-300 mt-12"
      placeholder={<div>Projects</div>}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2 ">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-indigo-400" : "w-4 bg-indigo-400/50"
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
            src="https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/SkillSage.png?alt=media&token=b649fd63-c4c5-40a8-b68d-c2defe8fc91a"
            alt="SkillSage"
            className="h-full w-full object-cover opacity-35"
          />
        </div>
        <div className="absolute inset-0 grid h-full w-full items-end ">
          <div className="flex flex-col justify-center items-center mb-10 sm:mb-10 md:mb-10 text-gray-200 px-14 md:px-20">
            <span className="text-[12px] sm:text-lg md:text-2xl font-bold ">
              SkillSage
            </span>
            <span className="text-[10px] sm:text-xs md:text-lg font-semibold text-justify">
              An enterprise-grade test management system that offers
              comprehensive assessment capabilities. The platform features
              advanced security measures including TensorFlow.js monitoring,
              dual authentication, and automated test processing, while
              providing sophisticated analytics for performance tracking and
              reporting
            </span>
            <span className="text-indigo-300 text-[10px] sm:text-xs md:text-lg font-bold shadow-2xl">
              PHP, Laravel, PostgreSQL, Livewire, Tailwind CSS, Alpine.js,
              TensorFlow.js, Vite, Laravel Excel, PHPMailer, GeoIP
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
            src="https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/CUD-Nav.png?alt=media&token=f0e59167-6bfd-45b1-a61b-4245f8f8f4dd"
            alt="CUD Indoor map Navigator"
            className="h-full w-full object-cover opacity-35"
          />
        </div>
        <div className="absolute inset-0 grid h-full w-full items-end ">
          <div className="flex flex-col justify-center items-center mb-10 sm:mb-10 md:mb-10 text-gray-200 px-14 md:px-20">
            <span className="text-[12px] sm:text-lg md:text-2xl font-bold ">
              CUD Navigator
            </span>
            <span className="text-[10px] sm:text-xs md:text-lg font-semibold text-justify">
              Incorporating routing concepts from Next.js and working with .glb
              3D map to achieve an interactive indoor navigator for Canadian
              University Dubai
            </span>
            <span className="text-indigo-300 text-[10px] sm:text-xs md:text-lg font-bold shadow-2xl">
              NextJS, React, TailwindCSS, Prisma, PostgreSQL, React Three Fiber
            </span>
            <div>
              <a
                href="https://github.com/heli-ih/CUD-Navigator"
                target="_blank"
              >
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
            src="https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Food-Pickup.png?alt=media&token=4b0ce615-dc93-4fc1-b96d-fe5d1701e97e"
            alt="Food Pickup App"
            className="h-full w-full object-cover opacity-35"
          />
        </div>
        <div className="absolute inset-0 grid h-full w-full items-end ">
          <div className="flex flex-col justify-center items-center mb-10 sm:mb-10 md:mb-10 text-gray-200 px-14 md:px-20">
            <span className="text-[12px] sm:text-lg md:text-2xl font-bold">
              Fresh Food Pickup
            </span>
            <span className="text-[10px] sm:text-xs md:text-lg font-semibold text-justify">
              Developing an algorithm in dynamic priority queue that runs behind
              a user-centric React Native application aiming to optimize
              restaurant operations, focusing on resource efficiency,
              operational enhancements as well as enhancing user experience
            </span>
            <span className="text-indigo-300 text-[10px] sm:text-xs md:text-lg font-bold shadow-2xl">
              React Native, Typescript, Python, FastAPI, Firebase, Google Maps
              API, Figma
            </span>
            <div>
              <a
                href="https://github.com/CS-Graduation-Project"
                target="_blank"
              >
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

      {/* img 4 */}
      <div className="relative h-full w-full overflow-hidden">
        <div className="bg-gray-900 ">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/FoodGaurdian.png?alt=media&token=9d49e742-f8eb-4b42-889c-061b0c6e9328"
            alt="Food Guardian"
            className="h-full w-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 grid h-full w-full items-end ">
          <div className="flex flex-col justify-center items-center mb-10 sm:mb-10 md:mb-10 text-gray-200 px-14 md:px-20">
            <span className="text-[12px] sm:text-lg md:text-2xl font-bold">
              Food Guardian
            </span>
            <span className="text-[10px] sm:text-xs md:text-lg font-semibold text-justify">
              Created this app with features like food inventory management via
              manual entry, barcode scanning, and AI recognition, custom
              category management, and finding local food banks. The guide
              includes user profile navigation for tracking donations and
              earning badges, with clear support and feedback options
            </span>
            <span className="text-indigo-300 text-[10px] sm:text-xs md:text-lg font-bold shadow-2xl">
              React Native, Typescript, Nativewind, Firestore, Gemini API,
              Google Maps API, Figma
            </span>
            <div>
              <a href="https://github.com/heli-ih/FoodGaurdian" target="_blank">
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

      {/* img 5 */}
      <div className="relative h-full w-full overflow-hidden">
        <div className="bg-gray-900 ">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/CUD-Event-Management.png?alt=media&token=30d60421-22b3-416c-ba96-540d0dca2153"
            alt="CUD Event Management"
            className="h-full w-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 grid h-full w-full items-end ">
          <div className="flex flex-col justify-center items-center mb-10 sm:mb-10 md:mb-10 text-gray-200 px-14 md:px-20">
            <span className="text-[12px] sm:text-lg md:text-2xl font-bold">
              CUD Event Management
            </span>
            <span className="text-[10px] sm:text-xs md:text-lg font-semibold text-justify">
              This platform serves as a centralized hub for organizing,
              browsing, and registering for events within an education
              environment, hosted by various clubs, societies and workshop
              organizers
            </span>
            <span className="text-indigo-300 text-[10px] sm:text-xs md:text-lg font-bold shadow-2xl">
              Svelte, Typescript, SQLite, Prisma
            </span>
            <div>
              <a
                href="https://github.com/heli-ih/CUD-Event-Management"
                target="_blank"
              >
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
  );
}
