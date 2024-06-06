import { Inter } from "next/font/google";
import { metadata } from "./metadata";
import "./globals.css"; // 올바른 경로로 수정
import RecoilRootWrapper from "@/components/RecoilRootWrapper";
import Header from "@/components/elements/Header";
import BackgroundPlate from "@/components/BackgroundPlate";

const inter = Inter({ subsets: ["latin"] });

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecoilRootWrapper>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex flex-col items-center mt-[200px] min-h-screen">
              <BackgroundPlate>{children}</BackgroundPlate>
            </main>
          </div>
        </RecoilRootWrapper>
      </body>
    </html>
  );
}
