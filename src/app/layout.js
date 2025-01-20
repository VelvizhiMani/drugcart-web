import { jost, poppins } from "@/utils/fonts";
import "./globals.css";
import { Providers } from "@/reduxToolkit/provider";
import HeaderSection from "@/components/layout/header/headerSection";
import MenuSection from "@/components/layout/navigation/desktopMenu";
import FooterSection from "@/components/layout/footer/footerSection";
import AwarenessSection from "@/components/layout/footer/awareness/awarenessSection";

export const metadata = {
  title: "Drugcarts - Home pageIndia's One Of The Most Trusted Online Pharmacy | 24x7 Medicine Delivery | Lab Tests | Online Doctor Consultation ",
  description: "Drugcarts is an online pharmacy - Buy Prescription,OTC,Branded Medicines & healthcare products @Flat 25% discounts. 24/7 Free Doorstep delivery! Order Now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jost.variable} ${poppins.variable} antialiased`}
      >
        <Providers>
          <HeaderSection />
          <MenuSection />
          {children}
          <FooterSection />
          <AwarenessSection/>
          </Providers>
      </body>
    </html>
  );
}
