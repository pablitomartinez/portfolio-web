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
      <div className="px-10 md:hidden bg-slate-900 text-white">
        {/* navmobile */}
        <div className="flex justify-between h-16 items-center md:block">
          {/* boton menu  */}
          <div>LOGO</div>
          {/* DIV darck-mode  */}
          <div className="" >
            <button className="px-2">
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
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                ></path>
              </svg>
            </button>
            <button>
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
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* nav-items-mobile */}
        <div className="justify-center pb-3 py-2 uppercase md:hidden ">
          <a href="#" className=" py-4 px-3 rounded-md">
            Home
          </a>
          <a href="#" className=" px-3 transition-colors py-2 ">
            Work
          </a>
          <a href="#" className=" px-3  transition-colors py-2 ">
            Skill
          </a>
          <a href="#" className=" px-3  transition-colors py-2 ">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
