import Image from "next/image";
import pxHeroBanner from '@/app/assets/pxHeroBanner.jpg';
import AnchorButton from '@/app/components/AnchorButton';
import pxColabrativeSpace from '@/app/assets/pxColabrativeSpace.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div className="flex">
      <main className="flex flex-col gap-10 p-16 max-w-screen-2xl mx-auto sm:text-lg">
        <section className="grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-5 justify-center">
            <h1 className="text-4xl font-semibold">
              Pixel Sanctuary: <br /> Your Gateway to Innovative Gaming
            </h1>
            <p className="text-lg max-w-[580px]">
              At Pixel Sanctuary, we're building a vibrant community of passionate gamers and creators, where imagination meets cutting-edge technology.
            </p>
            <div className="flex flex-wrap gap-5">
              <AnchorButton type="primary" link="/about" text="Join Our Community" />
              <AnchorButton type="secondary" link="/contact" text="Explore the Realm" />
            </div>
          </div>
          <div className=" flex items-center justify-center">

            <Image src={pxHeroBanner}
              alt="Gateway to Innovative Gaming"
              width={480}
              height={860} />
          </div>
        </section>
        <section className=" flex flex-col items-center justify-center gap-8">
          <h2 className="text-4xl font-semibold">Explore the Realm of Endless Possibilities</h2>
          <div className="grid grid-cols-3 gap-5 text-lg">
            <div className=" flex flex-col gap-5 items-center text-center p-5 border border-primary rounded">
              <b className="text-2xl">Diverse Game Genres</b>
              <p>From thrilling adventures to mind-bending puzzles, our platform offers a vast array of captivating game experiences.</p>
            </div>
            <div className=" flex flex-col gap-5 items-center text-center p-5 border border-primary rounded">
              <b className="text-2xl">Cutting-Edge Technology</b>
              <p>Immerse yourself in the latest advancements in gaming, including virtual reality and holographic displays.</p>
            </div>
            <div className=" flex flex-col gap-5 items-center text-center p-5 border border-primary rounded">
              <b className="text-2xl">Collaborative Spaces</b>
              <p>Connect with like-minded individuals and form teams to bring your creative visions to life.</p>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-2 gap-5 py-10">
          <div className="flex flex-col gap-5 justify-center">
            <h1 className="text-4xl font-semibold">
              Collaborative Spaces: <br/> Fostering Connections
            </h1>
            <ul className=" flex flex-col gap-5">
              <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPlay} /> Shared Co-working Hubs 
              </li>
              <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPlay} /> Mentorship Programs
              </li>
              <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPlay} /> Community Events
              </li>
            </ul>
          </div>
          <div className=" flex items-center justify-center">

            <Image src={pxColabrativeSpace}
              alt="Collaborative Gaming Hubs"
              width={480}
              height={860} />
          </div>
        </section>
        <section className=" flex flex-col items-center justify-center gap-8">
          <h2 className="text-4xl font-semibold">Pixel Playground: Interactive Demos and Challenges</h2>
          <div className="grid grid-cols-3 gap-5 text-lg font-semibold">
            <div className=" flex flex-col gap-5 items-center text-center p-5 bg-primary text-black rounded">
              <b className="text-2xl">Explore</b>
              <p>Browse our library of interactive demos showcasing the latest gaming innovations.</p>
            </div>
            <div className=" flex flex-col gap-5 items-center text-center p-5 bg-primary text-black rounded">
              <b className="text-2xl">Challenge</b>
              <p>Put your skills to the test by participating in our engaging game development challenges.</p>
            </div>
            <div className=" flex flex-col gap-5 items-center text-center p-5 bg-primary text-black rounded">
              <b className="text-2xl">Compete</b>
              <p>Compete against fellow creators and showcase your talent in our game jams and tournaments.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
