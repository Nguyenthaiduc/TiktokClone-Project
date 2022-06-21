
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { images } from '@/assets/images';

const cx = classNames.bind(styles)

type Props = {
    title?: string
    onBack?: () => void
}
// Remove React.FC from Typescript template
const Header = ({title, onBack}: Props): JSX.Element => {

    return (
        <header className={cx('header')}>
            <button className={cx('back-btn')} onClick = {onBack}>
                <img src ={images.back} />
            </button>

            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    )


}

export default Header