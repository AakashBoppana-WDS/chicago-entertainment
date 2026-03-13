const images = [
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-black py-20">

      <div className="px-10 max-w-6xl mx-auto">

        <h2 className="text-3xl text-center text-cyan-400 font-bold mb-12">
          Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Gallery image ${i}`}
              className="rounded-lg object-cover h-[220px] w-full hover:scale-105 transition duration-300"
            />
          ))}

        </div>

      </div>

    </section>
  );
}