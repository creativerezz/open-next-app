import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { NavHeader } from "@/components/nav-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Automatehub",
  description: "Automatehub is a platform that helps you automate your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="https://unpkg.com/@elevenlabs/convai-widget-embed" async type="text/javascript"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}

          {/* Analytics */}
          <Analytics />

          {/* Chat Widget */}
          <div dangerouslySetInnerHTML={{
            __html: '<elevenlabs-convai agent-id="agent_9901k14x6b6pfjpvnawa599711a7"></elevenlabs-convai>'
          }} />
        </ThemeProvider>
      </body>
    </html>
  );
}