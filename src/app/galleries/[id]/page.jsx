import React from 'react'

export default async function galleryDetailsPage({params}) {
    const p = await params;
  return (
    <div><p>{p.id}</p></div>
  )
}
