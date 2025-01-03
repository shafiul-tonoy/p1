import img from "../assets/Screenshot_2.png";
import { Link } from "react-router-dom";

export default function Project2() {
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
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Tic-Tac-Toe</h1>

          <p className="mb-2 text-lg">
            <span className="font-semibold text-gray-600">Stack:</span> HTML,
            CSS, JavaScript, React
          </p>

          <p className="mb-4 text-lg">
            <span className="font-semibold text-gray-600">Live Link:</span>{" "}
            <a
              href="https://tic-tac-toe-ashy-eight.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              tic tac to
            </a>
          </p>

          <p className="mb-6 text-lg">
            <span className="font-semibold text-gray-600">GitHub Link:</span>{" "}
            <a
              href="https://github.com/shafiul-tonoy/Tic-Tac-Toe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub Repository
            </a>
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            A simple yet engaging implementation of the classic Tic Tac Toe
            game. This web-based application allows two players to take turns
            marking spaces in a 3x3 grid. The goal is to achieve three marks in
            a row horizontally, vertically, or diagonally before your opponent
            does.
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
