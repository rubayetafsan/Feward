// React Components
import React from 'react';

// Material UI Components
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

export interface FProductsProps {
    text?: string;
}

export const useStyles = makeStyles((theme: Theme) => ({
    root: ({ text }: FProductsProps) => ({
        display: "block"
    }),
}));

const Products: React.FC<FProductsProps> = (props) => {
    
    const classes = useStyles(props);

    const { text = 'Products' } = props;

    return (
        <Box className={classes.root}>
            <Typography> {text} </Typography>
        </Box>
    )
};

export default Products;