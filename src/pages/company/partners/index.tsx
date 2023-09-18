// React Components
import React from 'react';

// Material UI Components
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

export interface FPartnersProps {
    text?: string;
}

export const useStyles = makeStyles((theme: Theme) => ({
    root: ({ text }: FPartnersProps) => ({
        display: "block"
    }),
}));

const Partners: React.FC<FPartnersProps> = (props) => {
    
    const classes = useStyles(props);

    const { text = 'Partners' } = props;

    return (
        <Box className={classes.root}>
            <Typography> {text} </Typography>
        </Box>
    )
};

export default Partners;