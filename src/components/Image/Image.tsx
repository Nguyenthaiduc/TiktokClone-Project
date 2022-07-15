import React, { useState, forwardRef } from 'react';
import { images } from '@/assets/images';
import classNames from 'classnames';
import styles from './Image.module.scss';

interface Props extends React.ComponentPropsWithoutRef<'img'> {
    fallback?: string
}
export type Ref = HTMLImageElement;

const Image = forwardRef<Ref, Props>(({ src, alt, className,fallback: customFallBack=images.noImage, ...props }: Props, ref) => {
    const [fallback, setFallback] = useState<string>('');

    const handleError = () => {
        setFallback(customFallBack);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
