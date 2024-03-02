import React from "react";

export default function About() {
  return (
    // div contenedor
    <div className="flex flex-col items-center justify-center min-h-screen p-5 text-center ">
      {/* //titulo */}
      <h1 className="text-3xl mb-2">
        Hola soy Full Stack Developer
      </h1>{" "}
      <h3 className="text-lg m-b4">De Jujuy - Argentina</h3>
      <p className="text-center mb-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>
      <div className="btn-custom btn-primary flex items-center">
        <span className="mr-4" >
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
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            ></path>
          </svg>
        </span>
        Descargar CV
      </div>
    </div>
  );
}
