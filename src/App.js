import { GlobalStyle } from './Components/GlobalStyles';
import { SearchBar } from 'Components/SearchBar/SearchBar';
import { ImageGallery } from 'Components/ImageGallery/ImageGallery';
import { Button } from 'Components/Button/Button';
function App() {
  return (
    <>
      <GlobalStyle />
      <SearchBar />
      <ImageGallery />
      <Button />
    </>
  );
}

export default App;
