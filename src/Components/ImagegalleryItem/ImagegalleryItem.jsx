export const ImageGalleryItem = ({ imageUrl, id, onClick }) => {
  return (
    <li>
      <img src={imageUrl} alt="" onClick={onClick} />
    </li>
  );
};
