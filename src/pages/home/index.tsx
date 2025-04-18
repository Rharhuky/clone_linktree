import { SocialMedia } from "../../components/social";

import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col w-full py-4 items-center justify-center">
      <h1 className="md:text-4xl  text-3xl font-bold text-white mt-20">
        Rharhuandrew
      </h1>
      <span className="text-gray-400 mb-5 mt-3">See my links!</span>
      <main className="flex flex-col w-11/12 max-w-xl text-center">
        <section className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer">
          <a>
            <p className="text-base md:text-lg">Instagram</p>
          </a>
        </section>
        <footer className="flex justify-center gap-3 my-4 ">
          <SocialMedia url="https://www.instagram.com/rharhuky/">
            <FaInstagram size={35} color="#FFF" />
          </SocialMedia>
          <SocialMedia url="https://www.linkedin.com/in/rharhuandrew-souza/">
            <FaLinkedin size={35} color="#FFF" />
          </SocialMedia>
        </footer>
      </main>
    </div>
  );
}
