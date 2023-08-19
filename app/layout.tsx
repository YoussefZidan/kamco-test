import { Metadata } from "next";
import DashboardSidebar from "./components/DashboardSidebar";
import Header from "./components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kamco",
  description: "Kamco Test",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light" className="bg-neutral-50">
      <body suppressHydrationWarning={true}>
        <div className="mx-auto w-full 4xl:w-[1820px]">
          <header>{<Header />}</header>
          <main className="flex min-h-screen">
            <DashboardSidebar />
            <div className="min-h-screen w-full p-5">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
