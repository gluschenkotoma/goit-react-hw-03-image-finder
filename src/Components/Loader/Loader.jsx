import { Component } from 'react';

import ClipLoader from 'react-spinners/ClipLoader';
import { css } from '@emotion/react';

const override = css`
  display: block;
  margin: 0 auto;
  size: 100px;

  border-color: #6556bd;
`;
export class Loader extends Component {
  render() {
    return (
      <>
        <ClipLoader css={override} />
      </>
    );
  }
}
