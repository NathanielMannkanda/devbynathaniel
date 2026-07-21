import MatrixCodeRain from "../componenets/MatrixCodeRain";
import { GridPattern } from "@/component/ui/grid-pattern";

import CatPfp from "../assets/images/coffee-cat.png";
import GithubLogo from "../assets/images/social-icons/github-logo.png";
import LinkedInLogo from "../assets/images/social-icons/linkedin-logo.png";
import EmailLogo from "../assets/images/social-icons/email-icon.png";
import WhattsappLogo from "../assets/images/social-icons/whattsapp-icon.png";

import WorkTracker from "../assets/images/thumbnails/work-tracker-thumbnail.png";
import Ecommerce from "../assets/images/thumbnails/e-commerce-thumbnail.png"
import Trill from "../assets/images/thumbnails/trill-boutique-thumbnail.png";
import Health from "../assets/images/thumbnails/health-tracker-thumbnail.png";

import Tailwind from "../assets/images/tech-icons/tailwind-icon.png";
import TypeScript from "../assets/images/tech-icons/typescript-icon.png";
import JavaScript from "../assets/images/tech-icons/javascript-icon.png";
import Photopea from "../assets/images/tech-icons/photopea.png";
import Firebase from "../assets/images/tech-icons/firebase-icon.png";
import React from "../assets/images/tech-icons/react-icon.png";

import CyberCity from "../assets/gifs/3d-cyber-city.gif"
import CatWalking from "../assets/gifs/cat-walking.gif"
import MentalCode from "../assets/gifs/mental-code.gif"

const RealHomePage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden ">
      <GridPattern />
      <MatrixCodeRain />

      <div className="relative z-10 flex flex-col xl:flex-row min-h-screen justify-center gap-3 p-5 md:items-center">
        {/*Left*/}
        <div className=" w-full xl:flex-1 max-w-150 h-150 xl:h-230">

          <div className="text-[#00ff41] text-3xl p-3 border-emerald-600 h-10 border flex items-center mb-3 bg-black">
            <p>
              Completed Tasks/ Project Portfolio
            </p>
          </div>

          <div className="border border-emerald-600 h-137 bg-black xl:h-216 xl:max-h-216 overflow-y-auto scrollbar-thin scrollbar-thumb-green-600 scrollbar-track-none p-5">
            
            <div className="text-[#00ff41] mb-5 pb-5 border-emerald-600 border-b">
              <a 
                href="https://trill-boutique.vercel.app/"
                target='_blank'
                >
                <img 
                  src={Trill}
                  alt=""
                  className="border border-emerald-600 p-2 mb-3" 
                  />
              </a>
              <h1 className="text-xl">
                Project: Trill Boutique
              </h1>
              <a className="text-[#01b92f] ml-2">
                July 2026
              </a>
              <p className="ml-4">
                  Technology used:
              </p>

              <div className="flex gap-3 mt-2 mb-2 justify-center">
                <div className="flex gap-2 border p-1 border-blue-600 text-blue-400">
                  <img 
                    src={React}
                    alt=""
                    className="h-6" 
                  />
                  <a>
                    React
                  </a>
                </div>

                <div className="flex gap-2 border p-1 border-green-400 text-green-300">
                  <img 
                    src={Photopea}
                    alt=""
                    className="h-6" 
                  />
                  <a>
                    Photopea
                  </a>
                </div>

                <div className="flex gap-2 border p-1 border-blue-600 text-blue-400">
                  <img 
                    src={TypeScript}
                    alt=""
                    className="h-6" 
                  />
                  <a>
                    TypeScript
                  </a>
                </div>

                <div className="flex gap-2 border p-1 border-blue-400 text-blue-200">
                  <img 
                    src={Tailwind}
                    alt=""
                    className="h-6" 
                  />
                  <a>
                    Tailwind
                  </a>
                </div>
              </div>
              <p>
                  Project Info:
              </p>
              <div className="pl-3">
                <p>
                  ■ I created a website that allows you to select between being a manager and a worker. Each Role has its own features.
                </p>

                <p>
                  ■ I used firebase as a backend that is able to store and update information.
                </p>
                <p>
                  ■ I used TailwindCSS to make a simple design as well as React for reusable components.
                </p>
              </div>
            </div>

            <div className="text-[#00ff41] mb-5 pb-5 border-emerald-600 border-b">
              <a 
                href="https://work-tracker-five-beta.vercel.app/"
                target='_blank'
                >
                <img 
                  src={WorkTracker}
                  alt=""
                  className="border border-emerald-600 p-2 mb-3" 
                  />
              </a>
              <h1 className="text-xl">
                Project: Work Tracker
              </h1>
              <a className="text-[#01b92f] ml-2">
                April 2026
              </a>
              <p className="ml-4">
                  Technology used:
              </p>

              <div className="flex gap-3 mt-2 mb-2 justify-center">
                <div className="flex gap-2 border p-1 border-blue-600 text-blue-400">
                  <img 
                    src={React}
                    alt=""
                    className="h-6" 
                  />
                  <a>
                    React
                  </a>
                </div>
                <div className="flex gap-2 border p-1 border-orange-600 text-orange-400">
                  <img 
                    src={Firebase}
                    alt=""
                    className="h-6" 
                  />
                  <a>
                    Firebase
                  </a>
                </div>

                <div className="flex gap-2 border p-1 border-blue-400 text-blue-200">
                  <img 
                    src={Tailwind}
                    alt=""
                    className="h-6" 
                  />
                  <a>
                    Tailwind
                  </a>
                </div>
              </div>
              <p>
                  Project Info:
              </p>
              <div className="pl-3">
                <p>
                  ■ I created a website that allows you to select between being a manager and a worker. Each Role has its own features.
                </p>

                <p>
                  ■ I used firebase as a backend that is able to store and update information.
                </p>
                <p>
                  ■ I used TailwindCSS to make a simple design as well as React for reusable components.
                </p>
              </div>
            </div>

            <div className="text-[#00ff41] mb-5 pb-5 border-emerald-600 border-b">
              <a 
                href="https://e-commerce-store-xi-five.vercel.app/"
                target='_blank'
                >
                <img 
                  src={Ecommerce}
                  alt=""
                  className="border border-emerald-600 p-2 mb-3" 
                  />
              </a>
              <h1 className="text-xl">
                Project: E-commerce
              </h1>
              <a className="text-[#01b92f] ml-2">
                Oct 2025 - Nov 2025
              </a>
              <p className="ml-4">
                  Technology used:
              </p>

              <div className="flex gap-3 mt-2 mb-2 justify-center">
                <div className="flex gap-2 border p-1 border-blue-600 text-blue-400">
                  <img 
                    src={React}
                    alt=""
                    className="h-6" 
                  />
                  <a>
                    React
                  </a>
                </div>
                <div className="flex gap-2 border p-1 border-blue-500 text-blue-400">
                  <img 
                    src={TypeScript}
                    alt=""
                    className="h-6" 
                  />
                  <a>
                    TypeScript
                  </a>
                </div>

                <div className="flex gap-2 border p-1 border-blue-400 text-blue-200">
                  <img 
                    src={Tailwind}
                    alt=""
                    className="h-6" 
                  />
                  <a>
                    Tailwind
                  </a>
                </div>
              </div>
              <p>
                  Project Info:
              </p>
              <div className="pl-3">
                <p>
                  ■ I created a interactive E-commerce site that can take an order and store it in the cart as.
                </p>

                <p>
                  ■ I used a TypeScript to help with production error handling and reduce work load in case of errors working with the api.
                </p>
                <p>
                  ■ I used React and Tailwind to style the website with reusable components.
                </p>
              </div>
            </div>

            <div className="text-[#00ff41] mb-5 pb-5 border-emerald-600 border-b">
              <a 
                href="https://health-tracker-five-ivory.vercel.app/"
                target='_blank'
                >
                <img 
                  src={Health}
                  alt=""
                  className="border border-emerald-600 p-2 mb-3" 
                  />
              </a>
              <h1 className="text-xl">
                Project: Health Tracker
              </h1>
              <a className="text-[#01b92f] ml-2">
                Oct 2025 - Nov 2025
              </a>
              <p className="ml-4">
                  Technology used:
              </p>

              <div className="flex gap-3 mt-2 mb-2 justify-center">
                <div className="flex gap-2 border p-1 border-blue-600 text-blue-400">
                  <img 
                    src={React}
                    alt=""
                    className="h-6" 
                  />
                  <a>
                    React
                  </a>
                </div>
                <div className="flex gap-2 border p-1 border-yellow-300 text-yellow-200">
                  <img 
                    src={JavaScript}
                    alt=""
                    className="h-6" 
                  />
                  <a>
                    JavaScript
                  </a>
                </div>

                <div className="flex gap-2 border p-1 border-blue-400 text-blue-200">
                  <img 
                    src={Tailwind}
                    alt=""
                    className="h-6" 
                  />
                  <a>
                    Tailwind
                  </a>
                </div>
              </div>
              <p>
                  Project Info:
              </p>
              <div className="pl-3">
                <p>
                  ■ I used a API with information on different patients to populate a page. The website isnt meant to be useable just a remake of a adobe design
                </p>

                <p>
                  ■ Using Tailwind to transform the page to a well presentable and stylish website
                </p>
                <p>
                  ■ I followed the design made with Adobe Xd to recreate the look of the website.
                </p>
              </div>
            </div>

            

          </div>

          
          
        </div>

        {/*Middle*/}
        <div className="w-150 h-full max-h-230 mr-3">
          <div className="border border-emerald-600 text-[#00ff41] w-full h-90 bg-black mb-3 p-3 flex flex-row">
            <img 
              src={CyberCity} 
              alt="" 
              className="h-full border mr-3 p-2 border-emerald-600"
              />
              <div className="flex flex-col justify-between">
              <img 
              src={CatWalking} 
              alt="" 
              className=" border p-2 border-emerald-600 w-fit"
              />

              <p className="text-xl font-bold">
                Welcome to the cyberworld
              </p>

              <img 
                src={MentalCode} 
                alt=""
                className="border p-2 border-emerald-600" 
                />
              </div>
          </div>

          <div className="border border-emerald-600 w-full h-90 bg-black mb-3">

          </div>

          <div className="border border-emerald-600 w-full h-43  bg-black">

          </div>
          
        </div>

        {/*Right*/}
        <div className="w-120 h-230 mr-3 overflow-clip">

          <div className="w-full h-30  mb-3 text-[#00ff41] flex items-center justify-center text-6xl">
          <p className="">
            DevByNathaniel
          </p>
          </div>

          <div className="border border-emerald-600 w-full h-30 bg-black mb-3 overflow-hidden flex items-center p-2">
              <div className="text-[#00ff41]">
                <p>
                  Title: Frontend Developer
                </p>
                <p>
                  Agent name: Nathaniel Mankanda
                </p>
                <p>
                  Socials:
                </p>
                <div className="flex flex-row gap-2">
                  <img 
                    src={EmailLogo} 
                    alt=""
                    className="h-8" 
                  />
                  <img 
                    src={WhattsappLogo} 
                    alt=""
                    className="h-8" 
                  />
                  <img 
                    src={GithubLogo} 
                    alt=""
                    className="h-8" 
                  />
                  <img 
                    src={LinkedInLogo} 
                    alt=""
                    className="h-8" 
                  />

                </div>
              </div>
              
              <img 
                src={CatPfp} 
                alt="" 
                className="h-25 ml-auto border-emerald-600 border"
              />

              
          </div>

          <div className="border border-emerald-600 w-full mt-3 h-40 bg-black mb-3">
          
          </div>

          <div className="border border-emerald-600 w-full mt-3 h-100 bg-black mb-3">
          
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default RealHomePage;