import { Component } from 'react';

export class Button extends Component {
  render() {
    return (
      <button type="button" onClick={this.props.onClick}>
        Load More
      </button>
    );
  }
}
