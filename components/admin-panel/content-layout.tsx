import { Navbar } from "./navbar";
import CustomBackground from "../bg";

interface ContentLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function ContentLayout({ title, children }: ContentLayoutProps) {
  return (
    <div>
      <Navbar title={title} />
      <div className="container pt-8 pb-8 px-4 sm:px-8">{children}
      {/* <CustomBackground /> */}
      </div>
    </div>
  );
}
