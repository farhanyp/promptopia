import "@/styles/globals.css";
import Navbar from '@/components/Nav'
import Provider from "@/components/Provider";
import { Suspense } from "react";

export const metadata = {
  title: "Promptopiia",
  description: "Discover & Share AI Prompts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <Provider>
            <div className="main">
              <div className="gradient" />
            </div>
            <main className="app">
              <Navbar />
              <Suspense>
                {children}
              </Suspense>
            </main>
          </Provider>
      </body>
    </html>
  );
}
