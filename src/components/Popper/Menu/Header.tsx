
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { images } from '@/assets/images';
import { Component } from 'react';

const cx = classNames.bind(styles)

type Props = {
    title?: string
    onBack?: () => void
}
// Remove React.FC from Typescript template
class Header extends Component<Props> {
    render() {
        return (
            <header className={cx('header')}>
                <button className={cx('back-btn')} onClick = {this.props.onBack}>
                    <img src ={images.back} />
                </button>
    
                <h4 className={cx('header-title')}>{this.props.title}</h4>
            </header>
        )
    }
}


export default Header