import img1 from "../assets/Screenshot_4.png";
import img2 from "../assets/Screenshot_2.png";
import img3 from "../assets/Screenshot_1.png";

export default function Projects() {
    return (
      <div className="my-5" id="projects">
        <h1 className="text-center text-3xl font-bold my-5">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Project 1 */}
          <div className="bg-white p-5 shadow-lg rounded-lg">
            <img
              src={img1}
              alt="Project 1"
              className="w-full h-40 object-cover rounded-md object-top"
            />
            <h2 className="text-2xl font-semibold mt-4">"Heat" Board Game Helper</h2>
            <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Details
            </button>
          </div>
  
          {/* Project 2 */}
          <div className="bg-white p-5 shadow-lg rounded-lg">
            <img
              src={img2}    
              alt="Project 2"
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-2xl font-semibold mt-4">Tic Tac</h2>
            <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Details
            </button>
          </div>
  
          {/* Project 3 */}
          <div className="bg-white p-5 shadow-lg rounded-lg">
            <img
              src={img3}
              alt="Project 3"
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-2xl font-semibold mt-4">Rinterio</h2>
            <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Details
            </button>
          </div>
        </div>
      </div>
    );
  }
  