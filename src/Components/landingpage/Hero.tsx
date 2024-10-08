import Image from 'next/image';

export default function Hero() {
  return (
    <main className="bg-white h-full isolate text-center w-full [scrollbar-width:none]">
      <section className="bg-[linear-gradient(to_right_top,#fd267a,#ff6036)] min-h-screen w-full flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row justify-center h-full w-full mx-auto">
          {/* Left Section (Logo and Text) */}
          <div className="flex items-center flex-col justify-center px-2  md:w-1/2">
            <a href="/" className="touch-manipulation text-[#21262e] no-underline">
              {/* New Logo */}
              <Image
                src="/assets/images/sparklogo.png" // Change this to your new logo path
                alt="New Logo"
                width={200} // Adjust the width as necessary
                height={60} // Adjust the height as necessary
                className="w-[250px] md:w-[300px] h-auto bg-transparent  px-7"
              />
              <span className="h-px absolute w-px p-0 border-0 [clip:rect(1px,1px,1px,1px)]">
                Spark Home
              </span>
            </a>

            <h1 className="text-white text-[24px] md:text-[34px] pl-8  pb-2 font-bold tracking-normal leading-[32px] md:leading-[42px] mt-0 md:mt-0 mb-4 mx-4 md:mx-10">
              Meet New People Today
            </h1>

            <a
              className="min-h-12 touch-manipulation text-[#21262e] no-underline bg-transparent cursor-pointer inline-block relative border-0"
              href=""
            >
              <div className="bg-transparent  block h-full min-h-12 min-w-12 opacity-0 absolute -translate-x-2/4 -translate-y-2/4 w-full left-2/4 top-2/4"></div>
              <div className="block relative">
                <span className="block overflow-hidden pointer-events-none absolute shadow-[#21262e_0_0_0_4px] opacity-0 -m-0.5 rounded-[52px] inset-0"></span>
                <div className="block overflow-hidden pointer-events-none absolute bg-none bg-auto bg-repeat bg-scroll bg-white bg-clip-border bg-origin-border rounded-[52px] border-2 border-solid border-transparent inset-0"></div>
                <div className="items-center flex gap-2 justify-center relative px-6  py-2 md:px-6 md:py-3">
                  <div className="items-center px-2 text-[#21262e] flex text-[16px] md:text-[19px] font-bold justify-center tracking-normal leading-[22px] md:leading-[26px] text-center normal-case min-h-[2.6rem]">
                    Download Spark
                  </div>
                </div>
                <span className="block overflow-hidden pointer-events-none absolute bg-[rgba(17,20,24,0.16)] opacity-0 rounded-[52px] inset-0 active:opacity-100"></span>
              </div>
            </a>
          </div>

          {/* Right Section (Image) */}
          <div className="shrink-0 h-full w-full md:w-1/2 mt-8 md:mt-0 flex justify-center items-center relative">
            <div className="flex flex-col justify-center mx-auto relative max-w-[250px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[350px] translate-y-[80px] md:translate-y-[120px]">
              <div className="relative">
                <div className="translate-y-[-24px] md:translate-y-[-34px] scale-90 md:scale-95">
                  <Image
                    className="align-middle"
                    src="/assets/images/image1.png"
                    alt="spark"
                    width={320}
                    height={480}
                    // priority
                  />
                </div>
                <div className="absolute scale-[1.05] md:scale-110 inset-0">
                  <div className="">
                    <Image
                      className="align-middle"
                      src="/assets/images/image2.png"
                      alt="Phone Frame"
                      width={320}
                      height={480}
                      // priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
