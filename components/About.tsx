export default function About() {
  return (
    <section id="about" className="bg-black py-20">

      <div className="px-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <img
          src="/images/about.jpg"
          alt="About Photobooth"
          className="rounded-lg w-full object-cover shadow-lg"
        />

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-6">
            About Us
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed">
            We specialize in creating unforgettable photo booth experiences. 
            Our booths bring excitement and fun to weddings, corporate events, 
            birthday parties, and celebrations of all kinds.
          </p>

          <p className="text-gray-400 mb-8">
            With high-quality cameras, instant prints, and fun props, we help 
            guests capture memories they will cherish forever.
          </p>

        
        </div>

      </div>

    </section>
  );
}