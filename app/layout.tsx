import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { clerkPublishableKey } from "@/config";

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
    <ClerkProvider publishableKey={clerkPublishableKey}>
      <html lang="en">
        <body className={plusJarkataSans.className}>
            {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
