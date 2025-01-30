import { jost, poppins } from "@/utils/fonts";
import "@/app/globals.css";
import { Providers } from "@/reduxToolkit/provider";
import FooterSection from "@/components/layout/Footer";
import HeaderSection from "@/components/layout/header/headerSection";
import Menu from "@/components/layout/header/Menu";

export const metadata = {
  title:
    "Drugcarts - Home pageIndia's One Of The Most Trusted Online Pharmacy | 24x7 Medicine Delivery | Lab Tests | Online Doctor Consultation ",
  description:
    "Drugcarts is an online pharmacy - Buy Prescription,OTC,Branded Medicines & healthcare products @Flat 25% discounts. 24/7 Free Doorstep delivery! Order Now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jost.variable} ${poppins.variable} antialiased`}>
        <Providers>
          <HeaderSection />
          <Menu />
          {children}
          <FooterSection />
        </Providers>
      </body>
    </html>
  );
}
