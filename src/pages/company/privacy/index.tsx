// React Components
import React from 'react';

// Material UI Components
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

export interface FPrivacyProps {
    text?: string;
}

export const useStyles = makeStyles((theme: Theme) => ({
    root: ({ text }: FPrivacyProps) => ({
        display: "block"
    }),
}));

const Privacy: React.FC<FPrivacyProps> = (props) => {
    
    const classes = useStyles(props);

    const { text = 'Privacy' } = props;

    return (
        <Box className={classes.root}>
            <Typography> {text} </Typography>
        </Box>
    )
};

export default Privacy;