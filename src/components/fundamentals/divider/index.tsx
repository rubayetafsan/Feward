// React components
import React from 'react';

// Material.ui components
import {Divider as FDivider} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Utilities
import clsx from 'clsx';

export interface FDividerProps {
    light?: boolean;
    className?: string;
    background?: string;
    variant?: 'fullWidth' | 'inset' | 'middle';
}

export const useStyles = makeStyles(() => ({
    root: ({ background }: FDividerProps) => ({
        background: background,
    }),
}));

const Divider: React.FC<FDividerProps> = (props) => {

    const classes = useStyles(props);
    
    const {
        children,
        light,
        variant,
        className
    } = props;

    const DividerClass = clsx(className, classes.root);

    return (
        <FDivider className={DividerClass} light={light} orientation={'horizontal'} variant={variant}>
            {children}
        </FDivider>
    )
};

export default Divider;