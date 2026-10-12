import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import GoTop from "@/components/GoTop";
import Header from "@/components/Header";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Gestion de machines industrielles Orléans | Appelez-nous",
  description:
    "PMA Concept conçoit, commercialise et intègre des machines industrielles automatisées à Orléans : ensacheuses, doseuses, remplisseuses, tri optique, maintenance et dépannage.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={poppins.variable}>
      <body>
        <div className="inline-block min-h-screen w-full">
          <main className="w-full">
            <Header />
            {children}
            <Footer />
            <GoTop />
          </main>
        </div>
      </body>
    </html>
  );
}
