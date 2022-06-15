import React, { ForwardRefExoticComponent, RefAttributes } from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link, LinkProps } from 'react-router-dom';

const cx = classNames.bind(styles);

interface PropTypes {
    to?: string;
    href?: string;
    primary?: string | boolean;
    outline?: string | boolean;
    small?: string | boolean;
    large?: string | boolean;
    text?: string | boolean;
    rounded?: string | boolean;
    disabled?: string | boolean;
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string | boolean | symbol | any;
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
}
type CompoType = ForwardRefExoticComponent<LinkProps & RefAttributes<HTMLAnchorElement>> | string

const Button: React.FC<PropTypes> = ({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    rounded = false,
    disabled = false,
    onClick,
    children,
    className,
    leftIcon,
    rightIcon,
    ...passProps
}) => {
    let Comp: CompoType = 'button';
    const props = { onClick, to, href, ...passProps } as any;

    //Remove Event Listener when Button disabled
    if(disabled) {
        Object.keys(props).forEach((key ) => {
            if(key.startsWith('on') && typeof props[key] === 'function'){
                delete props[key]
            }
        })
        
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className] : className,
        primary,
        outline,
        text,
        disabled,
        rounded, 
        small,
        large,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
};

export default Button;
