import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "one stop finance platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`} suppressHydrationWarning={true}>
          {/* header */}
          <Header />
          <main className="min-h-screen">{children}</main>
          {/* footer */}
          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto text-center text-gray-600 px-4">
              <p>© 2025 Expense Tracker. All rights reserved.</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
