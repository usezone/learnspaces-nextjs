import "./globals.css";
import Sidebar from "../components/sidebar";


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
      <body>
        <div className="flex">
          <Sidebar />
          <div className="w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
