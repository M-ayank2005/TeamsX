import { ActionTooltip } from "@/components/action-tooltip";

export const NavigationLogo = () => {
  return (
    <ActionTooltip label="TeamsX Chat Application" side="right" align="center">
      <a href="/" className="group flex items-center">
        <div
          className="flex mx-3 h-[48px] w-[48px] rounded-[24px] 
        group-hover:rounded-[16px] transition-all
        overflow-hidden items-center justify-center
        bg-background dark:bg-neutral-700 group-hover:bg-green-600"
        >
          <span className="text-green-600 group-hover:text-white transition text-s font-bold">
            TX
          </span>
        </div>
      </a>
    </ActionTooltip>
  );
};
