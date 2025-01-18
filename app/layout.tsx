import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "next-themes";


const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Waruna's Portfolio",
  description: 'Software Developer Portfolio',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
