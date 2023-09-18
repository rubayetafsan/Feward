// React Components
import React from 'react';

// Material UI Components
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

export interface FCareerProps {
    text?: string;
}

export const useStyles = makeStyles((theme: Theme) => ({
    root: ({ text }: FCareerProps) => ({
        display: "block"
    }),
}));

const Career: React.FC<FCareerProps> = (props) => {
    
    const classes = useStyles(props);

    const { text = 'Career' } = props;

    return (
        <Box className={classes.root}>
            <Typography> {text} </Typography>
        </Box>
    )
};

export default Career;