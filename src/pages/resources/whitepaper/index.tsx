// React Components
import React from 'react';

// Material UI Components
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

export interface FWhitepaperProps {
    text?: string;
}

export const useStyles = makeStyles((theme: Theme) => ({
    root: ({ text }: FWhitepaperProps) => ({
        display: "block"
    }),
}));

const Whitepaper: React.FC<FWhitepaperProps> = (props) => {
    
    const classes = useStyles(props);

    const { text = 'Whitepaper' } = props;

    return (
        <Box className={classes.root}>
            <Typography> {text} </Typography>
        </Box>
    )
};

export default Whitepaper;