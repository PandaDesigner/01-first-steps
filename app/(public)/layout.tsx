import { Navbar } from '@/components';

export default function PublicLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <main className="flex flex-col items-center justify-center p-24">
                <span className='text-5xl'>Hola Mundo</span>
                {children}
            </main>
        </>
    );
}