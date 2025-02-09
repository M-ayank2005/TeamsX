import { Loader2Icon } from "lucide-react"

const Loading = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-8 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Main content container */}
      <div className="flex flex-col items-center gap-6">
        {/* Spinning loader icon */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-amber-200 blur-xl opacity-20 animate-pulse"></div>
          <div className="animate-spin text-blue-900 dark:text-gray-300">
            <Loader2Icon className="w-12 h-12" />
          </div>
        </div>
        
        {/* Loading text */}
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent animate-pulse">
          Loading
        </h1>
        
        {/* Progress bar container */}
        <div className="w-64 h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
          {/* Animated progress bar */}
          <div className="h-full bg-gradient-to-r from-gray-500 to-gray-800 animate-loading-bar"></div>
        </div>
      </div>
    </div>
  )
}
export default Loading