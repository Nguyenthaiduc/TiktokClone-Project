import { Component, PropsWithChildren } from 'react';
import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

interface Props extends PropsWithChildren<unknown>{
    className?:string
}

const cx = classNames.bind(styles)
// Remove React.FC from Typescript template
class Wrapper extends Component<Props> {
  render() {
    return(
      <div className={cx('wrapper',this.props.className)}>
        {this.props.children}
    </div>
    )
  }
}
export default Wrapper