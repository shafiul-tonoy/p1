export default function Navbar() {
    const links = (
      <>
        <li>
          <a href="#aboutme">About Me</a>
        </li>
        <li>
          <a href="#skills">My Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </>
    );
  
    return (
      <div className="navbar bg-base-100 fixed top-0 z-10 shadow-md w-full">
        {/* Navbar Start */}
        <div className="navbar-start ">
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              aria-label="Open Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a href="#" className="btn btn-ghost text-xl">
            MD. Shafiul Anam
          </a>
        </div>
  
        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
  
        {/* Navbar End */}
        <div className="navbar-end">
          <a
            href="/r-1.pdf" // Replace with your resume
            download
            className="btn"
          >
            Download Resume
          </a>
        </div>
      </div>
    );
  }
  