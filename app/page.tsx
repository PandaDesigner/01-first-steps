import { HomeIcon } from '@primer/octicons-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main
      className="flex flex-col items-center justify-center p-24 ">
      <HomeIcon size='large' />
      <span className='text-5xl'>Hola Mundo</span>
      <div className='flex flex-1' />

      <span className='mx-auto'>
        <Link href={'/about'}>About page</Link>
      </span>
    </main >
  );
}
