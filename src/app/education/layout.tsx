import { Inter } from "next/font/google";
import SideBar from "@/components/SideBar";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div >
        <SideBar />
        {children}
        </div>
  );
}
