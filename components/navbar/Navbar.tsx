import { HomeIcon } from '@primer/octicons-react'
import Link from 'next/link'
import { ActiveLink } from '../active-link/ActiveLink';

interface NavItem {
    path: string;
    textLink: string;
}

const itemsLink: Array<NavItem> = [
    { path: '/about', textLink: 'About' },
    { path: '/pricing', textLink: 'Pricing' },
    { path: '/contact', textLink: 'Contact' }
]

export const Navbar = () => {
    return (
        <nav
            className='flex bg-blue-800 bg-opacity-30 p-2 px-4 m-4 rounded gap-4'>
            <Link
                className='flex gap-1 justify-center items-center'
                href={'/'}>
                <HomeIcon />
                <span>Home</span>
            </Link>
            <div className='flex flex-1' />
            {
                itemsLink.map(({ path, textLink }) => (
                    <ActiveLink
                        key={path}
                        path={path}
                        textLink={textLink} />
                ))
            }
        </nav>
    )
}
