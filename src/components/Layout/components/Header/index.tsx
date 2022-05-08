import React from 'react'
import className from 'classnames/bind'
import styles from './Header.module.scss'


const cx = className.bind(styles)

const Header : React.FC = () => {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/* Logo */}

        {/* Search */}
      </div>
    </header>
  )
}

export default Header