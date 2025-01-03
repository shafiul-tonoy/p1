import img1 from "../assets/Screenshot_4.png";
import { Link } from 'react-router-dom'

export default function Project1() {
  return (
    <div className="hero bg-gray-100 py-10 min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-10">
        {/* Image Section */}
        <img
          src={img1}
          alt="Heat Board Game Helper"
          className="max-w-sm rounded-lg shadow-lg border border-gray-200"
        />

        {/* Content Section */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            "Heat" Board Game Helper
          </h1>

          <p className="mb-2 text-lg">
            <span className="font-semibold text-gray-600">Stack:</span> HTML, CSS, JavaScript, React
          </p>

          <p className="mb-4 text-lg">
            <span className="font-semibold text-gray-600">Live Link:</span>{" "}
            <a
              href="http://tonoy-h.surge.sh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              tonoy-h.surge.sh
            </a>
          </p>

          <p className="mb-6 text-lg">
            <span className="font-semibold text-gray-600">GitHub Link:</span>{" "}
            <a
              href="https://github.com/shafiul-tonoy/heatBoardGame"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub Repository
            </a>
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            A web application designed to assist players of the board game "Heat" in counting cards and analyzing game statistics. It offers features to streamline gameplay and enhance user experience.
          </p>
        <Link to="/" className="btn btn-outline"> Back home </Link>
         
        </div>
      </div>
    </div>
  );
}
