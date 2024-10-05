import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
// import { faSquareGithub } from '@fortawesome/free-solid-svg-icons';

export default function NavigationBar() {
    return (
        <footer className='mt-auto'>
            <section className="flex text-xl sm:text-3xl text-center items-center justify-center bg-gradient-to-b from-primary/0 to-primary/30 font-bold py-10 px-4">

                <h2>
                    Level Up with Pixel Sanctuary: <br className='block sm:hidden'/> Become a Pixeler
                </h2>

            </section>
            <section className=' border-t border-primary text-primary bg-black'>
                <div className='flex items-center justify-between w-full mx-auto max-w-screen-2xl p-4 px-5 sm:px-8 lg:px-16'>
                    <div className='flex flex-col'>
                        <Link href="/" className="PixelSanctuary text-2xl">Pixel Sanctuary</Link>
                        <span className='text-sm'>Gaming dreams come to life </span>
                    </div>
                    <div className='flex flex-col items-center '>
                        <p>Our social links</p>
                        <div className='flex gap-3'>
                            <Link href="https://github.com/PixelSanctuary/" target='_blank' aria-label="Github" className="text-2xl"><FontAwesomeIcon icon={faSquareGithub} /></Link>
                            <Link href="https://www.linkedin.com/in/pixel-sanctuary/" target='_blank' aria-label="Linkedin" className="text-2xl"><FontAwesomeIcon icon={faLinkedin} /></Link>
                            <Link href="https://www.instagram.com/pixel_sanctuary/" target='_blank' aria-label="Instagram" className="text-2xl"><FontAwesomeIcon icon={faSquareInstagram} /></Link>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}