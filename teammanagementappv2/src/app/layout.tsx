import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from "next/image";

import "./globals.css";
import styles from "./layout.module.css"
import logo from "../../assets/Updated 01_13_2022.png";
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TeamManagementApp',
  description: 'This is a team management app made by Nigel Sebastian on Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*<body className={inter.className}>{children}</body>*/}
      <body>
        <h1>Team Management System </h1>
        <Image src={logo} className={`${styles.logo}`} alt='icon-image'/>
        {children}
      </body>

    </html>
  )
}
