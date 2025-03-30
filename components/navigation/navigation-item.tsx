"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { ActionTooltip } from "@/components/action-tooltip";

type NavigationItemProps = {
  id: string;
  imageUrl: string;
  name: string;
};

export const NavigationItem = ({ id, imageUrl, name }: NavigationItemProps) => {
  const params = useParams();
  const router = useRouter();

  const onClick = () => {
    router.push(`/servers/${id}`);
  }

  return (
    <ActionTooltip label={name} side="right" align="center">
      <button
        onClick={onClick}
        className="group relative flex items-center w-full p-0 cursor-pointer border-none bg-transparent"
      >
        <div
          className={cn(
            "absolute left-0 bg-green-600 dark:bg-white rounded-r-full transition-all w-[4px]",
            params?.serverId !== id && "group-hover:h-[20px]",
            params?.serverId === id ? "h-[36px]" : "h-[8px]"
          )}
        />
        <div
          className={cn(
            "relative group flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden",
            params?.serverId === id && "bg-primary/10 text-primary rounded-[16px]",
            "ring-0 hover:ring-2 hover:ring-white/10 dark:hover:ring-white/20"
          )}
        >
          <Image 
            fill 
            src={imageUrl} 
            alt={name} 
            className="object-cover" 
            sizes="48px"
          />
        </div>
      </button>
    </ActionTooltip>
  );
};
