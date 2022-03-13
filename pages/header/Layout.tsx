import Link from 'next/link'
import { useState } from "react";
import Header from "../../styles/Layout.module.css";
import ThemeUpdaterIcon from "../../src/components/ThemeUpdaterIcon";
import Head from 'next/head';
export default function Layout({children}: {children: React.ReactNode}) {

    const [isMenuOpen, setMenuOpen] = useState(false);
    const openMenu= ()=> setMenuOpen(!isMenuOpen);
    return (<> 
            
            <Head>
              <title>Vitogiu | Home</title>
              <meta name="description" content="My Portifolio 👋" />
              <meta name="theme-color" content="#dd99f194" />
              <link rel="icon" href="favicon"/>
            </Head>
            <div className={Header.container}>
            <header className={Header.navbar}>
                <Link href="/">
                <a className={Header.root}>Vitogiu</a> 
                </Link>
                <nav>
                    <ul className={Header.links}>
                        <li><a href='#'>About</a></li>
                        <li><a href='mailto:me@vitogiu.me'>Contact</a></li>
                        <li><a href='#'>Projects</a></li>
                    </ul>
                </nav>
                <ThemeUpdaterIcon />
            </header>
            </div>
        {children}
     </>)
}