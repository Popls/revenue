import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-bs-theme="dark">
      <body>
        <main>
          <div className="container">
            <Header/>
          </div>
          {children}
          <div className="container">
            <Footer/>
          </div>
        </main>
      </body>
    </html>
  );
}
