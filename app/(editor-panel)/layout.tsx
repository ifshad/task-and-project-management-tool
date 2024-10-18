import type { Metadata } from "next";
import "../globals.css";
import { Roboto } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import WorkSPacePanelLayout from "@/components/workspace/workspace-panel-layout";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TeaDo | Task Manager",
  description: "Manage Task & Projects easily!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <SessionProvider>
          <WorkSPacePanelLayout>{children}</WorkSPacePanelLayout>
        </SessionProvider>
      </body>
    </html>
  );
}
