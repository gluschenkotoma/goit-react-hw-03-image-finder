import { Component } from 'react';
import { ImageGalleryItem } from '../ImagegalleryItem/ImagegalleryItem';

export class ImageGallery extends Component {
  render() {
    return (
      <ul class="gallery">
        <ImageGalleryItem />
      </ul>
    );
  }
}
