import { Component, PropsWithChildren } from 'react';
import './GlobalStyles.scss';

interface Props extends PropsWithChildren<unknown>{   }

class GlobalStyles extends Component<Props> {
  render() {
    return(
      <>
    {this.props.children}
      </>
  )
  }
}

export default GlobalStyles;
