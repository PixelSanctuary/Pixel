import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaystation } from '@fortawesome/free-brands-svg-icons';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';

export default function NavigationBar() {
    return (
        <section className='flex items-center justify-between max-w-4xl w-full mx-auto  sticky top-3 border border-primary text-primary bg-black rounded-full py-3 px-4'>
            <Link href="/" className={` text-2xl`}>
            <FontAwesomeIcon icon={faPlaystation} /></Link>
            <div className='flex gap-5'>
            <Link href="/">Games</Link>
            <Link href="/">Support</Link>
            <Link href="/">About</Link>
            </div>
            <FontAwesomeIcon icon={faLayerGroup} className={` text-2xl`} />
        </section>
    )
}