// export default function Hero() {
//   return (
//     <main className="bg-white h-full text-center w-full">
//       <section className="bg-[linear-gradient(to_right_top,#fd267a,#ff6036)] min-h-screen w-full flex flex-col items-center justify-center">
//         <div className="flex flex-col md:flex-row justify-center w-full mx-auto">
//           {/* Left Section (Logo and Text) */}
//           <div className="flex items-center flex-col justify-center px-4 md:w-1/2">
//             <a href="/" className="text-white">
//               <svg aria-hidden="true" viewBox="0 0 519 123" className="w-36 md:w-48">
//                 <title>Tinder</title>
//                 <g fillRule="evenodd" fill="none">
//                   {/* Logo paths */}
//                 </g>
//               </svg>
//               <span className="sr-only">Tinder Home</span>
//             </a>

//             <h1 className="text-white text-xl md:text-3xl font-bold mt-4">
//               Meet New People Today
//             </h1>

//             <a
//               className="bg-transparent cursor-pointer inline-block relative border-2 border-white rounded-full mt-4 px-6 py-3"
//               href="https://open.tinder.com/9K8a/ddbsovjl"
//             >
//               <div className="text-white text-lg font-bold">
//                 Download Tinder
//               </div>
//             </a>
//           </div>

//           {/* Right Section (Image) */}
//           <div className="mt-8 md:mt-0  h-full w-full md:w-1/2 flex justify-center items-center relative">
//             <div className="relative max-w-[250px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[350px] mx-auto">
//               <img
//                 className="pt-28 align-middle rounded "
//                 src="https://tinder.com/static/build/build-ssg/static/sabrina-ef55421cc9ee29e9003744d03f748126.webp"
//                 alt="Tinder"
//               />
//               <img
//                 className="py-32  absolute inset-0 z-0 scale-110 "
//                 src="https://tinder.com/static/build/build-ssg/static/phone-frame-4b7178071dd47f185c13d14c95f05b24.webp"
//                 alt="Phone Frame"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

export default function Hero() {
  return (
    <main className="bg-white h-full isolate text-center w-full [scrollbar-width:none]">
      <section className="bg-[linear-gradient(to_right_top,#fd267a,#ff6036)] min-h-screen w-full flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row justify-center h-full w-full mx-auto">
          {/* Left Section (Logo and Text) */}
          <div className="flex items-center flex-col justify-center px-4 md:w-1/2">
            <a href="/" className="touch-manipulation text-[#21262e] no-underline">
              <svg aria-hidden="true" viewBox="0 0 519 123" className="w-[150px] md:w-[200px]">
                <title>Spark</title>
                <g fillRule="evenodd" fill="none">
                  <path fill="var(--color--white, inherit)" d="..." />
                  <path fill="var(--color--white, inherit)" d="..." />
                </g>
              </svg>
              <span className="h-px absolute w-px p-0 border-0 [clip:rect(1px,1px,1px,1px)]">
                Spark Home
              </span>
            </a>

            <h1 className="text-white text-[24px] md:text-[34px] font-bold tracking-normal leading-[32px] md:leading-[42px] mt-4 md:mt-0 mb-4 mx-4 md:mx-10">
              Meet New People Today
            </h1>

            <a
              className="min-h-12 touch-manipulation text-[#21262e] no-underline bg-transparent cursor-pointer inline-block relative border-0"
              href="https://open.tinder.com/9K8a/ddbsovjl"
            >
              <div className="bg-transparent block h-full min-h-12 min-w-12 opacity-0 absolute -translate-x-2/4 -translate-y-2/4 w-full left-2/4 top-2/4"></div>
              <div className="block relative">
                <span className="block overflow-hidden pointer-events-none absolute shadow-[#21262e_0_0_0_4px] opacity-0 -m-0.5 rounded-[52px] inset-0"></span>
                <div className="block overflow-hidden pointer-events-none absolute bg-none bg-auto bg-repeat bg-scroll bg-white bg-clip-border bg-origin-border rounded-[52px] border-2 border-solid border-transparent inset-0"></div>
                <div className="items-center flex gap-2 justify-center relative px-4 py-2 md:px-6 md:py-3">
                  <div className="items-center text-[#21262e] flex text-[16px] md:text-[19px] font-bold justify-center tracking-normal leading-[22px] md:leading-[26px] text-center normal-case min-h-[2.6rem]">
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
                  <img
                    className="align-middle"
                    src="https://tinder.com/static/build/build-ssg/static/sabrina-ef55421cc9ee29e9003744d03f748126.webp"
                    alt="Tinder"
                    loading="lazy"
                  />
                </div>
                <div className="absolute scale-[1.05] md:scale-110 inset-0">
                  <div className="react-aspect-ratio-placeholder">
                    <img
                      className="align-middle"
                      src="https://tinder.com/static/build/build-ssg/static/phone-frame-4b7178071dd47f185c13d14c95f05b24.webp"
                      alt="Phone Frame"
                      loading="lazy"
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
