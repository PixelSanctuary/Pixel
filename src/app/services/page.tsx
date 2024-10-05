import React from 'react';
import Card from '@/app/components/Card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Pixel Sanctuary',
  description: 'Explore the variety of services offered by Pixel Sanctuary, including game development, community engagement, and website development tailored to the needs of game developers and gaming communities.',
  keywords: 'Pixel Sanctuary, game development, community engagement, website development, gaming services, game developers',
  openGraph: {
    title: 'Services | Pixel Sanctuary - Game Development & Community',
    description: 'Discover Pixel Sanctuary services: Game development, community engagement, and custom website development for gamers and game developers.',
    url: 'https://pixelsanctuary.vercel.app/about',
    type: 'website',
  },
};

const Services = () => {
  return (
    <section className="services-container flex flex-col max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-16 py-20 w-full h-full text-center relative">
      <h1 className="text-4xl font-bold text-primary">Our Services</h1>
      <p className="mt-4 text-lg text-white/80 max-w-3xl mx-auto">
        At Pixel Sanctuary, we offer a variety of services tailored to game developers, gamers, and gaming communities.
        Whether you are looking for development support, game design, or a vibrant community to grow your skills, we got you covered.
      </p>

      <div className="service-grid grid sm:grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
        <Card
          heading="Game Development"
          description="We specialize in creating high-quality games, from concept to completion. Our team of experienced developers and designers
          is ready to help bring your vision to life, using the latest tools and technologies."
        />
        <Card
          heading="Community Engagement"
          description="Join a thriving community of gamers and developers. We offer events, forums, and resources to help you
          connect with like-minded individuals and grow your skills in game development and gaming."
        />
         <Card
          heading="Website Development"
          description="We provide website development. Whether you need a sleek portfolio, an interactive community hub,
          or your own platform, we create customized websites that fit your brand and audience."
        />
      </div>
    </section>
  );
};

export default Services;
