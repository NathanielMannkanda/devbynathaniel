import MatrixCodeRain from "../componenets/MatrixCodeRain";
import { GridPattern } from "@/component/ui/grid-pattern";

const RealHomePage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden ">
      <MatrixCodeRain />

      <div className="relative z-10 flex flex-col xl:flex-row min-h-screen justify-center gap-3 p-5 md:items-center">
        {/*Left*/}
        <div className="border border-emerald-600 bg-black
          w-full xl:flex-1
          max-w-150
          h-150 xl:h-230">
          
        </div>

        {/*Middle*/}
        <div className="border w-150 h-full max-h-230 mr-3">
          <div className="border border-emerald-600 w-full h-90 bg-black mb-3">
          
          </div>

          <div className="border border-emerald-600 w-full h-90 bg-black mb-3">

          </div>

          <div className="border border-emerald-600 w-full h-43  bg-black">

          </div>
          
        </div>

        {/*Right*/}
        <div className="w-120 h-230 mr-3 overflow-clip">

          <div className="w-full h-30  mb-3 text-emerald-400 flex items-center justify-center text-6xl">
          <p className="">
            DevByNathaniel
          </p>
          </div>

          <div className="border border-emerald-600 w-full h-30 bg-black mb-3">
              <GridPattern />
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