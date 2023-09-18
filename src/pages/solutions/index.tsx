// React Components
import React from 'react';

// Material UI Components
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

export interface FSolutionsProps {
    text?: string;
}

export const useStyles = makeStyles((theme: Theme) => ({
    root: ({ text }: FSolutionsProps) => ({
        display: "block"
    }),
}));

const Solutions: React.FC<FSolutionsProps> = (props) => {
    
    const classes = useStyles(props);

    const { text = 'Solutions' } = props;

    return (
        <Box className={classes.root}>
            <Typography> {text} </Typography>
        </Box>
    )
};

export default Solutions;