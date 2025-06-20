import { GridPattern } from "@/components/ui/grid-pattern";

export default function Loading() {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center">
      {/* Grid pattern background */}
      <GridPattern 
        cellSize={50} 
        cellThickness={0.5} 
        cellColor="rgba(120, 185, 120, 0.2)" 
        variant="dot"
        className="fixed inset-0 opacity-30" 
      />
      
      <div className="text-center">
        <div className="relative mb-6">
          <div className="animate-pulse text-6xl mb-4">🌱</div>
          <div className="inline-flex items-center justify-center">
            <svg 
              className="animate-spin h-8 w-8 text-primary opacity-75" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24"
            >
              <circle 
                className="opacity-25" 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4"
              ></circle>
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Growing something amazing...</h2>
        <p className="text-gray-600 text-sm">Your urban garden is sprouting to life</p>
      </div>
    </div>
  );
} 