export default function Navbar() {
  return (
    <div>
      {/* div desktop  */}
      <div className="items-center">
        {/* logo  */}
        <div className="hidden md:block w-80  bg-slate-900 text-white">
          <div className="hover:text-yellow-400 hover:transition-all">
            <a href="#">
              <svg
                className="mx-auto my-auto w-10 h-10"
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
        {/* links de navegacion  */}
        <div className="hidden md:flex text-center justify-center items-center flex-col text-white h-screen w-80  space-y-5 my-auto bg-slate-900 hove:bg-yellow-600 ">
          {/* links */}
          <a href="#" className="bg-yellow-600 text-white w-full py-6">
            ABOUT
          </a>
          <a href="#" className=" hover:bg-yellow-600 w-full py-6">
            SKILL
          </a>
          <a href="#" className="hover:bg-yellow-600 w-full py-6">
            PROJECTS
          </a>
          <a href="#" className=" hover:bg-yellow-600 w-full  py-6">
            CONTACT
          </a>
        </div>
      </div>

      {/* div mobile  */}
      <div className="px-10 md:hidden">
        {/* navmobile */}
        <div className="flex justify-between h-16 items-center md:block">
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
          {/* logo  */}
          <div className="items-center md:hidden">
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
        </div>

        {/* nav-items-mobile */}
        <div className=" hidden space-y-1 pb-3 border-t py-2 md:hidden ">
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
      </div>
    </div>
  );
}
