import { cn } from "@/lib/utils";

interface CustomBackgroundProps {
  sidebarOpen: boolean;
}

export default function CustomBackground({ sidebarOpen }: CustomBackgroundProps) {
  return (
    <div className={cn(
      "fixed top-0 h-full -z-10 transition-[left,width] ease-in-out duration-300",
      sidebarOpen ? "left-72 w-[calc(100%-18rem)]" : "left-[90px] w-[calc(100%-90px)]"
    )}>
      <div className="h-full w-full dark:bg-black bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.05] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#191919] bg-secondary [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div
          className="absolute w-full h-full top-[80px] opacity-10 blur-[100px] saturate-150"
          style={{
            backgroundImage: `
            radial-gradient(at 27% 37%, hsla(215, 98%, 61%, 1) 0px, transparent 50%),
            radial-gradient(at 10% 29%, hsla(215, 98%, 61%, 1) 0px, transparent 50%),
            radial-gradient(at 55% 100%, hsla(285, 98%, 56%, 1) 0px, transparent 50%),
            radial-gradient(at 42% 89%, hsla(285, 98%, 56%, 1) 0px, transparent 50%),
            radial-gradient(at 97% 21%, hsla(32, 98%, 61%, 1) 0px, transparent 50%),
            radial-gradient(at 69% 43%, hsla(32, 98%, 61%, 1)  0px, transparent 50%)
              `
          }}
        ></div>
      </div>
    </div>
  )
}