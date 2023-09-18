// React Components
import React from 'react';

// Material UI Components
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

// Feward components
import Image from 'components/fundamentals/image';
import Button from 'components/fundamentals/button';
import Placement from 'components/fundamentals/placement';

// Utilities
import { useStyles } from './styles';
import { Container} from 'react-bootstrap';

export interface FImagedSectionProps {
    text?: string;
    title?: string;
    image?: string;
    children?: string;
    textColor?: string;
    buttonText?: string;
    backgroundColor?: string;
    imagePosition?: 'left' | 'right';
}

const ImagedSection: React.FC<FImagedSectionProps> = (props) => {
    
    const classes = useStyles(props);

    const { text, title, children, buttonText, image, imagePosition = 'right' } = props;

    return (
        <Box className={classes.root}>
            <Container>
                <Grid container className={classes.container}>
                    {imagePosition === 'right' ? 
                        <>
                            <Placement mobile={
                                <Grid item xs={12} sm={6}>
                                    <Box className={classes.imageGrid}>
                                        <Image image={image} className={classes.image} />
                                    </Box>
                                </Grid>
                            } />
                            <Grid item xs={12} sm={6}>
                                <Box className={classes.textGrid}>
                                    <p className={classes.text}>{text}</p>
                                    <h1 className={classes.title}>{title}</h1>
                                    <div className={classes.text}>{children}</div>
                                    <Placement desktop={
                                            <Button
                                                background="#f3f1ee"
                                                color="#002147"
                                                hoverColor={'#002147'}
                                                hoverBackgroundColor='#f9f8f5'
                                                borderColor="#fff"
                                                borderWidth={0}
                                                marginTop={13}
                                                fontSize={16}
                                                lineHeight={20}
                                                onClick={() => {}}
                                                radius={5}
                                                width={64}
                                            >{buttonText}</Button>
                                        } 
                                        mobile={
                                            <Button
                                                background="#f3f1ee"
                                                color="#002147"
                                                hoverColor={'#002147'}
                                                hoverBackgroundColor='#f9f8f5'
                                                borderColor="#fff"
                                                borderWidth={0}
                                                marginTop={13}
                                                fontSize={16}
                                                lineHeight={20}
                                                onClick={() => {}}
                                                radius={5}
                                                width={100}
                                            >{buttonText}</Button>
                                        }
                                    />
                                </Box>
                            </Grid>
                            <Placement desktop={
                                <Grid item xs={12} sm={6}>
                                    <Box className={classes.imageGrid}>
                                        <Image image={image} className={classes.image} />
                                    </Box>
                                </Grid>
                            } />
                        </>
                        : 
                        <>
                            <Grid item xs={12} sm={6}>
                                <Box className={classes.imageGrid}>
                                    <Image image={image} className={classes.image} />
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Box className={classes.textGrid}>
                                    <p className={classes.text}>{text}</p>
                                    <h1 className={classes.title}>{title}</h1>
                                    <div className={classes.text}>{children}</div>
                                    <Placement desktop={
                                            <Button
                                                background="#f3f1ee"
                                                color="#002147"
                                                hoverColor={'#002147'}
                                                hoverBackgroundColor='#f9f8f5'
                                                borderColor="#fff"
                                                borderWidth={0}
                                                marginTop={13}
                                                fontSize={16}
                                                lineHeight={20}
                                                onClick={() => {}}
                                                radius={5}
                                                width={64}
                                            >{buttonText}</Button>
                                        } 
                                        mobile={
                                            <Button
                                                background="#f3f1ee"
                                                color="#002147"
                                                hoverColor={'#002147'}
                                                hoverBackgroundColor='#f9f8f5'
                                                borderColor="#fff"
                                                borderWidth={0}
                                                marginTop={13}
                                                fontSize={16}
                                                lineHeight={20}
                                                onClick={() => {}}
                                                radius={5}
                                                width={100}
                                            >{buttonText}</Button>
                                        }
                                    />
                                </Box>
                            </Grid>
                        </>
                    }
                </Grid>
            </Container>
        </Box>
    )
};

export default ImagedSection;