import { GlobalStyle } from './Components/GlobalStyles';
import { SearchBar } from 'Components/SearchBar/SearchBar';
import { ImageGallery } from 'Components/ImageGallery/ImageGallery';
function App() {
  return (
    <>
      <GlobalStyle />
      <SearchBar />
      <ImageGallery />
    </>
  );
}

export default App;
