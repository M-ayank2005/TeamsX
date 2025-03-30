"use client"

import { Hash, MessageSquare } from "lucide-react";

interface ChatWelcomeProps {
  name: string;
  type: "channel" | "conversation";
}

export const ChatWelcome = ({name, type}: ChatWelcomeProps) => {
  return (
    <div className="space-y-4 px-4 py-6 mb-4 flex flex-col items-center text-center">
      <div className={`w-[80px] h-[80px] rounded-full ${
        type === "channel" 
          ? "bg-gradient-to-br from-green-500 to-green-700 dark:from-sky-600 dark:to-sky-800" 
          : "bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-800"
      } flex items-center justify-center shadow-lg`}>
        {type === "channel" ? (
          <Hash className="h-12 w-12 text-white" />
        ) : (
          <MessageSquare className="h-10 w-10 text-white" />
        )}
      </div>
      
      <div className="space-y-2">
        <p className="text-xl md:text-3xl font-bold tracking-tight">
          {type === "channel" ? "Welcome to " : ""}
          <span className={`${
            type === "channel" 
              ? "text-green-600 dark:text-green-400" 
              : "text-indigo-600 dark:text-indigo-400"
          }`}>
            {type === "channel" ? `#${name}` : name}
          </span>
        </p>
        
        <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-md mx-auto">
          {type === "channel"
            ? `This is the start of the #${name} channel. Send your first message to get the conversation started!`
            : `This is the beginning of your conversation with ${name}. Say hello!`
          }
        </p>
      </div>
    </div>
  )
}