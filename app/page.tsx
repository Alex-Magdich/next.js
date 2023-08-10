import Link from "next/link";
import {PAGES} from "@/app/constants";

export default function Home() {
  return (
    <main>
        <div className="container text-center">
            <h1 className='mt-base mb-base'>Home</h1>
            <p className='mb-base2x'>content will be soon</p>
            <Link href={PAGES.CONTACT_US} className='button mb-base2x'>GO TO CONTACT PAGE</Link>
        </div>
    </main>
  )
}
