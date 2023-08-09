import styles from './footer.module.scss';
import Logo from '../../../public/Logo.svg';
import {ContactList} from "@/app/components/ContactList/ContactList";
import React from "react";
import {FOOTER_CONTENT} from "@/app/components/Footer/constants";

type TProps = {
    title: string;
    data: Array<string>;
}

const FooterColumn:React.FC<TProps> = ({ title, data}) => (
    <div>
        <h4>{title}</h4>
        <ul>
            {data.map(item => (
                <li key={item}>
                    <a href="#">{item}</a>
                </li>
            ))}
        </ul>
    </div>
)

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className="container">
                <Logo className={styles.footerLogo}/>
                <div className={styles.footerContent}>
                    <div className={styles.footerContacts}>
                        <h4>Reach us</h4>
                        <ContactList/>
                    </div>
                    {FOOTER_CONTENT.map(item => <FooterColumn key={item.title} title={item.title} data={item.data}/>)}
                    <div className={styles.newsletterForm}>Join Our Newsletter</div>
                </div>
            </div>
        </footer>
    )
}
