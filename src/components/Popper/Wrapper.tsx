import React from 'react'
import classNames from 'classnames/bind'
import styles from './Popper.module.scss'

interface PropTypes{
    className?:string
    children?: React.ReactNode
}

const cx = classNames.bind(styles)

const Wrapper : React.FC<PropTypes> = ({children,className}) => {
  return (
    <div className={cx('wrapper',className)}>
        {children}
    </div>
  )
}

export default Wrapper