// React components
import React from 'react';

// Material.ui components
import { Link as FLink, Box, Typography } from '@material-ui/core';

// Utilities
import { useStyles } from './styles';

export interface FLinkProps {
    href?: string;
    label?: string;
    color?: string;
    target?: string;
    addIcon?: boolean;
    fontSize?: number;
    icon?: JSX.Element;
    className?: string;
    onClick?: () => void;
}

const Link: React.FC<FLinkProps> = (props) => {

    const classes = useStyles(props);

    const { children, target, href, onClick, icon, className } = props;

    return (
        <FLink href={href} onClick={onClick} className={classes.fLink} target={target}>
            <Typography className={`${classes.root} ${className}`}>
                {icon ? <Box className={classes.icon}>{icon}</Box> : undefined}
                {children}
            </Typography>
        </FLink>
    );
};

export default Link;