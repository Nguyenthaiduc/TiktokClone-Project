import React from 'react'
import classNames from 'classnames/bind'
import styles from './Popper.module.scss'

interface PropTypes{
    children?: React.ReactNode
}

const cx = classNames.bind(styles)

const Wrapper : React.FC<PropTypes> = ({children}) => {
  return (
    <div className={cx('wrapper')}>
        {children}
    </div>
  )
}

export default Wrapper