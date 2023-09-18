// React Components
import React from 'react';

// Utilities
import clsx from 'clsx';
import { useStyles } from './styles';
import ImageZoom from 'react-medium-image-zoom';

export interface FImageProps {
    alt?: string;
    zoom?: boolean;
    image?: string;
    className?: string;
    blur?: boolean;
    focus?: boolean;
    height?: string;
    width?: string;
}

const Image: React.FC<FImageProps> = (props) => {
    
    const classes = useStyles(props);

    const { zoom, image, className, alt = '', height, width } = props;

    const imageStyle = clsx(classes.root, className)

    return (
        <>
            {
                zoom ? 
                    <ImageZoom
                        image={{
                            src: `${image}`,
                            alt: `${alt}`,
                            className: `${imageStyle}`,
                        }}
                        zoomImage={{
                            src: `${image}`,
                            alt: `${alt}`,
                            className: `${imageStyle}`,
                        }}
                    />    
                : <img src={image} alt={alt} className={imageStyle} height={height} width={width} />
            }
        </> 
    )
};

export default Image;