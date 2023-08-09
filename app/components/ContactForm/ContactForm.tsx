import React from 'react';
import Input from "@/app/components/Input/Input";
import Checkbox from "@/app/components/Checkbox/Checkbox";
import Textarea from "@/app/components/Textarea/Textarea";
import styles from '../ContactForm/contact-form.module.scss';
import Image from 'next/image';

const INPUTS = [
    { label: 'First Name' },
    { label: 'Last Name' },
    { label: 'Email' },
    { label: 'Phone Number' },
]

const CHECKBOXES = [
    { label: 'General Inquiry 1' },
    { label: 'General Inquiry 2' },
    { label: 'General Inquiry 3' },
    { label: 'General Inquiry 4' },
]


const ContactForm = () => {
    return (
        <div className='contact-form'>
            {INPUTS.map(item => (
                <Input key={item.label} label={item.label}/>
            ))}
            <div className={styles.checkboxesContainer}>
                <div>Select Subject?</div>
                {CHECKBOXES.map(item => (
                    <Checkbox key={item.label} label={item.label}/>
                ))}
            </div>
            <Textarea label='Message'/>
            <div className={styles.formButtonContainer}>
                <button className='button'>Send Message</button>
                <Image
                    src="/letter_send.png"
                    alt="Send letter"
                    width={266}
                    height={217}
                    priority
                />
            </div>
        </div>
    );
};

export default ContactForm;
