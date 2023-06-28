import "./globals.css";
import Sidebar from "../components/sidebar";
import { Plus_Jakarta_Sans } from "next/font/google";

export const metadata = {
  title: "Learnspaces",
  description: "Learning Together!",
};

const plusJarkataSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={plusJarkataSans.className}>
        <div className="flex">
          <Sidebar />
          <div className="w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
