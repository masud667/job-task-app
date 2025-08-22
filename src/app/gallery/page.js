// app/gallery/page.js
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../Components/Navbar';
import dbConnect from '@/lib/dbConnect';

// This function will read from your public/gallery.json file
async function getGalleryData() {
  try {
   
    const data = await dbConnect("gallery").find({}).toArray();
    return data;
  } catch (error) {
    console.error('Failed to fetch gallery data:', error);
    return [];
  }
}
export default async function GalleryPage() {
  const galleryData = await getGalleryData();

  return (
    <div>
        <Navbar></Navbar>
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Art Gallery</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our stunning collection of digital artworks from talented artists around the world
          </p>
        </div>

        {/* Filter Section */}
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          <button className="btn btn-primary">All</button>
          <button className="btn btn-ghost">Landscape</button>
          <button className="btn btn-ghost">Sci-Fi</button>
          <button className="btn btn-ghost">Abstract</button>
          <button className="btn btn-ghost">Nature</button>
          <button className="btn btn-ghost">Marine</button>
          <button className="btn btn-ghost">Automobile</button>
          <button className="btn btn-ghost">Adventure</button>
          <button className="btn btn-ghost">Urban</button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
          {galleryData.map((item) => (
            <div key={item.id} className="card bg-base-100 shadow-xl overflow-hidden group">
              <figure className="overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute top-4 right-4 badge badge-primary">
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
                    <span className="text-sm text-gray-500">Artist Name</span>
                  </div>
                  <Link href={`/gallery/${item.id}`} className="btn btn-primary btn-sm">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="btn btn-outline btn-primary btn-wide">
            Load More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}