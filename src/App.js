import { Component } from 'react';
import { GlobalStyle } from './Components/GlobalStyles';
import { SearchBar } from 'Components/SearchBar/SearchBar';
import { ImageGallery } from 'Components/ImageGallery/ImageGallery';
import { Button } from 'Components/Button/Button';
import { Loader } from 'Components/Loader/Loader';
import { Modal } from 'Components/Modal/Modal';
import { getPictures } from 'services/pickturesApi';

export class App extends Component {
  state = {
    items: [],
    query: '',
    page: 1,
    isLoading: false,
    error: false,
  };

  fetchPictures = () => {
    const { query, page } = this.state;

    getPictures(query, page)
      .then(items =>
        this.setState(prevState => ({
          items: [...prevState.items, ...items],
          page: prevState.page + 1,
        }))
      )
      .catch(error => this.setState({ error: true }))
      .finally(() => this.setState({ isLoading: false }));
  };
  render() {
    const { items } = this.state;
    return (
      <>
        <GlobalStyle />
        <SearchBar onSubmit={this.fetchPictures}></SearchBar>
        <ImageGallery items={items} />
        <Modal />
        <Button onClick={this.fetchPictures} />
        <Loader />
      </>
    );
  }
}

export default App;
