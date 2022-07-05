import React, { Component } from 'react';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '../../Button';

const cx = classNames.bind(styles);

type Props = {
    data: {
        icon: React.ReactElement;
        title: string;
        type?: string;
        to?: string;
        separate?: boolean;
    };
    onClick: () => void;
};
class MenuItem extends Component<Props> {
    render() {
        const classes = cx('menu-item', {
            separate: this.props.data.separate,
        });
        return (
            <Button leftIcon={this.props.data.icon} to={this.props.data.to} className={cx(classes)} onClick={this.props.onClick}>
                {this.props.data.title}
            </Button>
        );
    }
}

export default MenuItem;
