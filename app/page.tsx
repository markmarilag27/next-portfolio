import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <article className="relative flex flex-wrap justify-center items-center min-h-screen h-full py-32">
          <div className="flex w-full flex-wrap flex-col-reverse gap-8 xl:flex-row max-w-screen-xl px-4 items-center pb-56">
            <div className="w-full max-w-screen-sm">
              <h1 className="text-5xl xl:text-9xl text-white font-bold tracking-wider mb-6">
                Hello, Im Mark Marilag.
              </h1>
              <p className="text-2xl text-gray-100 tracking-wider leading-loose">
                I’m a full stack developer with 8 years of experience building
                different types of web applications, from green field
                development or maintaining legacy codebase and moving it to the
                latest technology.
              </p>
            </div>

            <div className="w-full xl:w-64 pointer-events-none z-10 sm:mb-4">
              <figure className="relative block mx-auto xl:mx-28 w-64">
                <Image
                  src="/me.png"
                  alt="Mark Marilag"
                  title="Mark Marilag"
                  width="256"
                  height="256"
                  className="rounded-full"
                />
              </figure>
            </div>

            <figure className="absolute max-w-lg right-8 top-8 pointer-events-none z-0">
              <Image
                src="/philippines.svg"
                alt="Philippines"
                title="Philippines"
                width="1024"
                height="1024"
              />
            </figure>
          </div>
        </article>
      </main>
    </>
  );
}
