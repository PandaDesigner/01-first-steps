import type { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Contact page',
    description: 'Contact page metadata description for next',
};

export default function ContactPage() {
    return (
        <span className='text-7xl text-indigo-100'>
            Hola mundo desde Contact
        </span>
    )
}