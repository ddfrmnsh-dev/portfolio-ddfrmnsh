import Image from "next/image";
import Button from "../Button";

export default function IntroduceSection() {
  return (
    <>
      <div className="w-full self-center px-2">
        <div className="relative mt-10">
          <Image
            src="/image/image-profile.png"
            alt="Selfie di gunung"
            width={350}
            height={350}
            className="max-w-full mx-auto"
          />
          <span className="absolute -bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
            <svg
              width="400"
              height="400"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#fbbf24
                                      "
                d="M43.4,-42.8C51,-35.8,48.3,-17.9,47.6,-0.7C46.9,16.5,48.2,33,40.6,44.9C33,56.8,16.5,64,2,62C-12.5,60,-25,48.8,-37.5,36.9C-50,25,-62.6,12.5,-62.7,-0.1C-62.7,-12.6,-50.3,-25.2,-37.8,-32.2C-25.2,-39.2,-12.6,-40.5,2.6,-43.2C17.9,-45.8,35.8,-49.7,43.4,-42.8Z"
                transform="translate(100 100) scale(0.9)"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="max-w-xl self-center px-4 my-5 justify-center">
        <h1 className="text-base font-semibold text-primary md:text-xl">
          Halo Semua ✌, saya
          <span className="block font-bold text-dark text-3xl mt-1 md:4xl">
            Dede Firmansah
          </span>
        </h1>
        <h2 className="font-medium text-secondary text-lg mb-2 md:text-2xl">
          Student & <span className="text-dark">Content Creator</span>
        </h2>
        <p className="font-medium text-secondary mb-4 leading-relaxed">
          Learning from scratch.
          <span className="text-dark font-bold"> Programming & Design.</span>
        </p>
        <Button name="Hubungi Saya" link="/" />
      </div>
    </>
  );
}
