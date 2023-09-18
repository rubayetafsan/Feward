// React Components
import React from 'react';

// Material UI Components
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

export interface FAcademyProps {
    text?: string;
}

export const useStyles = makeStyles((theme: Theme) => ({
    root: ({ text }: FAcademyProps) => ({
        display: "block"
    }),
}));

const Academy: React.FC<FAcademyProps> = (props) => {
    
    const classes = useStyles(props);

    const { text = 'Academy' } = props;

    return (
        <Box className={classes.root}>
            <Typography> {text} </Typography>
        </Box>
    )
};

export default Academy;