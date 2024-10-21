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
    <div className="space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1e1f22] bg-[#e3edf7] py-3">
      <NavigationLogo />
      <NavigationAction />
      
      <Separator className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto opacity-50" />
      
      <ScrollArea className="flex-1 w-full">
        <div className="px-1">
          {servers.map((server) => (
            <div 
              key={server.id} 
              className="mb-4 transition-all duration-200 hover:translate-x-1"
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

      <div className="pb-3 mt-auto flex items-center flex-col gap-y-4">
        <div className="hover:opacity-80 transition-opacity duration-200">
          <ModeToggle />
        </div>
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "w-[48px] h-[48px] hover:opacity-80 transition-opacity duration-200"
            }
          }}
        />
      </div>
    </div>
  )
}