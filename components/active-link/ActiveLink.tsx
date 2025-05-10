'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

interface ActiveLinkProps {
    path: string;
    textLink: string;
}

const styles = {
    "link": 'hover:underline hover:text-blue-200 transition-all',
    "active-link": 'text-blue-400'
}



export const ActiveLink = ({ path, textLink }: ActiveLinkProps) => {

    const pathName = usePathname()

    return (
        <Link
            className={`${styles['link']} 
            ${(pathName === path) && styles['active-link']}`}
            href={path} >
            {textLink}
        </Link>
    )
}
