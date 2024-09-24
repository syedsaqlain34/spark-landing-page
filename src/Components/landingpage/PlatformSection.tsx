export default function PlatformSection() {
  return (
    <div className="w-full mx-auto px-4  lg:px-8">
      <div className="h-20 w-full mx-auto"></div>

      <div className="text-left w-full mx-auto  px-4">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-normal leading-8 lg:leading-9 mt-6 mb-4 lg:mb-6">
          Supported Platforms and Devices
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-6 lg:leading-7 my-4 lg:my-6">
          Tinder is currently available on{" "}
          <a
            href="https://go.tinder.com/web-ios-download"
            className="font-semibold text-[#21262e] hover:underline"
          >
            iOS
          </a>
          ,{" "}
          <a
            href="https://go.tinder.com/web-android-download"
            className="font-semibold text-[#21262e] hover:underline"
          >
            Android
          </a>
          , and{" "}
          <a
            href="https://go.tinder.com/web-hms-download"
            className="font-semibold text-[#21262e] hover:underline"
          >
            HMS
          </a>{" "}
          devices. Along with our mobile apps, you can visit{" "}
          <a
            href="https://tinder.com"
            className="font-semibold text-[#21262e] hover:underline"
          >
            Tinder.com
          </a>{" "}
          to use Tinder for Web.
        </p>

        {/* Tinder Lite */}
        <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-6 lg:leading-7 my-4 lg:my-6">
          We also offer a lightweight version of Tinder you can take anywhere
          and everywhere - download Tinder Lite from the{" "}
          <a
            href="https://open.tinder.com/9K8a/2462a775"
            className="font-semibold text-[#21262e] hover:underline"
          >
            Google Play store
          </a>
          .
        </p>

        {/* Supported Versions */}
        <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-6 lg:leading-7 my-4 lg:my-6">
          Tinder currently supports iOS 15.0 and up, Android 7.0 and up, and the
          latest versions of all major web browsers (Chrome, Firefox, Safari,
          Edge, etc.).
        </p>
      </div>
    </div>
  );
}
