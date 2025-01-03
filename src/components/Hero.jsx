import img from "../assets/one.jpg";
import { FaGithub, FaFacebook } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="hero bg-base-200 min-h-[50vh] pt-16">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Md.Shafiul Anam</h1>
          <h2 className="text-2xl my-2">Frontend Developer </h2>
          <p className="py-6">
            I'm a passionate frontend developer with a strong focus on crafting
            intuitive and visually appealing user interfaces. With expertise in
            modern web technologies like React, JSX, and more, I aim to create
            seamless and engaging digital experiences. I'm always eager to
            learn, grow, and bring innovative ideas to life through code.
          </p>
          <button className="btn btn-primary">
            <a
              href="/r-1.pdf" 
              download
            >
              Download Resume
            </a>
          </button>
          <div className="flex my-5 gap-2">
            <a
              href="https://www.facebook.com/profile.php?id=100074070966828"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size="24" />
            </a>
            <a
              href="https://github.com/shafiul-tonoy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size="24" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
