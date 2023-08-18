import { Inter } from "next/font/google";
import DashboardSidebar from "./components/DashboardSidebar";
import Header from "./components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light" className="bg-neutral-50">
      <body className={inter.className}>
        <div className="mx-auto w-full 4xl:w-[1820px]">
          <header>
            <Header />
          </header>
          <main className="flex min-h-screen">
            <DashboardSidebar />
            <div className="min-h-screen w-full">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
