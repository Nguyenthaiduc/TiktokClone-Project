import React from 'react'

import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
import Button from '../../Button'

const cx = classNames.bind(styles)


interface PropTypes {
    data: {
        icon: React.ReactElement;
        title: string;
        type?:string;
        to?: string | undefined;
        separate?: boolean | undefined;
    },
    onClick : () => void
}

const MenuItem : React.FC<PropTypes> = ({data,onClick}) => {
    const classes = cx('menu-item',{
        separate: data.separate,
    })
  return (
   <Button 
   leftIcon={data.icon}
   to={data.to}
   className = {cx(classes)}
   onClick = {onClick}


   >
       {data.title}
       </Button>
  )
}

export default MenuItem