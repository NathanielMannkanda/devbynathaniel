import RecycleBinIcon from "../assets/pc-icons/recycle-bin-icon.png" 

const PcHomePage: React.FC = () => {
  return(
    <div className="flex flex-col overflow-hidden min-h-screen max-h-screen">
      <div
        className="w-full h-screen bg-[url('/pc-wallpaer.jpg')] bg-cover bg-center p-5 text-white"
       >
        <section className="flex flex-col gap-5 w-full">
          <div className="w-fit p-2 rounded-md border border-transparent hover:border-zinc-700 hover:bg-gray-500/20 cursor-pointer transition-all">
          <img 
            src={RecycleBinIcon}
            alt=""
            className="w-20" 
            />
            <p>
              Recycle Bin
            </p>
          </div>
        </section>

       </div>

       <div className="w-full h-15 bg-zinc-900 absolute bottom-0 border-t border-zinc-500">
        
       </div>
    </div>
  )
}

export default PcHomePage;