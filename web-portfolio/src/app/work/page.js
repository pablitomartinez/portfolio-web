import React from "react";
import Image from "next/image";

export default function page() {
  return (
    // contenedor
    <div className="flex flex-col md:flex-row items-center">
      {/* izquierda  */}
      <div className="md:w-1/2 p-4">
        {/* titulo del trabajo  */}
        <h2 className="text-2xl font-semibold mb-2 ">Titulo del trabajo</h2>
        <p className="text-base text-slate-800 leading-6">
          Descripcion del trabajo: Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s.
        </p>
        {/* pildoras de lenguajes  */}
        <div className="flex space-x-2">
          <span className="bg-blue-200 text-slate-900 py-1 px-3 rounded-full text-sm">
            React js
          </span>
          <span className="bg-blue-200 text-slate-900 py-1 px-3 rounded-full text-sm">
            Javascrip
          </span>
          <span className="bg-blue-200 text-slate-900 py-1 px-3 rounded-full text-sm">
            Tailwind
          </span>
        </div>
        {/* imagen  */}
        <div className="p-2">
          <Image
            className="h-full w-full object-cover object-center "
            src="/img/3.jpeg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        {/* botones  */}
        <div className="p-4 space-y-2">
          <div className="block  text-center bg-sky-500 p-5 w-full md:inline-block md:w-auto md:mr-2">
            Descargar CV
          </div>
          <div className="block  text-center bg-sky-500 p-5 w-full md:inline-block md:w-auto md:mr-2">
            Descargar CV
          </div>
        </div>
      </div>
      {/* derecha  */}

      {/* paginacion  */}
      <div className="p-5">
        <nav aria-label="Page navigation example">
          <ul class="inline-flex -space-x-px text-sm">
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                5
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
