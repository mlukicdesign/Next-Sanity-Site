import Image from 'next/image';
import Link from 'next/link';
import logo from '../icons/logo.png';

export default function NavBar() {
    return (
        <header className='py-6 md:px-16 px-6 border-b border-zinc-800 z-30 md:mb-28 mb-20'>
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                <Link href="/">
                    <Image src={logo} width={25} height={25} alt="logo" />
                </Link>

            </div>
        </header>
    )
}