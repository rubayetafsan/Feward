// React Components
import React from 'react';

// Material UI Components
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

// Feward components
import ContactForm from 'components/containers/contactForm';

export interface FContactProps {
    text?: string;
}

export const useStyles = makeStyles((theme: Theme) => ({
    root: ({ text }: FContactProps) => ({
        display: "block",
        maxWidth: 1440,
        width: '100%',
        margin: '50px auto',
        padding: '0% 11%',
    })
}));

const Contact: React.FC<FContactProps> = (props) => {
    
    const classes = useStyles(props);

    const { text = 'Contact' } = props;

    return (
        <Box className={classes.root}>
            <h3>Get in Touch</h3>
            <p>Want to talk with us? You can reach the contact person by filling up this form and we'll connect you to the correct person based to your request.</p>
            <ContactForm />
        </Box>
    )
};

export default Contact;