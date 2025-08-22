export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center text-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero.jpg"
          alt="Art Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          Explore the World of Art & Creativity
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-200">
          Discover unique collections, learn about artists, and get inspired.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/gallery"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium shadow-lg hover:scale-105 transition-transform duration-300"
          >
            View Gallery
          </a>
          <a
            href="/about"
            className="px-6 py-3 rounded-full border border-white text-white font-medium hover:bg-white hover:text-black transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
