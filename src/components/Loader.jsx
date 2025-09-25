import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* Enhanced loading spinner */}
      <div className="relative">
        <div className="w-20 h-20 border-4 border-[#00d4aa]/20 rounded-full animate-spin border-t-[#00d4aa]"></div>
        <div className="absolute inset-0 w-20 h-20 border-4 border-transparent rounded-full animate-ping border-t-[#00d4aa]/40"></div>
      </div>
      
      {/* Enhanced progress text */}
      <div className="mt-8 text-center">
        <p className="text-[#00d4aa] text-lg font-bold mb-2">
          {progress.toFixed(0)}%
        </p>
        <p className="text-white text-sm font-medium">
          Loading Data Science Portfolio...
        </p>
        <div className="w-32 h-1 bg-tertiary rounded-full mt-4 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#00d4aa] to-[#00b894] rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </Html>
  );
};

export default CanvasLoader;
