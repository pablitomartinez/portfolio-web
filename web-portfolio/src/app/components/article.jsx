import Image from "next/image";

export default function Article() {
  return (
    <main className="p-4 justify-center ">
      {/* el elemento padre article ajusta el ancho de la tarjeta  */}
      {/* div contenedor  */}
      <div className="mx-auto grid gap-4 max-w-6xl md:grid-cols-2  md:items-center lg:grid-cols-3 ">
        <article className="flex flex-col bg-white shadow rounded overflow-hidden">
          {/* header  */}
          <div className="h-52 ">
            <Image
              className="h-full w-full object-cover object-center "
              src="/img/2.jpeg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
          {/* contenido  */}
          <div className="p-5 flex-1 space-y-3 ">
            <h3 className="text-sm font-semibold text-slate-900">Laravel</h3>
            <h2 className="text-xl font-semibold text-slate-800 leading-tight">
              Desarrollo de una API con Laravel y un par de cositas mas que
              estan una masa
            </h2>
            <p className="text-slate-500 hidden md:block">
              Omnis culpa eveniet sunt totam? Aspernatur eaque perspiciatis,
              illo fugiat alias quod impedit temporibus incidunt eos tempore
              alias quod impedit temporibus incidunt eos tempore Omnis culpa
              eveniet sunt totam? Aspernatur eaque perspiciatis, Omnis culpa
              eveniet sunt totam? Aspernatur eaque perspiciatis, illo fugiat
              alias quod impedit temporibus incidunt eos tempore totam. Minima
              neque sunt sit?
            </p>
          </div>
          {/* fotter  */}
          <div className="flex p-5 space-x-2">
            <Image
              className="w-10 h-10 rounded-full "
              src="https://ui-avatars.com/api?name=Pablo Martinez"
              alt="avatar"
              width={100}
              height={100}
            />
            <div className="flex flex-col justify-center ">
              <span className="text-sm font-semibold leading-4 text-slate-600">
                Pablo Martinez
              </span>
              <span className="text-sm font-semibold leading-4 text-slate-500">
                {" "}
                Feb 28, 2023
              </span>
            </div>
          </div>
        </article>

        <article className="flex flex-col bg-white shadow rounded overflow-hidden  ">
          <div className="h-52 ">
            <Image
              className="h-full w-full object-cover object-center "
              src="/img/4.jpeg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div className="p-5 space-y-5  flex-1">
            <h3 className="text-sm font-semibold text-slate-900">Laravel</h3>
            <h2 className="text-xl font-semibold text-slate-800 leading-tight">
              Desarrollo de una API con Laravel y un par de cositas mas que
              estan una masa
            </h2>
            <p className="text-slate-500  hidden md:block ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
              culpa eveniet sunt totam? Aspernatur eaque perspiciatis, ialias
              quod impedit temporibus incidunt eos tempore fugiat ali poreOmnis
              culpa eveniet sunt totam? Aspernatur eaque perspiciatis, illo
              fugiat alias quod impedit temporibus incidunt eos tempore fugiat
              alias quod impedit temporibus incidunt eos tempore totam. Minima
              neque sunt sit?
            </p>
          </div>
          {/* fotter  */}
          <div className="flex p-5 space-x-2">
            <Image
              className="w-10 h-10 rounded-full "
              src="https://ui-avatars.com/api?name=Pablo Martinez"
              alt="avatar"
              width={100}
              height={100}
            />
            <div className="flex flex-col justify-center ">
              <span className="text-sm font-semibold leading-4 text-slate-600">
                Pablo Martinez
              </span>
              <span className="text-sm font-semibold leading-4 text-slate-500">
                {" "}
                Feb 28, 2023
              </span>
            </div>
          </div>
        </article>

        <article className="flex flex-col bg-white shadow rounded overflow-hidden  ">
          <div className="h-52 ">
            <Image
              className="h-full w-full object-cover object-center "
              src="/img/3.jpeg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div className="p-5 space-y-5 flex-1 ">
            <h3 className="text-sm font-semibold text-slate-900">Laravel</h3>
            <h2 className="text-xl font-semibold text-slate-800 leading-tight">
              Desarrollo de una API con Laravel y un par de cositas mas que
              estan una masa
            </h2>
            <p className="text-slate-500  hidden md:block">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
              culpa eveniet sunt totam? Aspernatur eaque perspiciatis,
              illoporeOmnis culpa eveniet sunt totam? Aspernatur eaque
              perspiciatis, illo fugiat alias quod impedit temporibus incidunt
              eos tempore fugiat aliporeOmnis culpa eveniet sunt totam?
              Aspernatur eaque perspiciatis, illo fugiat alias quod impedit
              temporibus incidunt eos tempore fugiat aliporeOmnis culpa eveniet
              sunt totam? Aspernatur eaque perspiciatis, illo fugiat alias quod
              impedit temporibus incidunt eos tempore fugiat ali fugiat alias
              quod impedit temporibus incidunt eos tempore totam. Minima neque
              sunt sit?
            </p>
          </div>
          {/* fotter  */}
          <div className="flex p-5 space-x-2">
            <Image
              className="w-10 h-10 rounded-full "
              src="https://ui-avatars.com/api?name=Pablo Martinez"
              alt="avatar"
              width={100}
              height={100}
            />
            <div className="flex flex-col justify-center ">
              <span className="text-sm font-semibold leading-4 text-slate-600">
                Pablo Martinez
              </span>
              <span className="text-sm font-semibold leading-4 text-slate-500">
                {" "}
                Feb 28, 2023
              </span>
            </div>
          </div>
        </article>

        <article className="flex flex-col bg-white shadow rounded overflow-hidden  ">
          <div className="h-52 ">
            <Image
              className="h-full w-full object-cover object-center "
              src="/img/4.jpeg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div className="p-5  space-y-5  flex-1">
            <h3 className="text-sm font-semibold text-slate-900">Laravel</h3>
            <h2 className="text-xl font-semibold text-slate-800 leading-tight">
              Desarrollo de una API con Laravel y un par de cositas mas que
              estan una masa
            </h2>
            <p className="text-slate-500  hidden md:block ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
              culpa eveniet sunt totam? Aspernatur eaque perspiciatis, illo
              fugiat alias quod impedit temporibus incidunt eos tempore totam.
              Minima neque sunt sit?
            </p>
          </div>
          {/* fotter  */}
          <div className="flex p-5 space-x-2">
            <Image
              className="w-10 h-10 rounded-full "
              src="https://ui-avatars.com/api?name=Pablo Martinez"
              alt="avatar"
              width={100}
              height={100}
            />
            <div className="flex flex-col justify-center ">
              <span className="text-sm font-semibold leading-4 text-slate-600">
                Pablo Martinez
              </span>
              <span className="text-sm font-semibold leading-4 text-slate-500">
                {" "}
                Feb 28, 2023
              </span>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
