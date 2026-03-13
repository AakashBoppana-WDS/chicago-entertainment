export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/images/banner_01.jpg')",
      }}
    >

      <div className="text-center bg-black/60 p-10 rounded">

        <h1 className="text-5xl font-bold mb-4 text-blue-500">
          JUST SAY CHEESE !
        </h1>

        <p className="max-w-xl text-gray-300 mx-auto">
          Capture unforgettable moments with our modern
          photo booth experience for weddings and parties.
        </p>

        <button className="mt-6 bg-cyan-500 px-6 py-3 rounded">
          Discover More
        </button>

      </div>

    </section>
  );
}