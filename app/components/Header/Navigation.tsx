"use client";
import styles from "@/app/components/Header/header.module.scss";
import {NAVIGATION} from "@/app/constants";
import Link from "next/link";
import {usePathname} from "next/navigation";
import React from "react";

type TProps = {
    opened: boolean;
}
export const Navigation:React.FC<TProps> = ({opened}) => {
    const currentRoute = usePathname();

    return (
        <nav className={`${styles.navigation} ${opened ? styles.opened : ''}`}>
            {NAVIGATION.map(item => (
                <div className={styles.navigationItem} key={item.path}>
                    <Link href={item.path} className={currentRoute === item.path ? styles.navigationItemActive : ''}>{item.name}</Link>
                    {item.additional && (
                        <ul className={styles.navigationItemAdditionalMenu}>
                            {item.additional.map(item => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </nav>
    )
}
