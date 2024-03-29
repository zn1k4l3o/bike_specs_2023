import "./globals.scss";
import Navbar from "../components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "Bike Specs",
  description: "Website about specifications of motorcycles",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
