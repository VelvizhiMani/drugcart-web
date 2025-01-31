import { jost, poppins } from "@/utils/fonts";
import "@/app/globals.css";
import { Providers } from "@/reduxToolkit/provider";

export const metadata = {
  title: "Dashboard Page",
  description: "This is Marketing Page",
};


const DashboardLayout = ({ children }) => {
  return (
    <html lang="en">
     <body
        className={`${jost.variable} ${poppins.variable} antialiased`}
      >
        <Providers>
        <header className="bg-red-300">Header</header>
        {children}
        <footer className="bg-green-200">Footer</footer>
        </Providers>
        </body>
    </html>
  )
}

export default DashboardLayout;