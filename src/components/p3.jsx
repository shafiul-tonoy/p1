import img from "../assets/Screenshot_1.png";
import { Link } from "react-router-dom";

export default function Project3() {
  return (
    <div className="hero bg-gray-100 py-10 min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-10">
        {/* Image Section */}
        <img
          src={img}
          alt="Heat Board Game Helper"
          className="max-w-sm rounded-lg shadow-lg border border-gray-200"
        />

        {/* Content Section */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Rinterio</h1>

          <p className="mb-2 text-lg">
            <span className="font-semibold text-gray-600">Stack:</span> HTML,
            CSS, JavaScript, React
          </p>

          <p className="mb-4 text-lg">
            <span className="font-semibold text-gray-600">Live Link:</span>{" "}
            <a
              href="https://shafiul-tonoy.github.io/assignment-3/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Rinterio
            </a>
          </p>

          <p className="mb-6 text-lg">
            <span className="font-semibold text-gray-600">GitHub Link:</span>{" "}
            <a
              href="https://github.com/shafiul-tonoy/assignment-3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub Repository
            </a>
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
          A sleek and professional website designed for an architecture firm to showcase its expertise, portfolio, and services. The site provides an elegant platform for clients to explore the firm's projects and learn about its design philosophy.
          </p>
          <Link to="/" className="btn btn-outline">
            {" "}
            Back home{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
