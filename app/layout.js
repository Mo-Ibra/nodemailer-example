import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "NodeMailer - Example.",
  description: "This is an example of using NodeMailer with Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en">
      <head />
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
    </>
  );
}
