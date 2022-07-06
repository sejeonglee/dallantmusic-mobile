/* eslint-disable no-unused-vars */
import React from 'react';

import { ReactComponent as LeftArrow } from '../leftarrow.svg';

type BacklinkProps = {
  path: string;
};

/**
 * Mini 달란트 컴포넌트
 */
class Backlink extends React.Component<BacklinkProps> {
  /**
   *
   * @return {JSX.Element} Single credit component
   */
  render(): JSX.Element {
    return <LeftArrow></LeftArrow>;
  }
}

export default Backlink;
