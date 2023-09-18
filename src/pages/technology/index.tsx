// React Components
import React from 'react';

// Material UI Components
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

export interface FTechnologyProps {
    text?: string;
}

export const useStyles = makeStyles((theme: Theme) => ({
    root: ({ text }: FTechnologyProps) => ({
        display: "block"
    }),
}));

const Technology: React.FC<FTechnologyProps> = (props) => {
    
    const classes = useStyles(props);

    const { text = 'Technology' } = props;

    return (
        <Box className={classes.root}>
            <Typography> {text} </Typography>
        </Box>
    )
};

export default Technology;