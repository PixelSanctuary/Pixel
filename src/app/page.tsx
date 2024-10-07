import Image from "next/image";
import pxHeroBanner from '@/app/assets/pxHeroBanner.webp';
import AnchorButton from '@/app/components/AnchorButton';
import Card from '@/app/components/Card';
import pxColabrativeSpace from '@/app/assets/pxColabrativeSpace.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div className="flex flex-col">
      <main className="flex flex-col gap-10 p-5 sm:p-8 lg:p-16 max-w-screen-2xl mx-auto sm:text-lg">
        <section className="grid sm:grid-cols-2 gap-5 pb-5">
          <div className="flex flex-col gap-5 justify-center text-center sm:text-left">
            <h1 className="text-4xl font-semibold">
              Pixel Sanctuary: <br /> Your Gateway to Innovative Gaming
            </h1>
            <p className="text-lg max-w-[580px] text-white/80">
              At Pixel Sanctuary, we are building a vibrant community of passionate gamers and creators, where imagination meets cutting-edge technology.
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-5">
              <AnchorButton type="primary" link="/about" text="Join Our Community" />
              <AnchorButton type="secondary" link="/contact" text="Explore the Realm" />
            </div>
          </div>
          <div className=" flex items-center justify-center">

            <Image src={pxHeroBanner} className=" rounded-lg shadow-lg shadow-black"
              alt="Gateway to Innovative Gaming"
              width={460}
              height={820} />
          </div>
        </section>
        <section className=" flex flex-col items-center justify-center gap-8">
          <h2 className="text-3xl sm:text-4xl font-semibold">Explore the Realm of Endless Possibilities</h2>
          <div className="grid sm:grid-cols-3 gap-5 text-lg text-center">
            <Card
              heading="Diverse Game Genres"
              description="From thrilling adventures to mind-bending puzzles, our platform offers a vast array of captivating game experiences."
            />
            <Card
              heading="Cutting-Edge Technology"
              description="Immerse yourself in the latest advancements in gaming, including virtual reality and holographic displays."
            />
            <Card
              heading="Collaborative Spaces"
              description="Connect with like-minded individuals and form teams to bring your creative visions to life."
            />
          </div>
        </section>
        <section className="grid sm:grid-cols-2 gap-5 py-10">
          <div className="flex flex-col gap-5 justify-center">
            <h1 className="text-3xl sm:text-4xl font-semibold">
              Collaborative Spaces: <br /> Fostering Connections
            </h1>
            <ul className=" flex flex-col gap-5 text-white/80">
              <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                <FontAwesomeIcon icon={faPlay} /> Shared Co-working Hubs
              </li>
              <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                <FontAwesomeIcon icon={faPlay} /> Mentorship Programs
              </li>
              <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                <FontAwesomeIcon icon={faPlay} /> Community Events
              </li>
            </ul>
          </div>
          <div className=" flex items-center justify-center">

            <Image src={pxColabrativeSpace} className=" rounded-lg shadow-lg shadow-black"
              alt="Collaborative Gaming Hubs"
              width={460}
              height={820} />
          </div>
        </section>
        <section className=" flex flex-col items-center justify-center gap-8">
          <h2 className="text-3xl sm:text-4xl font-semibold">Pixel Playground: Interactive Demos and Challenges</h2>
          <div className="grid sm:grid-cols-3 gap-5 text-lg text-center font-semibold">
          <Card
              heading="Explore"
              description="Browse our library of interactive demos showcasing the latest gaming innovations."
              invertStyle={true}
            />
             <Card
              heading="Challenge"
              description="Put your skills to the test by participating in our engaging game development challenges."
              invertStyle={true}
            />
             <Card
              heading="Compete"
              description="Compete against fellow creators and showcase your talent in our game jams and tournaments."
              invertStyle={true}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
