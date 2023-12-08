import Image from "next/image";
import Hero from "./Hero";
import Button from "./Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-36 lg:pt-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed left-0 top-0 flex w-full justify-center pb-6 pt-8 lg:static lg:w-auto  lg:rounded-xl lg:p-4 overflow-hidden">
          <Image
            src="portrait.jpg"
            alt="Benjamin Cloquet"
            className="rounded-full scale-100"
            width={100}
            height={24}
            priority
          />
        </div>
        <div className="fixed bottom-0 left-0 flex place-items-center p-8 gap-2 h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <span className="text-md lg:text-lg mr-4">
            © 2022 Benjamin Cloquet
          </span>
          <a
            className=""
            href="https://linkedin.com/in/benjamin-cloquet/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="linkedin.svg"
              alt="LinkedIn Logo"
              className="dark:invert"
              width={48}
              height={48}
              priority
            />
          </a>
          <a
            className=""
            href="https://github.com/benjamincloquet"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="github.svg"
              alt="GitHub Logo"
              className="dark:invert"
              width={48}
              height={48}
              priority
            />
          </a>
        </div>
      </div>

      <div className="max-w-5xl w-full p-4 relative flex justify-start items-start after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40">
        <Hero></Hero>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Button text="Resume" href="/benjamincloquet.pdf"></Button>
        <Button text="Email me" href="mailto:benjamin.cloquet@gmail.com"></Button>
        <Button text="LinkedIn" href="https://linkedin.com/in/benjamin-cloquet/"></Button>
        <Button text="GitHub" href="https://github.com/benjamincloquet"></Button>
      </div>
    </main>
  );
}
