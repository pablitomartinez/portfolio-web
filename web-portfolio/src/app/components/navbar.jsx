export default function Navbar() {
  return (
    <header className="bg-slate-900 px-10 shadow text-white h-100">
      
      {/* navmobile */}
      <div className="flex justify-between h-16 items-center md:block ">
        {/* logo */}
        <div className="items-center md:pl-20 ml-3">
          <div className="hover:text-yellow-400 hover:transition-all">
            <a href="#">
              <svg
                class="w-10 h-10"
                fill="none"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        {/* links de navegacion desktop */}
        <div className="hidden md:flex text-center justify-center items-center flex-col text-white h-screen w-60 space-y-5 bg-slate-800 pt-6 border-t ">
           

          <a href="#" className=" bg-slate-400 w-full py-5">
            about
          </a>
          <a href="#" className=" bg-slate-500 w-full py-5">
            skill
          </a>
          <a href="#" className=" bg-slate-500 w-full py-5">
            projects
          </a>
          <a href="#" className=" bg-slate-500 w-full  py-5">
            contact
          </a>
     
        </div>

        {/* boton menu  */}
        <button className="hover:text-red-500 focus:bg-slate-500 md:hidden">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            ></path>
          </svg>
        </button>
      </div>

      {/* nav-items-mobile */}
      <div className="space-y-1 pb-3 border-t py-2 md:hidden ">
        <a
          href="#"
          className="block bg-yellow-600 text-white py-2 px-3 rounded-md "
        >
          Home
        </a>
        <a
          href="#"
          className="block px-3 hover:bg-yellow-600 hover:text-white transition-colors py-2 rounded-md "
        >
          Work
        </a>
        <a
          href="#"
          className="block px-3 hover:bg-yellow-600 hover:text-white transition-colors py-2 rounded-md "
        >
          Skill
        </a>
        <a
          href="#"
          className="block px-3 hover:bg-yellow-600 hover:text-white transition-colors py-2 rounded-md "
        >
          Contact
        </a>
      </div>
    </header>
  );
}
