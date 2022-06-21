import Tippy from '@tippyjs/react/headless';
import React, { PropsWithChildren, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { Placement } from 'tippy.js';

const cx = classNames.bind(styles);


export type MenuItems = {
    
        icon: React.ReactElement;
        title: string;
        type?: string;
        to?: string;
        children?: Object;
    };

interface Props extends PropsWithChildren<unknown> {
    items: MenuItems[];
    onChange?: (menuItem: MenuItems) => void;
    hideOnClick?: boolean;
    children?: React.ReactElement
}

type RenderResult = {
    'data-placement': Placement;
    'data-reference-hidden'?: string | undefined;
    'data-escaped'?: string | undefined;
}


const defaultFn = () => {};
// Remove React.FC from Typescript template
const Menu = ({ children, items = [],hideOnClick = false, onChange = defaultFn }: Props): JSX.Element => {
    //state
    const [history, setHistory] = useState([{ data: items } ]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            // Ấn vào Language nó sẽ hiện ra Danh sách Ngôn Ngữ
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev : any) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    // Handle

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const resultRender = (attrs: RenderResult) => (
        <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && (
                    <Header
                        title={current.title}
                        onBack={handleBack}
                    />
                )}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );


    // Reset to first page menu              
    const handleReset = () => {
        setHistory((prev)=> prev.slice(0,1));
    };

    return (
        <Tippy
            interactive
            delay={[0, 700]}
            offset={[12,8]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={resultRender}   
            onHide={handleReset}
            
        >
            {children}
        </Tippy>
    );
};

export default Menu;
