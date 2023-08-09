"use client"
import styles from './header.module.scss'
import Logo from "../../../public/Logo.svg";
import {Navigation} from "@/app/components/Header/Navigation";
import Additional from "@/app/components/Header/Additional";
import {PAGES} from "@/app/constants";
import Link from "next/link";
import React from "react";

export default function Header(){
    const [clicked, setClicked] = React.useState(false);
    const handleClick = () => setClicked(!clicked);

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.headerInner}>
                    <Link href={PAGES.HOME}><Logo className={styles.headerLogo}/></Link>
                    <Navigation opened={clicked}/>
                    <Additional/>
                    <div onClick={handleClick} className={`${styles.burger} ${clicked ? styles.clicked : ''}`}/>
                </div>
            </div>
        </header>
    )
}
