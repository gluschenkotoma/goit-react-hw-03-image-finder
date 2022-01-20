import { GlobalStyle } from './Components/GlobalStyles';
import { SearchBar } from 'Components/SearchBar/SearchBar';
import { ImageGallery } from 'Components/ImageGallery/ImageGallery';
import { Button } from 'Components/Button/Button';
import { Loader } from 'Components/Loader/Loader';
import { Modal } from 'Components/Modal/Modal';

function App() {
  return (
    <>
      <GlobalStyle />
      <SearchBar />
      <ImageGallery />
      <Modal />
      <Button />
      <Loader />
    </>
  );
}

export default App;
