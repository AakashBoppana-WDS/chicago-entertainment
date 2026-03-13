const services = [
  "Photo Booth Rental",
  "Custom Photo Templates",
  "Instant Printing",
  "Fun Props",
  "Online Gallery",
  "Social Sharing",
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-neutral-950">

      <h2 className="text-3xl font-bold text-center text-cyan-400 mb-12">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-10">

        {services.map((service, index) => (
          <div
            key={index}
            className="p-8 border border-gray-800 rounded hover:border-cyan-400"
          >
            <h3 className="text-lg font-semibold mb-3 text-white">
              {service}
            </h3>

            <p className="text-gray-400 text-sm">
              High quality service designed to make your event memorable.
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}