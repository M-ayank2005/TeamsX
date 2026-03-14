import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";
import { Suspense } from "react";
import Loading from "@/app/(main)/loading";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="h-full">
        <div className="hidden md:flex h-full w-[72px] z-30 flex-col fixed inset-0">
          <Suspense fallback={<Loading />}>
            <NavigationSidebar />
          </Suspense>
        </div>
        <Suspense fallback={<Loading />}>
          <main className="md:pl-[72px] h-full">{children}</main>
        </Suspense>
      </div>
    </>
  );
};

export default MainLayout;
