import React from 'react';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '../../Button';

const cx = classNames.bind(styles)


type Props = {
    data: {
        icon: React.ReactElement;
        title: string;
        type?:string;
        to?: string;
        separate?: boolean;
    },
    onClick : () => void;
}
// Remove React.FC from Typescript template
const MenuItem  = ({ data,onClick }: Props): JSX.Element => {
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

export default MenuItem;