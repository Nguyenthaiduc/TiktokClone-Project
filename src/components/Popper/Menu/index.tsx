import Tippy from '@tippyjs/react/headless'
import React from 'react'

import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
import {Wrapper as PopperWrapper} from '../../../components/Popper'
import MenuItem from './MenuItem'

const cx = classNames.bind(styles)

interface PropTypes {
    items: ({
        icon: React.ReactElement;
        title: string;
        to?: string;
    })[]
    children?: React.ReactElement;

}

const Menu:React.FC<PropTypes> = ({children,items = []}) => {

    const renderItems = () => {
        return items.map((item,index) => (
            <MenuItem key = {index} data = {item}/>
        ))
    }

  return (
    <Tippy
    interactive
    delay ={[0,700]}
    placement='bottom-end'
    render={(attrs) => (
        <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
               {renderItems()}
            </PopperWrapper>
        </div>
    )}
    >

    {children}
    </Tippy>
  )
}

export default Menu