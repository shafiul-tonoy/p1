import { FaHtml5} from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { IoLogoJavascript, IoLogoCss3  } from "react-icons/io";

export default function Skills() {
  return (
    <div className="my-5">
      <h1 className="text-center text-3xl font-bold my-5">My Skills</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-3">
        <div className="bg-white p-5 shadow-md rounded-md flex flex-col items-center">
          <FaHtml5 size={40} className="text-orange-500" />
          <h2 className="text-center text-2xl mt-2">HTML</h2>
        </div>
        <div className="bg-white p-5 shadow-md rounded-md flex flex-col items-center">
          <IoLogoCss3 size={40} className="text-blue-500" />
          <h2 className="text-center text-2xl mt-2">CSS</h2>
        </div>
        <div className="bg-white p-5 shadow-md rounded-md flex flex-col items-center">
          <IoLogoJavascript size={40} className="text-yellow-500" />
          <h2 className="text-center text-2xl mt-2">JavaScript</h2>
        </div>
        <div className="bg-white p-5 shadow-md rounded-md flex flex-col items-center">
          <FaReact size={40} className="text-blue-400" />
          <h2 className="text-center text-2xl mt-2">React</h2>
        </div>
      </div>
    </div>
  );
}
