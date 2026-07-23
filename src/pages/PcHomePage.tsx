import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import MorpheusImg from "../assets/images/morpheus-choose.png"
import RecycleBinIcon from "../assets/pc-icons/recycle-bin-icon.png"
import GoogleLogo from "../assets/pc-icons/google_icon.png"
import EdgeLogo from "../assets/pc-icons/edge-logo.png"
import MyPC from "../assets/pc-icons/my-pc-icon.avif"
import WindowsIcon from "../assets/pc-icons/windows_11-icon.png"
import SearchIcon from "../assets/pc-icons/search-icon.png"
import VolumeIcon from "../assets/pc-icons/volume-icon.png"
import WifiIcon from "../assets/pc-icons/wifi-icon.png"
import BatteryIcon from "../assets/pc-icons/battery-icon.png"
import NotifIcon from "../assets/pc-icons/notification-icon.png"
import ExpandArrow from "../assets/pc-icons/expand-arrow.png"
import OutLook from "../assets/pc-icons/outlook-icon.png"
import FileExplorer from "../assets/pc-icons/file-icon.png"
import NewDesktop from "../assets/pc-icons/new-desktop-icon.png"
import Cat from "../assets/images/coffee-cat.png"

const PcHomePage: React.FC = () => {
  const [currentDateTime, setCurrentDateTime]
    = useState(new Date());
  const [showExplorerWindow, setShowExplorerWindow] = useState(false);
  const [showMyPCWindow, setShowMyPCWindow] = useState(false);
  const navigate = useNavigate();

  const pageRef = useRef<HTMLDivElement>(null);


  const [showMatrixChoice, setShowMatrixChoice] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const currentTime = currentDateTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  })
  const currentDate = `${currentDateTime.getFullYear()}/${String(
    currentDateTime.getMonth() + 1
  ).padStart(2, "0")}/${String(currentDateTime.getDate()).padStart(2, "0")}`;

  useGSAP(() => {
    gsap.from(".desktop-icon", {
      opacity: 0,
      y: -40,
      stagger: 0.1,
      duration: 0.6,
      ease: "back.out"
    });

    gsap.from(".taskbar", {
      y: 80,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });
  }, { scope: pageRef });

  if (showMatrixChoice) {
    return (
      <div className="w-screen h-screen bg-black flex flex-col items-center justify-center">

        <img
          src={MorpheusImg}
          className="w-125"
        />

        <h1 className="text-white text-4xl font-bold mt-8 mb-8">
          Choose wisely...
        </h1>

        <div className="flex gap-32">

          <button
            onClick={() => navigate("/redpill")}
            className="w-26 h-16 rounded-full bg-red-600 hover:bg-red-500 transition cursor-pointer"
          />

          <button
            onClick={() => setShowMatrixChoice(false)}
            className="w-26 h-16 rounded-full bg-blue-600 hover:bg-blue-500 transition cursor-pointer"
          />

        </div>

      </div>
    );
  }


  return (
    <div ref={pageRef}>

      <div className="flex flex-col overflow-hidden min-h-screen max-h-screen">
        <div
          className="w-full h-screen bg-[url('/pc-wallpaer.jpg')] bg-cover bg-center p-5 text-white"
        >
          <section className="flex flex-row gap-5 w-full">
            <div className=" flex flex-col items-center justify-center w-fit p-2 rounded-md border border-transparent hover:border-zinc-700 hover:bg-gray-500/20 cursor-pointer transition-all">
              <img
                src={RecycleBinIcon}
                alt=""
                className="w-20 desktop-icon"
              />
              <p className="">
                Recycle Bin
              </p>
            </div>

            <div
              onClick={() => setShowMatrixChoice(true)}
              className="flex flex-col items-center justify-center w-24.5 p-2 rounded-md border border-transparent hover:border-zinc-700 hover:bg-gray-500/20 cursor-pointer transition-all">
              <img
                src={GoogleLogo}
                alt=""
                className="w-17 mb-2 active:cursor-progress desktop-icon"
              />
              <p>
                Google
              </p>
            </div>

            <div
              onClick={() => setShowExplorerWindow(true)}
              className="flex flex-col items-center justify-center w-24.5 p-2 rounded-md border border-transparent hover:border-zinc-700 hover:bg-gray-500/20 cursor-pointer transition-all">
              <img
                src={EdgeLogo}
                alt=""
                className="w-20 desktop-icon"
              />
              <p>
                Edge
              </p>
            </div>
          </section>

          <section className="flex flex-row gap-5 w-full">
            <div 
              onClick={() => setShowMyPCWindow(true)}
              className="flex flex-col items-center justify-center w-24.5 p-2 rounded-md border border-transparent hover:border-zinc-700 hover:bg-gray-500/20 cursor-pointer transition-all">
              <img
                src={MyPC}
                alt=""
                className="w-20 desktop-icon"
              />
              <p className="">
                My PC
              </p>
            </div>

          </section>

        </div>

        {showExplorerWindow && (
          <>
            {/* Background overlay */}
            <div
              className="fixed inset-0 bg-black/20 z-40"
              onClick={() => setShowExplorerWindow(false)}
            />

            {/* Explorer Window */}
            <div className="fixed z-50 left-1/2 top-1/2 w-212.5 h-137.5 -translate-x-1/2 -translate-y-1/2 rounded-xl overflow-hidden shadow-2xl border border-zinc-600 bg-white">

              {/* Title Bar */}
              <div className="h-12 bg-zinc-900 flex items-center justify-between border-b border-zinc-300 px-4">

                <div className="flex items-center gap-3">
                  <img
                    src={EdgeLogo}
                    className="w-5 h-5"
                    alt=""
                  />
                  <span className="text-sm text-white font-medium">
                    Edge
                  </span>
                </div>

                {/* Window Buttons */}
                <div className="flex h-full">

                  <button 
                    onClick={() => setShowExplorerWindow(false)}
                    className="w-12 hover:bg-zinc-700 transition text-white">
                    —
                  </button>

                  <button className="w-12 hover:bg-zinc-700 transition text-white">
                    □
                  </button>

                  <button
                    onClick={() => setShowExplorerWindow(false)}
                    className="w-12 text-white hover:bg-red-600 hover:text-white transition"
                  >
                    ✕
                  </button>

                </div>
              </div>

              {/* Toolbar */}
              <div className="h-14 bg-[#fafafa] border-b border-zinc-200" />

              {/* Content */}
              <div className="flex items-center justify-center h-[calc(100%-104px)] bg-white">

                <h1 className="text-3xl font-semibold text-zinc-700 text-center">
                  You really use Explorer?... <br />
                  Go to Google.
                </h1>

              </div>

            </div>
          </>
        )}

        {showMyPCWindow && (
          <>
            {/* Background overlay */}
            <div
              className="fixed inset-0 bg-black/20 z-40"
              onClick={() => setShowMyPCWindow(false)}
            />

            {/* Explorer Window */}
            <div className="fixed z-50 left-1/2 top-1/2 w-212.5 h-137.5 -translate-x-1/2 -translate-y-1/2 rounded-xl overflow-hidden shadow-2xl border border-zinc-600 bg-white">

              {/* Title Bar */}
              <div className="h-12 bg-zinc-900 flex items-center justify-between border-b border-zinc-300 px-4">

                <div className="flex items-center gap-3">
                  <img
                    src={MyPC}
                    className="w-5 h-5"
                    alt=""
                  />
                  <span className="text-sm text-white font-medium">
                    MyPC
                  </span>
                </div>

                {/* Window Buttons */}
                <div className="flex h-full">

                  <button 
                    onClick={() => setShowMyPCWindow(false)}
                    className="w-12 hover:bg-zinc-700 transition text-white">
                    —
                  </button>

                  <button className="w-12 hover:bg-zinc-700 transition text-white">
                    □
                  </button>

                  <button
                    onClick={() => setShowMyPCWindow(false)}
                    className="w-12 text-white hover:bg-red-600 hover:text-white transition"
                  >
                    ✕
                  </button>

                </div>
              </div>

              {/* Toolbar */}
              <div className="h-14 bg-[#fafafa] border-b border-zinc-200" />

              {/* Content */}
              <div className="flex items-center justify-center h-[calc(100%-104px)] bg-white">

                <h1 className="text-3xl font-semibold text-zinc-700 text-center">
                  Thanks for taking time to check out my website <br />
                  Go to Google for a surprise :')
                </h1>

              </div>

            </div>
          </>
        )}

        <div className="taskbar w-full h-full max-h-15 bg-zinc-900 absolute bottom-0 border-t border-zinc-500 pl-5 pt-5 pb-5 pr-5 flex items-center justify-between">

          <div className="flex flex-row items-center">
            <img
              src={Cat}
              alt=""
              className="w-15 h-15"
            />
            <p className="text-white text-2xl">
              DevByNathaniel
            </p>
          </div>

          <div className="flex flex-row gap-2 items-center">
            <div className="hover:bg-gray-400/10 w-12 h-12 p-3 items-center justify-center flex rounded-sm">
              <img
                src={WindowsIcon}
                alt=""
                className="w-8 h-8 absolute"
              />
            </div>

            <button className="bg-zinc-700 rounded-4xl w-60 border border-zinc-500 text-zinc-300 flex h-10 justify-start items-center pl-3 pr-3 font-sans mr-5 ml-5">
              <img
                src={SearchIcon}
                alt=""
                className="w-5 mr-3"
              />
              <a>
                Search
              </a>
            </button>

            <div className="hover:bg-gray-400/10 w-12 h-12 p-3 items-center justify-center flex rounded-sm transition-all">
              <img
                src={NewDesktop}
                alt=""
                className="w-10 h-10 absolute"
              />
            </div>

            <div className="hover:bg-gray-400/10 w-12 h-12 p-3 items-center justify-center flex rounded-sm transition-all">
              <img
                src={FileExplorer}
                alt=""
                className="w-10 h-10 absolute"
              />
            </div>

            <div className="hover:bg-gray-400/10 w-12 h-12 p-3 items-center justify-center flex rounded-sm transition-all">
              <img
                src={GoogleLogo}
                alt=""
                className="w-8 h-8 absolute"
              />
            </div>

            <div className="hover:bg-gray-400/10 w-12 h-12 p-3 items-center justify-center flex rounded-sm transition-all">
              <img
                src={EdgeLogo}
                alt=""
                className="w-10 h-10 absolute"
              />
            </div>

            <div className="hover:bg-gray-400/10 w-12 h-12 p-3 items-center justify-center flex rounded-sm transition-all">
              <img
                src={OutLook}
                alt=""
                className="w-10 h-10 absolute"
              />
            </div>

          </div>

          <div className="flex flex-row items-center gap-3">

            <div className="hover:bg-gray-400/10 w-12 h-12  items-center justify-center flex rounded-sm transition-all flex-col text-white">
              <img
                src={ExpandArrow}
                alt=""
                className="w-5 invert rotate-180 "
              />
            </div>
            <div className="hover:bg-gray-400/10 w-12 h-12 p-3 items-center justify-center flex rounded-sm transition-all flex-col text-white">
              <p>
                ENG
              </p>
              <p>
                US
              </p>
            </div>
            <div className="hover:bg-gray-400/10 w-fit h-12 p-3 items-center justify-center flex rounded-sm transition-all flex-row text-white gap-2">
              <img
                src={WifiIcon}
                alt=""
                className="w-6 invert"
              />

              <img
                src={VolumeIcon}
                alt=""
                className="w-6 invert"
              />

              <img
                src={BatteryIcon}
                alt=""
                className="w-7 invert"
              />

            </div>

            <div className="hover:bg-gray-400/10 w-fit h-12 p-3 items-center justify-center flex rounded-sm transition-all flex-row  gap-2 text-white">
              <div>
                <p className="flex justify-end">
                  {currentTime}
                </p>
                <p>
                  {currentDate}
                </p>
              </div>
              <img
                src={NotifIcon}
                alt=""
                className="invert w-7"
              />
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default PcHomePage;