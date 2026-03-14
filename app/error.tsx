"use client"

import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { useRouter } from "next/navigation";

const ErrorFallback = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  const router = useRouter();

  const handlePushToHome = () => {
    router.push("/");
  }

  return (
    <div role="alert" className="h-full w-full flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-[#8257e6]">Something went wrong</h1>
      <p className="text-sm text-zinc-500">{error.message}</p>
      <Button variant="link" size="sm" className="text-xs text-zinc-500 mt-4" onClick={reset || handlePushToHome}>
        Try again
        <RefreshCw className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}

export default ErrorFallback