// app/gallery/[id]/page.js
import Link from 'next/link';
import Image from 'next/image';
import dbConnect, { collectionNameObj } from '@/lib/dbConnect';
import mongoose from 'mongoose';
const { ObjectId } = mongoose.Types;


export default async function GalleryDetailPage({ params }) {
  const p = await params;
  const artwork = await dbConnect("gallery").findOne({_id: new ObjectId(p.id)})

  
  if (!artwork) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Artwork Not Found</h1>
          <p className="text-gray-600 mb-8">The artwork you're looking for doesn't exist.</p>
          <Link href="/gallery" className="btn btn-primary">
            Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-8">
      <div className="w-11/12 mx-auto px-4">
        {/* Breadcrumb Navigation */}
        <div className="text-sm breadcrumbs mb-8">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li className="text-primary">{artwork.title}</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Artwork Image Section */}
          <div className="flex flex-col">
            <div className="card bg-base-100 shadow-xl overflow-hidden">
              <figure className="relative h-96 lg:h-[500px]">
                <img 
                  src={artwork.image} 
                  alt={artwork.title} 
                  className="w-full h-full object-cover"
                />
              </figure>
            </div>
            
            {/* Action Buttons */}
            <div className="flex justify-between mt-6">
              <button className="btn btn-outline">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Like ({artwork.likes})
              </button>
              <button className="btn btn-outline">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Share
              </button>
              <button className="btn btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Purchase
              </button>
            </div>
          </div>

          {/* Artwork Details Section */}
          <div className="flex flex-col space-y-6">
            <div>
              <span className="badge badge-primary badge-lg">{artwork.category}</span>
              <h1 className="text-4xl font-bold mt-2">{artwork.title}</h1>
              <p className="text-gray-600 mt-4 text-lg">{artwork.description}</p>
            </div>

            {/* Artist Info */}
            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
              <div className="avatar">
                <div className="w-16 rounded-full">
                  <img src={artwork.artistAvatar} alt={artwork.artist} />
                </div>
              </div>
              <div>
                <h3 className="font-semibold">Created by {artwork.artist}</h3>
                <p className="text-gray-500">Digital Artist</p>
              </div>
              <button className="btn border border-gradient-to-r from-purple-600 to-blue-600 btn-sm ml-auto">Follow</button>
            </div>

            {/* Artwork Details */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4">Artwork Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold">Creation Date</h3>
                  <p className="text-gray-600">{artwork.created}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Dimensions</h3>
                  <p className="text-gray-600">{artwork.size}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Price</h3>
                  <p className="text-primary font-bold">{artwork.price}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Views</h3>
                  {/* <p className="text-gray-600">{artwork?.views?.toLocaleString()}</p> */}
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="font-semibold">Full Description</h3>
                <p className="text-gray-600 mt-2">{artwork.details}</p>
              </div>
              
              <div className="mt-6">
                <h3 className="font-semibold">Tags</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {artwork.tags?.map((tag, index) => (
                    <span key={index} className="badge badge-outline">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Related Artworks */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4">Related Artworks</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="cursor-pointer group">
                  <div className="overflow-hidden rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                      alt="Forest" 
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <p className="mt-2 font-medium">Forest Serenity</p>
                </div>
                <div className="cursor-pointer group">
                  <div className="overflow-hidden rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                      alt="Ocean" 
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <p className="mt-2 font-medium">Ocean Depths</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold mb-6">Comments (3)</h2>
          <div className="space-y-6">
            <div className="flex space-x-4">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" alt="User" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold">Alex Morgan</h4>
                  <span className="text-sm text-gray-500">2 days ago</span>
                </div>
                <p className="text-gray-600 mt-2">This artwork is absolutely stunning! The colors and composition are perfect.</p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" alt="User" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold">Michael Chen</h4>
                  <span className="text-sm text-gray-500">5 days ago</span>
                </div>
                <p className="text-gray-600 mt-2">I love how the artist captured the lighting in this piece. Amazing work!</p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" alt="User" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold">Jessica Williams</h4>
                  <span className="text-sm text-gray-500">1 week ago</span>
                </div>
                <p className="text-gray-600 mt-2">The attention to detail is incredible. I could look at this for hours!</p>
              </div>
            </div>
          </div>
          
          {/* Add Comment Form */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Add a Comment</h3>
            <textarea className="textarea textarea-bordered w-full" placeholder="Your comment..."></textarea>
            <button className="btn btn-primary mt-4">Post Comment</button>
          </div>
        </div>
      </div>
    </div>
  );
}