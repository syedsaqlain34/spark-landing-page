export default function PlatformSection() {
  return (
    <div className="w-full mx-auto px-4  lg:px-8">
      <div className="h-20 w-full mx-auto"></div>

      <div className="text-left w-full mx-auto  px-4">
        {/* Title */}
        <h2 className="text-2xl md:text-xl sm:text-lg lg:text-3xl font-bold tracking-normal leading-8 lg:leading-9 mt-6 mb-4 lg:mb-6">
          Supported Platforms and Devices
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-6 lg:leading-7 my-4 lg:my-6">
          spark is currently available on{" "}
          <a
            href=""
            className="font-semibold text-[#21262e] hover:underline"
          >
            iOS
          </a>
          ,{" "}
          <a
            href=""
            className="font-semibold text-[#21262e] hover:underline"
          >
            Android
          </a>
          , and{" "}
          <a
            href=""
            className="font-semibold text-[#21262e] hover:underline"
          >
            HMS
          </a>{" "}
          devices. Along with our mobile apps, you can visit{" "}
          <a
            href=""
            className="font-semibold text-[#21262e] hover:underline"
          >
            Tinder.com
          </a>{" "}
          to use spark for Web.
        </p>

        {/* Tinder Lite */}
        <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-6 lg:leading-7 my-4 lg:my-6">
          We also offer a lightweight version of Tinder you can take anywhere
          and everywhere - download spark Lite from the{" "}
          <a
            href=""
            className="font-semibold text-[#21262e] hover:underline"
          >
            Google Play store
          </a>
          .
        </p>

        {/* Supported Versions */}
        <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-6 lg:leading-7 my-4 lg:my-6">
          Spark currently supports iOS 15.0 and up, Android 7.0 and up, and the
          latest versions of all major web browsers (Chrome, Firefox, Safari,
          Edge, etc.).
        </p>
      </div>
    </div>
  );
}
