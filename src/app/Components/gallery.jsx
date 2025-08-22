import Link from "next/link";

export default async function Gallery() {
    const gallery = [
  {
    "id": 1,
    "title": "Sunset Overdrive",
    "image": "/images/sunset.jpg",
    "category": "Landscape",
    "description": "A beautiful digital painting of a sunset over mountains.",
    "details": "Created using digital oil brushes. Resolution: 4K. Artist: John Doe. Inspiration came from Himalayan sunsets."
  },
  {
    "id": 2,
    "title": "Cyberpunk City",
    "image": "/images/cyberpunk.jpg",
    "category": "Sci-Fi",
    "description": "A futuristic cityscape with neon lights and flying cars.",
    "details": "Rendered in Blender with neon lighting effects. 3D assets designed by ArtifyHub Team. Perfect for Sci-Fi posters."
  },
  {
    "id": 3,
    "title": "Abstract Waves",
    "image": "/images/abstract.jpg",
    "category": "Abstract",
    "description": "Colorful waves representing fluidity and creativity.",
    "details": "Made with Procreate & Adobe Illustrator. Features vibrant gradients and modern abstract style."
  },
  {
    "id": 4,
    "title": "Forest Serenity",
    "image": "/images/forest.jpg",
    "category": "Nature",
    "description": "A calm forest scene with sunlight filtering through trees.",
    "details": "Captured in 8K resolution with a DSLR camera. Location: Pacific Northwest. Edited with Lightroom."
  },
  {
    "id": 5,
    "title": "Ocean Depths",
    "image": "/images/ocean.jpg",
    "category": "Marine",
    "description": "Deep blue underwater view with glowing fish and corals.",
    "details": "3D Render with Cinema4D. Includes animated lighting effects for glowing marine life."
  },
  {
    "id": 6,
    "title": "Vintage Car",
    "image": "/images/car.jpg",
    "category": "Automobile",
    "description": "Classic vintage car showcased in a retro style.",
    "details": "Photographed at Auto Expo 2023. Car Model: 1967 Mustang GT. Edited to add retro filters."
  },
  {
    "id": 7,
    "title": "Mountain Escape",
    "image": "/images/mountain.jpg",
    "category": "Adventure",
    "description": "Snow-capped mountains with a scenic hiking trail.",
    "details": "Taken during an expedition in the Alps. High contrast and HDR effects applied."
  },
  {
    "id": 8,
    "title": "City at Night",
    "image": "/images/city.jpg",
    "category": "Urban",
    "description": "Skyscrapers lit up in vibrant colors under a starry sky.",
    "details": "Long exposure shot to capture lights and stars. Location: New York Skyline. Perfect for wallpapers."
  }
]

  const items = gallery.slice(0, 4);
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <Link key={item.id} href={`/gallery/${item.id}`}>
              <div className="bg-white shadow rounded overflow-hidden hover:scale-105 transition-transform cursor-pointer">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600 mt-1">{item.description}</p>
                </div>
                <button className="btn "> details</button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
