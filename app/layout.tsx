import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import Sidebar from "../components/Sidebar";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Learnspaces",
  description: "Learning Together!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
        <div className="flex">
          <Sidebar />
          <div className="w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
