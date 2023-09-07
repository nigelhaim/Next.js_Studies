import type { Metadata } from 'next';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import Image from "next/image";
import { useEffect } from "react";
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
      <div className={`${styles.header}`}>
        <h1>Team Management System </h1>
        <div className={`${styles.headerRight}`}>
          <Link href="/"><h3 className={`${styles.navButtons}`}>Home</h3></Link>
          <Link href="/MyTeam"><h3 className={`${styles.navButtons}`}>My Team</h3></Link>
          <h3 className={`${styles.navButtons}`}>About</h3>
          <Image src={logo} className={`${styles.logo}`} alt='icon-image'/>
        </div>
      </div>
        {children}
      </body>

    </html>
  )
}
