// React Components
import React from 'react';

// Material UI Components
import { Grid, Typography } from '@material-ui/core';

// Utilities
import { useStyles } from './styles';

export interface FGridProps {
    xs?: any;
    md?: any;
    title?: string;
    className?: string;
}

const FGrid: React.FC<FGridProps> = (props) => {

    const { title, children, className, xs=6, md=2 } = props;

    const classes = useStyles(props);

    return (
        <Grid item xs={xs} md={md} >
            <Typography className={classes.textStyle}>{title}</Typography>
            {children}
        </Grid>
    )
};

export default FGrid;