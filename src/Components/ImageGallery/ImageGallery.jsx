import { Component } from 'react';
import { ImageGalleryItem } from '../ImagegalleryItem/ImagegalleryItem';

export class ImageGallery extends Component {
  handleClick = largeImageURL => {
    this.props.onClose(largeImageURL);
  };
  render() {
    const { items } = this.props;
    return (
      <ul>
        {items.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            id={id}
            imageUrl={webformatURL}
            onClick={() => this.handleClick(largeImageURL)}
          />
        ))}
      </ul>
    );
  }
}
