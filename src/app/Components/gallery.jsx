import dbConnect from "@/lib/dbConnect";
import Link from "next/link";

// This function will read from db data file
async function getGalleryData() {
  try {
    const data = await dbConnect("gallery").find({}).toArray();
    return data;
  } catch (error) {
    console.error("Failed to fetch gallery data:", error);
    return [];
  }
}
export default async function Gallery() {
  const galleryData = await getGalleryData();
  const items = galleryData.slice(0, 6);

  return (
    <section className="py-16 bg-base-100">
      <div className="w-11/12 mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of stunning artworks from talented
            artists around the world
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="card bg-base-100 shadow-xl overflow-hidden group">
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
                <p className="text-gray-600 mt-2 line-clamp-2">
                  {item.description}
                </p>
                <div className="card-actions justify-between items-center mt-4">
                  <div className="flex items-center">
                    <div className="avatar mr-2">
                      <div className="w-8 rounded-full">
                        <img src="https://i.pravatar.cc/300" alt="artist" />
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">John Doe</span>
                  </div>
                  <Link
                    href={`/gallery/${item._id}`}
                    className="btn btn-primary btn-sm">
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/gallery"
            className="btn btn-outline btn-primary btn-wide">
            View All Artworks
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
