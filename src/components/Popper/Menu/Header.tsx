
import React from 'react'

import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
import { images } from '@/assets/images'

const cx = classNames.bind(styles)

interface PropTypes {
    title?: string
    onBack?: () => void
}

const Header:React.FC<PropTypes> = ({title, onBack}) => {

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