import { jost, poppins } from "@/utils/fonts";
import "@/app/globals.css";
import { Providers } from "@/reduxToolkit/provider";

export const metadata = {
  title: "Auth Page",
  description: "This is Marketing Page",
};


const AuthLayout = ({ children }) => {
  return (
    <html lang="en">
       <body
        className={`${jost.variable} ${poppins.variable} antialiased`}
      >
        <Providers>
        {children}
        </Providers>
        </body>
    </html>
  )
}

export default AuthLayout;