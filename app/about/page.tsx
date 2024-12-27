'use client';

import Image from "next/image";
import aboutMe from "../Public/aboutMe.jpg"

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="pt-6">
        <h1 className="text-center text-4xl font-bold">About Me</h1>
      </header>

      <main className="flex-grow container mx-auto px-6 pt-5 pb-10">
        <section className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Hello, I am Muhammad Sharjeel!</h2>
          <p className="text-lg mb-6">
            I am a passionate web developer with a love for creating dynamic and responsive web applications. My journey into the world of web development began from GIAIC.
          </p>
          <p className="text-lg mb-6">
            With expertise in technologies such as HTML, CSS, JavaScript, and frameworks like Next JS, I enjoy turning complex problems into simple, beautiful, and intuitive designs. I believe that a great user experience is key to a successful web application.
          </p>
          <p className="text-lg mb-6">
            In addition to my technical skills, I am a strong advocate for continuous learning and improvement. I regularly explore new tools and technologies to stay updated with the latest trends in web development.
          </p>
          <p className="text-lg mb-6">
            I created this blog to share my knowledge, experiences, and insights on web development, as well as to connect with fellow developers and tech enthusiasts. I hope you find my posts helpful and inspiring!
          </p>
          <div className="flex justify-center">
            <Image 
              src={aboutMe} 
              alt="About Me" 
              className="rounded-full w-32 h-32 object-cover mb-4"
            />
          </div>
          <p className="text-lg mb-6 text-center">
            Feel free to reach out to me on below given links, if you have any questions or just want to connect!
          </p>
        </section>
      </main>
    </div>
  );
};
export default AboutPage;
