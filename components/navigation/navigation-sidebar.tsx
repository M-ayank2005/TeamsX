import { currentProfile } from "@/lib/current-profile"
import { db } from "@/lib/db"
import { redirect } from "next/navigation"
import { NavigationAction } from "./navigation-action"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { NavigationItem } from "@/components/navigation/navigation-item"
import { ModeToggle } from "../mode-toggle"
import { UserButton } from "@clerk/nextjs"
import { NavigationLogo } from "./navigation-logo"

export const NavigationSidebar = async () => {
  const profile = await currentProfile()
  if (!profile) {
    return redirect("/")
  }

  const servers = await db.server.findMany({
    where: {
      members: {
        some: {
          profileId: profile.id
        }
      }
    }
  })

  return (
    <div className="space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1e1f22] bg-[#e3edf7] py-4 shadow-md">
      <NavigationLogo />
      <NavigationAction />
      
      <Separator className="h-[2px] bg-gray-300 dark:bg-zinc-600 rounded-full w-12 mx-auto opacity-70" />
      
      <ScrollArea className="flex-1 w-full px-2">
        <div className="space-y-2">
          {servers.map((server) => (
            <div 
              key={server.id} 
              className="transition-all duration-300 hover:translate-y-1 hover:scale-100"
            >
              <NavigationItem
                id={server.id}
                imageUrl={server.imageUrl}
                name={server.name}
              />
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="pb-3 mt-auto flex items-center flex-col gap-y-5 pt-2  border-gray-700 dark:border-zinc-700 w-full">
        <div className="rounded-lg p-1.5 hover:bg-gray-200 dark:hover:bg-zinc-800 transition-all duration-200">
          <ModeToggle />
        </div>
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "w-[48px] h-[48px] hover:opacity-80 transition-all duration-200 hover:ring-2 hover:ring-primary/70 rounded-full"
            }
          }}
        />
      </div>
    </div>
  )
}