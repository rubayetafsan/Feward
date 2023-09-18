// React Components
import React from 'react';

// Material UI Components
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

// Feward components
import ImagedSection from 'components/containers/imagedSection';

export interface FHomepageProps {
    text?: string;
}

export const useStyles = makeStyles((theme: Theme) => ({
    root: ({ text }: FHomepageProps) => ({
        display: "block"
    }),
}));

const Homepage: React.FC<FHomepageProps> = (props) => {
    
    const classes = useStyles(props);

    const { text = 'Homepage' } = props;

    return (
        <Box className={classes.root}>
            <ImagedSection
                backgroundColor="#002147"
                buttonText="Sign in"
                image="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=906&q=80"
                imagePosition="right"
                text="You've got the power"
                textColor="#f3f1ee"
                title="Feward — your Solution"
            >
            Feward exists to make your life easier. Stay on top of your development and make the most of your money with spending less time with development and more time with innovative features—all with just a contact.
            </ImagedSection>
        </Box>
    )
};

export default Homepage;