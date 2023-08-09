import ContactSection from "@/app/components/ContactForm/ContactSection";

export const metadata = {
    title: 'Contact us | NextJS Technical Assessment',
    description: 'Contact us',
}

export default function ContactUs() {
    return (
        <section>
            <div className="container">
                <h1 className='text-2xl text-center mb-base'>Contact us</h1>
                <p className='color-dark-grey text-center'>Any question or remarks? Just write us a message!</p>
                <ContactSection/>
            </div>
        </section>
    )
}
