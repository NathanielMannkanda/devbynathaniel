import { useEffect, useState } from "react"
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

const PcHomePage: React.FC = () => {
  const [currentDateTime, setCurrentDateTime] 
    = useState(new Date());

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
  return(
    <div className="flex flex-col overflow-hidden min-h-screen max-h-screen">
      <div
        className="w-full h-screen bg-[url('/pc-wallpaer.jpg')] bg-cover bg-center p-5 text-white"
       >
        <section className="flex flex-row gap-5 w-full">
          <div className="flex flex-col items-center justify-center w-24.5 p-2 rounded-md border border-transparent hover:border-zinc-700 hover:bg-gray-500/20 cursor-pointer transition-all">
          <img 
            src={RecycleBinIcon}
            alt=""
            className="w-20" 
            />
            <p>
              Recycle Bin
            </p>
          </div>

          <div className="flex flex-col items-center justify-center w-24.5 p-2 rounded-md border border-transparent hover:border-zinc-700 hover:bg-gray-500/20 cursor-pointer transition-all">
          <img 
            src={GoogleLogo}
            alt=""
            className="w-17 mb-2" 
            />
            <p>
              Google
            </p>
          </div>

          <div className="flex flex-col items-center justify-center w-24.5 p-2 rounded-md border border-transparent hover:border-zinc-700 hover:bg-gray-500/20 cursor-pointer transition-all">
          <img 
            src={EdgeLogo}
            alt=""
            className="w-20" 
            />
            <p>
              Edge
            </p>
          </div>
        </section>

        <section className="flex flex-row gap-5 w-full">
          <div className="flex flex-col items-center justify-center w-24.5 p-2 rounded-md border border-transparent hover:border-zinc-700 hover:bg-gray-500/20 cursor-pointer transition-all">
          <img 
            src={MyPC}
            alt=""
            className="w-20" 
            />
            <p className="">
              My PC
            </p>
          </div>
          
        </section>

       </div>

       <div className="w-full h-full max-h-15 bg-zinc-900 absolute bottom-0 border-t border-zinc-500 pl-5 pt-5 pb-5 pr-5 flex items-center justify-between">

        <div className="flex flex-row items-center">

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
  )
}

export default PcHomePage;