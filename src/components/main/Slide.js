import React from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

export default class Slide extends React.Component{
  render(){
  const images = [
    {
      original: '/img/photos/original/A.png',
      thumbnail: '/img/photos/original/a.png',
    },
    {
      original: '/img/photos/original/B.png',
      thumbnail: '/img/photos/original/b.png',
    },
    {
      original: '/img/photos/original/C.png',
      thumbnail: '/img/photos/original/c.png',
    },
    {
      original: '/img/photos/original/D.png',
      thumbnail: '/img/photos/original/d.png',
    },
    {
      original: '/img/photos/original/E.png',
      thumbnail: '/img/photos/original/e.png',
    },
    {
      original: '/img/photos/original/F.png',
      thumbnail: '/img/photos/original/f.png',
    },
    {
      original: '/img/photos/original/G.png',
      thumbnail: '/img/photos/original/g.png',
    },
  ]
  return ( 
    <ImageGallery items={images} />
  )
  }
}