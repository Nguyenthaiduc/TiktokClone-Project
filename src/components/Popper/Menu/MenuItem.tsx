import React from 'react'

import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
import Button from '../../Button'

const cx = classNames.bind(styles)


interface PropTypes {
    data: {
        icon: React.ReactElement;
        title: string;
        to?: string | undefined;
    }
}

const MenuItem : React.FC<PropTypes> = ({data}) => {
  return (
   <Button 
   leftIcon={data.icon}
   to={data.to}
   className = {cx('menu-item')}
   >
       {data.title}
       </Button>
  )
}

export default MenuItem