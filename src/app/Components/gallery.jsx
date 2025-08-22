import Link from "next/link";

export default async function Gallery() {
  const gallery = [
    {
      "id": 1,
      "title": "Sunset Overdrive",
      "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      "category": "Landscape",
      "description": "A beautiful digital painting of a sunset over mountains.",
      "details": "Created using digital oil brushes. Resolution: 4K. Artist: John Doe. Inspiration came from Himalayan sunsets."
    },
    {
      "id": 2,
      "title": "Cyberpunk City",
      "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      "category": "Sci-Fi",
      "description": "A futuristic cityscape with neon lights and flying cars.",
      "details": "Rendered in Blender with neon lighting effects. 3D assets designed by ArtifyHub Team. Perfect for Sci-Fi posters."
    },
    {
      "id": 3,
      "title": "Abstract Waves",
      "image": "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      "category": "Abstract",
      "description": "Colorful waves representing fluidity and creativity.",
      "details": "Made with Procreate & Adobe Illustrator. Features vibrant gradients and modern abstract style."
    },
    {
      "id": 4,
      "title": "Forest Serenity",
      "image": "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      "category": "Nature",
      "description": "A calm forest scene with sunlight filtering through trees.",
      "details": "Captured in 8K resolution with a DSLR camera. Location: Pacific Northwest. Edited with Lightroom."
    },
    {
      "id": 5,
      "title": "Ocean Depths",
      "image": "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      "category": "Marine",
      "description": "Deep blue underwater view with glowing fish and corals.",
      "details": "3D Render with Cinema4D. Includes animated lighting effects for glowing marine life."
    },
    {
      "id": 6,
      "title": "Vintage Car",
      "image": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      "category": "Automobile",
      "description": "Classic vintage car showcased in a retro style.",
      "details": "Photographed at Auto Expo 2023. Car Model: 1967 Mustang GT. Edited to add retro filters."
    },
    {
      "id": 7,
      "title": "Mountain Escape",
      "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      "category": "Adventure",
      "description": "Snow-capped mountains with a scenic hiking trail.",
      "details": "Taken during an expedition in the Alps. High contrast and HDR effects applied."
    },
    {
      "id": 8,
      "title": "City at Night",
      "image": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      "category": "Urban",
      "description": "Skyscrapers lit up in vibrant colors under a starry sky.",
      "details": "Long exposure shot to capture lights and stars. Location: New York Skyline. Perfect for wallpapers."
    }
  ];

  const items = gallery.slice(0, 8);

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of stunning artworks from talented artists around the world
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          <button className="btn btn-primary">All</button>
          <button className="btn btn-ghost">Landscape</button>
          <button className="btn btn-ghost">Sci-Fi</button>
          <button className="btn btn-ghost">Abstract</button>
          <button className="btn btn-ghost">Nature</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="card bg-base-100 shadow-xl overflow-hidden group">
              <figure className="overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute top-4 right-4 badge badge-primary badge-outline">
                  {item.category}
                </div>
              </figure>
              <div className="card-body p-5">
                <h3 className="card-title text-lg">{item.title}</h3>
                <p className="text-gray-600 mt-2 line-clamp-2">{item.description}</p>
                <div className="card-actions justify-between items-center mt-4">
                  <div className="flex items-center">
                    <div className="avatar mr-2">
                      <div className="w-8 rounded-full">
                        <img src="https://i.pravatar.cc/300" alt="artist" />
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">John Doe</span>
                  </div>
                  <Link href={`/gallery/${item.id}`} className="btn btn-primary btn-sm">
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/gallery" className="btn btn-outline btn-primary btn-wide">
            View All Artworks
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}