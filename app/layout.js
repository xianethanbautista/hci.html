import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "Iron House | Train with purpose",
  description: "A welcoming neighborhood gym for stronger everyday living.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
