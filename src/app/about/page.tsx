
"use client";

import React from  'react';
import Image from "next/image";
import graphLines from '@/app/assets/graphLines.png';

const About = () => {
  return (
    <section className="about-container">
       <Image src={graphLines} className='w-screen h-screen fixed top-0 hidden lg:block pointer-events-none'
              alt="graph lines to Innovative Gaming"
              width={1080}
              height={1080} />
      <div className="flex flex-col text-center gap-5 about-content max-w-4xl mx-auto px-5 sm:px-8 lg:px-16 py-10 sm:text-lg">
        <h1 className="text-4xl font-semibold">About Pixel Sanctuary</h1>
        <p className='text-white/80'>
          Welcome to <strong>Pixel Sanctuary</strong>! We are a passionate team of developers, gamers, and creators
          dedicated to shaping the future of gaming through cutting-edge software development. Whether you are a seasoned 
          developer or a passionate gamer, Pixel Sanctuary is the place for you to connect, create, and innovate.
        </p>

        <h2 className="text-3xl sm:text-4xl font-semibold mt-10">Our Mission</h2>
        <p className='text-white/80'>
          At Pixel Sanctuary, our mission is to empower game developers and gaming communities by building tools and 
          platforms that drive innovation, foster creativity, and enable growth. We believe that gaming is not just 
          entertainment, but a powerful medium for storytelling, collaboration, and building global communities.
        </p>

        <h2 className="text-3xl sm:text-4xl font-semibold  mt-10">Join the Movement</h2>
        <p className='text-white/80'>
          We are not just a team; we are a movement. We invite you to become one of the <strong>Pixelers</strong> and help us 
          shape the future of gaming. Whether you are a developer, gamer, or a visionary, Pixel Sanctuary is your home.
        </p>

        <h2 className="text-3xl sm:text-4xl font-semibold  mt-10">Why Choose Pixel Sanctuary?</h2>
        <ul className='text-white/80'>
          <li>Innovative tools for game developers</li>
          <li>A vibrant community of gamers and developers</li>
          <li>Collaboration opportunities with industry experts</li>
          <li>Cutting-edge gaming projects and initiatives</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
