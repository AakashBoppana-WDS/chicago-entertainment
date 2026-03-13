export default function Contact() {
  return (
    <section id="contact" className="py-20 px-10 bg-black">

      <h2 className="text-3xl text-center text-cyan-400 font-bold mb-12">
        Contact
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">

        <form className="space-y-4">

          <input
            placeholder="Name"
            className="w-full p-3 bg-black border border-gray-700 rounded text-white"
          />

          <input
            placeholder="Email"
            className="w-full p-3 bg-black border border-gray-700 rounded text-white"
          />

          <textarea
            placeholder="Message"
            className="w-full p-3 bg-black border border-gray-700 rounded h-32 text-white"
          />

          <button className="bg-cyan-500 px-6 py-3 rounded">
            Send
          </button>

        </form>

        <div>
          <p className="text-gray-400 mb-2">
            📍 Chicago, USA
          </p>

          <p className="text-gray-400 mb-2">
            📧 hello@photobooth.com
          </p>

          <p className="text-gray-400">
            📞 +1 800 123 456
          </p>
        </div>

      </div>

    </section>
  );
}