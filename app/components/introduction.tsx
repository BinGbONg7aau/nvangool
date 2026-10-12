import Image from "next/image";

export default function Intro() {
  return (
    <>
      <div className="pt-8 lg:py-8 px-4 lg:px-12">
        <div className="w-full flex flex-col-reverse lg:flex-row lg:py-8 lg:px-24 gap-8">
          <div className="flex flex-col w-full lg:w-1/2 p-4 justify-center">
            <p className="lg:text-end text-xl">
              Hello, I{"'"}m Nikolaj, a software developer with a BSc in
              Software from Aalborg University, which I completed in
              June 2026.
              <br />
              <br />
              I have worked on software projects
              spanning the entire development process, from analysing problems
              and defining requirements to designing, implementing, testing, and
              evaluating solutions.
            </p>
          </div>
          <div className="w-full lg:w-1/2 shadow-[8px_8px_0px_0px_theme(colors.projectYellow)]">
            <div className="relative h-80 w-full">
              <Image
                src="/nikolaj.jpeg"
                fill
                alt="Image of Nikolaj Krog van Gool"
                className="object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
