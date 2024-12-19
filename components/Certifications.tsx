import { useState } from "react";

export function Certifications() {
  const years = [2024, 2023, 2022, 2021];

  const [clickedIndex, setClickedIndex] = useState<number>(0);

  function handleItemClick(Index: number) {
    setClickedIndex(Index);
  }

  return (
    <div className="flex flex-col sm:flex-row mt-12 ">
      <div className=" sm:w-[10%] py-3">
        <ul className="h-full">
          {years.map((item, index) => (
            <li
              key={index}
              className={`px-5 pb-2 pt-3 cursor-pointer text-sm xl:text-lg md:text-m ${
                clickedIndex === index
                  ? "border-l-2 border-y-2 border-indigo-400 text-white bg-indigo-400 bg-opacity-15 clickEffect w-[40%] sm:w-[100%]"
                  : "text-white"
              }`}
              onClick={() => handleItemClick(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className=" sm:w-[90%]">
        {/* 2024 */}
        <div
          className={`${
            clickedIndex !== 0
              ? "hidden"
              : "w-full h-full grid lg:grid-cols-2 xl:grid-cols-3 gap-4 pl-5 sm:pl-10 sm:pr-6  py-5  rounded-lg border-l-2 border-indigo-400 "
          }`}
        >
          <div className="card">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2F2024%2FEthics%20in%20the%20Age%20of%20Generative%20AI.pdf?alt=media&token=19c68800-20ec-4817-96d1-0933f94551d8"
              alt="Ethics in the Age of Generative AI"
              className="w-full rounded-t-lg opacity-80"
            />
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-row items-center w-full mb-2 px-5">
                <span className="text-xl md:text-2xl text-gray-200">
                  Ethics in the Age of Generative AI
                </span>
              </div>
              <span className="mt-[10%] px-5 pb-5">December 2024</span>
            </div>
          </div>
          <div className="card">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2F2024%2FGenerative%20AI%20-The%20Evolution%20%20of%20Thoughtful%20Online.pdf?alt=media&token=75ea548f-9ceb-428e-9046-6daa1238a7a7"
              alt="Generative AI - The Evolution of Thoughtful Online"
              className="w-full rounded-t-lg opacity-80"
            />
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-row items-center w-full mb-2 px-5">
                <span className="text-xl md:text-2xl text-gray-200">
                  Generative AI - The Evolution of Thoughtful Online
                </span>
              </div>
              <span className="mt-[10%] px-5 pb-5">December 2024</span>
            </div>
          </div>
          <div className="card">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2F2024%2FGenerative%20AI%20for%20Business%20Leaders.pdf?alt=media&token=a79a1dda-a538-4473-a35e-b7b154069314"
              alt="Generative AI for Business Leaders"
              className="w-full rounded-t-lg opacity-80"
            />
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-row items-center w-full mb-2 px-5">
                <span className="text-xl md:text-2xl text-gray-200">
                  Generative AI for Business Leaders
                </span>
              </div>
              <span className="mt-[10%] px-5 pb-5">December 2024</span>
            </div>
          </div>
          <div className="card">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2F2024%2FGoogle_Cloud_Introduction_to_AI.pdf?alt=media&token=7a4a5ce0-2b1f-4759-8049-da620b3d9bf4"
              alt="Google Cloud - Introduction to AI"
              className="w-full rounded-t-lg opacity-80"
            />
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-row items-center w-full mb-2 px-5">
                <span className="text-xl md:text-2xl text-gray-200">
                  Google Cloud - Introduction to AI
                </span>
              </div>
              <span className="mt-[10%] px-5 pb-5">December 2024</span>
            </div>
          </div>
          <div className="card">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2F2024%2FLarge%20Language%20Models.pdf?alt=media&token=63787fd7-6d3e-4db4-a49e-be6c1fe3168d"
              alt="Google Cloud - Large Language Models"
              className="w-full rounded-t-lg opacity-80"
            />
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-row items-center w-full mb-2 px-5">
                <span className="text-xl md:text-2xl text-gray-200">
                  Google Cloud - Large Language Models
                </span>
              </div>
              <span className="mt-[10%] px-5 pb-5">December 2024</span>
            </div>
          </div>
          <div className="card">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2F2024%2FWhat%20Is%20Generative%20AI.pdf?alt=media&token=c78e10af-7363-4e76-b1c7-1e2a6230902a"
              alt="What Is Generative AI"
              className="w-full rounded-t-lg opacity-80"
            />
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-row items-center w-full mb-2 px-5">
                <span className="text-xl md:text-2xl text-gray-200">
                  What Is Generative AI?
                </span>
              </div>
              <span className="mt-[10%] px-5 pb-5">December 2024</span>
            </div>
          </div>
          <div className="card">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2FUOWD_Certificate_2024.png?alt=media&token=358bce80-24e9-4f31-beed-d4bedd573ffa"
              alt="UOWD Innovation Fair - Research"
              className="w-full rounded-t-lg opacity-80"
            />
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-row items-center w-full mb-2 px-5">
                <span className="text-xl md:text-2xl text-gray-200">
                  UOWD Innovation Fair - Research
                </span>
              </div>
              <span className="mt-[10%] px-5 pb-5">June 2024</span>
            </div>
          </div>
          <div className="card">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2FIEEE_Best_Software_Engineering_Project.pdf?alt=media&token=295ee156-c6b1-4355-aac5-570d388d648a"
              alt="IEEE Best Software Engineering Project"
              className="w-full rounded-t-lg"
            />
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-row items-center w-full mb-2 px-5">
                <span className="text-xl md:text-2xl text-gray-200">
                  IEEE Best Software Engineering Project
                </span>
              </div>
              <span className="px-5">
                A winner of the "The Best Software Engineering Project" for the
                "FoodGaurdian" project
              </span>
              <span className="mt-[10%] px-5 pb-5">June 2024</span>
            </div>
          </div>
          <div className="card">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2FZURC2024.png?alt=media&token=229e3148-60d6-4a61-9a8c-f2bd3dacc8b3"
              alt="Zayed University 15th Annual Undergraduate Research Conference
              on Applied Computing"
              className="w-full rounded-t-lg opacity-80"
            />
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-row items-center w-full mb-2 px-5">
                <span className="text-xl md:text-2xl text-gray-200">
                  Zayed University 15th Annual Undergraduate Research Conference
                  on Applied Computing
                </span>
              </div>
              <span className="px-5">
                A winner of the "The Best Poster Presentation" for the research
                and project titled "A Dynamic Priority Queue for Food Pickup
                Scheduling"
              </span>
              <span className="mt-[10%] px-5 pb-5">April 2024</span>
            </div>
          </div>
          <div className="card">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2FCUDResearch_Engineering_Day_2024.png?alt=media&token=e5c2e486-cc83-49b2-982b-f849f66b5b72"
              alt="CUD Engineering Project Showcase Competition"
              className="w-full rounded-t-lg"
            />
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-row items-center w-full mb-2 px-5">
                <span className="text-xl md:text-2xl text-gray-200">
                  CUD Engineering Project Showcase Competition
                </span>
              </div>
              <span className="px-5">
                A winner of the "The Best Research" category for the research
                and project titled "A Dynamic Priority Queue for Food Pickup
                Scheduling"
              </span>
              <span className="mt-[10%] px-5 pb-5">April 2024</span>
            </div>
          </div>
          <div className="card">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2FCUDNav_Engineering_Day_2024.png?alt=media&token=dbb635a2-f183-43d4-b5b1-879db6858d2d"
              alt="CUD Engineering Project Showcase Competition"
              className="w-full rounded-t-lg"
            />
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-row items-center w-full mb-2 px-5">
                <span className="text-xl md:text-2xl text-gray-200">
                  CUD Engineering Project Showcase Competition
                </span>
              </div>
              <span className="px-5">
                A winner of the "The Best Software" category for the project
                titled "CUD Navigator"
              </span>
              <span className="mt-[10%] px-5 pb-5">April 2024</span>
            </div>
          </div>
        </div>
        {/* 2023 */}
        <div
          className={`${
            clickedIndex !== 1
              ? "hidden"
              : "w-full h-full grid lg:grid-cols-2 xl:grid-cols-3 gap-4 pl-5 sm:pl-10 sm:pr-6  py-5  rounded-lg border-l-2 border-indigo-400 "
          }`}
        >
          <div className="card">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2FRIT%20Robotics%20Competition.png?alt=media&token=11f22865-c84a-4d3c-8c3f-4295b41fc4f5"
              alt="Emirates Robotics Competition"
              className="w-full rounded-t-lg opacity-80"
            />
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-row items-center w-full mb-2 px-5">
                <span className="text-xl md:text-2xl text-gray-200">
                  Emirates Robotics Competition
                </span>
              </div>
              <span className="mt-[10%] px-5 pb-5">March 2023</span>
            </div>
          </div>
          <div className="card">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2FICPC.png?alt=media&token=dfe10622-e0c0-494f-b1bd-2f3b7d127728"
              alt="CUD ICPC"
              className="w-full rounded-t-lg"
            />
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-row items-center w-full mb-2 px-5">
                <span className="text-xl md:text-2xl text-gray-200">
                  CUD ICPC
                </span>
              </div>
              <span className="mt-[10%] px-5 pb-5">April 2023</span>
            </div>
          </div>
          <div className="card">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2FCUD_Projects_Showcase_2023.png?alt=media&token=534cacf1-5608-4676-9e31-1a02c049380e"
              alt="CUD Engineering Project Showcase Competition"
              className="w-full rounded-t-lg"
            />
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-row items-center w-full mb-2 px-5">
                <span className="text-xl md:text-2xl text-gray-200">
                  CUD Engineering Project Showcase Competition
                </span>
              </div>
              <span className=" px-5">
                A winner of the "Project Showcase and Posters Competition" for
                the project titled "CUD Navigator"
              </span>
              <span className="mt-[10%] px-5 pb-5">April 2023</span>
            </div>
          </div>
          <div className="card">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2FMeta%20-%20Programming%20with%20JavaScript.png?alt=media&token=a877d3d3-c844-4aed-96b9-6254d851c010"
              alt="Meta Programming with JavaScript"
              className="w-full rounded-t-lg opacity-80"
            />
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-row items-center w-full mb-2 px-5">
                <span className="text-xl md:text-2xl text-gray-200">
                  Meta Programming with JavaScript
                </span>
              </div>
              <span className="mt-[10%] px-5 pb-5">May 2023</span>
            </div>
          </div>
          <div className="card">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2FIEEE_Innovation_Competition.png?alt=media&token=e2e7d358-6609-4d1d-82b5-599035b6044d"
              alt="SKYLINE University College Innovation Competition"
              className="w-full rounded-t-lg opacity-85"
            />
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-row items-center w-full mb-2 px-5">
                <span className="text-xl md:text-2xl text-gray-200">
                  SKYLINE University College Innovation Competition
                </span>
              </div>
              <span className="mt-[10%] px-5 pb-5">May 2023</span>
            </div>
          </div>
          <div className="card">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2FSQL.png?alt=media&token=4c24720a-cf43-491a-b14b-da70cc3c7d11"
              alt="IBM - SQL: A Practical Introduction for Querying Databases"
              className="w-full rounded-t-lg opacity-80"
            />
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-row items-center w-full mb-2 px-5">
                <span className="text-xl md:text-2xl text-gray-200">
                  IBM - SQL: A Practical Introduction for Querying Databases
                </span>
              </div>
              <span className="mt-[10%] px-5 pb-5">July 2023</span>
            </div>
          </div>
          <div className="card">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2FAcademic_Excellence.png?alt=media&token=08f88b74-94bb-4bfb-98f6-4e0f723eb08f"
              alt="Certificate of Academic Excellence"
              className="w-full rounded-t-lg"
            />
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-row items-center w-full mb-2 px-5">
                <span className="text-xl md:text-2xl text-gray-200">
                  Certificate of Academic Excellence
                </span>
              </div>
              <span className="mt-[10%] px-5 pb-5">September 2023</span>
            </div>
          </div>
        </div>
        {/* 2022 */}
        <div
          className={`${
            clickedIndex !== 2
              ? "hidden"
              : "w-full h-full grid lg:grid-cols-2 xl:grid-cols-3 gap-4 pl-5 sm:pl-10 sm:pr-6  py-5  rounded-lg border-l-2 border-indigo-400 "
          }`}
        >
          <div className="card">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2Fnybl.png?alt=media&token=65524097-4f2d-4ce8-b252-403374d3b472"
              alt="Volunteering with nybl at Gitex Global Dubai"
              className="w-full rounded-t-lg opacity-80"
            />
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-row items-center w-full mb-2 px-5">
                <span className="text-xl md:text-2xl text-gray-200">
                  Volunteering with nybl at Gitex Global Dubai
                </span>
              </div>
              <span className="mt-[10%] px-5 pb-5">October 2022</span>
            </div>
          </div>
          <div className="card">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2FCUD_Global_Entrepreneurship_Week.png?alt=media&token=e378bec4-1719-46e8-a70a-3326fc3dcf0f"
              alt="CUD Global Entrepreneurship Week"
              className="w-full rounded-t-lg"
            />
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-row items-center w-full mb-2 px-5">
                <span className="text-xl md:text-2xl text-gray-200">
                  CUD Global Entrepreneurship Week
                </span>
              </div>
              <span className="mt-[10%] px-5 pb-5">November 2022</span>
            </div>
          </div>
        </div>
        {/* 2021 */}
        <div
          className={`${
            clickedIndex !== 3
              ? "hidden"
              : "w-full h-full grid lg:grid-cols-2 xl:grid-cols-3 gap-4 pl-5 sm:pl-10 sm:pr-6  py-5  rounded-lg border-l-2 border-indigo-400 "
          }`}
        >
          <div className="card">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/personal-website-b36c3.appspot.com/o/Certifications%2FWeb_Design_Certification.png?alt=media&token=a187f74a-373f-471f-aba9-ab4d3dd7d656"
              alt="Web Design Certificate"
              className="w-full rounded-t-lg"
            />
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-row items-center w-full mb-2 px-5">
                <span className="text-xl md:text-2xl text-gray-200">
                  Web Design Certificate
                </span>
              </div>
              <span className="mt-[10%] px-5 pb-5">December 2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
