import Phone from '../../../public/bxs_phone-call.svg';
import Email from '../../../public/ic_sharp-email.svg';
import Map from '../../../public/carbon_location-filled.svg';
import {ContactItem} from "@/app/components/ContactList/ContactItem";

const CONTACT_DATA = [
    {Icon: <Phone/>, type: 'tel', value: '+1012 3456 789'},
    {Icon: <Email/>, type: 'mailto', value: 'demo@gmail.com'},
    {Icon: <Map/>, type: '', value: '132 Dartmouth Street Boston, Massachusetts 02156 United States'}
]

export const ContactList = () => (
    <ul>
        {CONTACT_DATA.map(item => (
            <li key={item.value}>
                <ContactItem type={item.type} Icon={item.Icon} text={item.value}/>
            </li>
        ))}
    </ul>
)
