// React Components
import React from 'react';

// Material UI Components
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';

// Utilities
import { Container} from 'react-bootstrap';

export interface FGermanyProps {
    firstColor?: string;
    secondColor?: string;
    thirdColor?: string;
}

export const useStyles = makeStyles((theme: Theme) => ({
    root: ({  }: FGermanyProps) => ({
        maxWidth: 1440,
        width: '100%',
        height: '100%',
        margin: '0 auto',
        paddingTop: 4,
        paddingBottom: 20,
        flexGrow: 1,
        backgroundColor: 'white'
    }),
    firstBox: ({ firstColor }: FGermanyProps) => ({
        backgroundColor: firstColor,
        padding: 4,
    }),
    secondBox: ({ secondColor }: FGermanyProps) => ({
        backgroundColor: secondColor,
        padding: 4,
    }),
    thirdBox: ({ thirdColor }: FGermanyProps) => ({
        backgroundColor: thirdColor,
        padding: 4,
    }),
}));

const Germany: React.FC<FGermanyProps> = (props) => {
    
    const classes = useStyles(props);

    const { firstColor, secondColor, thirdColor } = props;

    return (
        <Container>
            <Grid container className={classes.root} >
                <Grid item xs={4}><Box className={classes.firstBox}></Box></Grid>
                <Grid item xs={4}><Box className={classes.secondBox}></Box></Grid>
                <Grid item xs={4}><Box className={classes.thirdBox}></Box></Grid>
            </Grid>
        </Container>
    )
};

export default Germany;