import { Component } from 'react';

export class SearchBar extends Component {
  render() {
    return (
      <header>
        <form>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
