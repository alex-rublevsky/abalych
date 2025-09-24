import FramerMagnetic from "./FramerMagnetic";
//import { AnimatedGroup } from "./motion_primitives/animated-group";

export default function FooterContact() {
  return (
    <section className="w-full relative h-[100dvh] md:h-[100dvh] no-padding no-padding-bottom z-[100] overflow-hidden">
      <div className="relative w-full h-full">
        {/* Background image */}
        <img
          src="https://assets.abaly.ch/forest-portrait.jpg"
          alt="forest portrait"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Content wrapper with blend mode */}
        <div className="absolute inset-0 mix-blend-difference">
          <div className="relative h-full flex flex-col items-center justify-end">
            <img
              src="https://assets.abaly.ch/graffiti.webp"
              alt="graffiti"
              className="absolute left-1/2 pl-4 -translate-x-1/2 -top-0 w-full max-h-[50dvh] object-contain"
            />
            <div className="flex flex-col items-center justify-center gap-0 h-fit pt-42 ">
              <h5 className="opacity-50 -translate-y-5 md:translate-y-0 lg:translate-y-10 text-white">
                Contact me
              </h5>
              {/* TODO: used to be animated group before */}
              <div
                //amount={0}
                //delay={0}
                className="pb-20 gap-x-16 grid grid-cols-2 gap-y-10 sm:gap-y-6 sm:flex sm:flex-wrap md:gap-0 justify-center relative"
              >
                <FramerMagnetic>
                  <a
                    className="p-0 md:p-12 lg:p-20 flex align-middle justify-center cursor-pointer group"
                    id="instagram"
                    href="https://www.instagram.com/abalych/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="group-hover:fill-white h-14 md:h-20 fill-accent transition-all duration-300"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </a>
                </FramerMagnetic>
                <FramerMagnetic>
                  <a
                    className="p-0 md:p-12 lg:p-20 flex align-middle justify-center cursor-pointer group"
                    href="https://t.me/sosipisososipisos"
                    id="telegram"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                      className="group-hover:fill-white h-14 md:h-20 fill-accent transition-all duration-300"
                    >
                      <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
                    </svg>
                  </a>
                </FramerMagnetic>
             
                <FramerMagnetic>
                  <a
                    className="p-0 md:p-12 lg:p-20 flex align-middle justify-center cursor-pointer group"
                    href="mailto:kristina.abalymova@gmail.com"
                    id="mail"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="group-hover:fill-white h-14 md:h-20 fill-accent transition-all duration-300"
                    >
                      <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                    </svg>
                  </a>
                </FramerMagnetic>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
