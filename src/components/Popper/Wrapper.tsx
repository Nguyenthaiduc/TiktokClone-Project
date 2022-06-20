import { PropsWithChildren } from 'react';
import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

interface Props extends PropsWithChildren<unknown>{
    className?:string
}

const cx = classNames.bind(styles)
// Remove React.FC from Typescript template
const Wrapper = ({ children,className }: Props): JSX.Element => {
  return (
    <div className={cx('wrapper',className)}>
        {children}
    </div>
  )
}

export default Wrapper