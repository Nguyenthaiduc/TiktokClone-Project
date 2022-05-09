import React, { ForwardRefExoticComponent, RefAttributes } from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link, LinkProps } from 'react-router-dom';

const cx = classNames.bind(styles);

interface PropTypes {
    to: string;
    href?: string;
    primary?: string | boolean;
    outline?: string | boolean;
    small?: string | boolean;
    large?: string | boolean;
    text?: string | boolean;
    disabled?: string | boolean;
    onClick?: any;
    children?: React.ReactNode;
}
type CompoType = ForwardRefExoticComponent<LinkProps & RefAttributes<HTMLAnchorElement>> | string;

const Button: React.FC<PropTypes> = ({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    disabled = false,
    onClick,
    children,
    ...passProps
}) => {
    let Comp: CompoType = 'button';
    const props = { onClick, to, href, ...passProps };

    //Remove Event Listener when Button disabled
    if(disabled) {
        Object.keys(props).forEach((key ) => {
            if(key.startsWith('on') && typeof props[key] === 'function'){
                delete props[key]
            }
        })
        delete props.onClick
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        text,
        disabled, 
        small,
        large,
    });

    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
};

export default Button;
