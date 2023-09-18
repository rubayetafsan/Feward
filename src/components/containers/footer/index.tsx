// React Components
import React from 'react';

// Material UI Components
import { Grid, Typography, Box } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

// Feward Components
import Link from 'components/fundamentals/link';

// Utilities
import { useStyles } from './styles';
import { Container} from 'react-bootstrap';

export interface FFooterProps {
    brand?: string;
    description?: string;
    linkedin?: string;
    twitter?: string;
    year?: number;
    background?: string;
    color?: string;
    className?: string;
    onClick?: () => void;
}

const Footer: React.FC<FFooterProps> = (props) => {

   const classes = useStyles(props);

   const { children, onClick, brand, description, linkedin, twitter, year } = props;

   return (
        <Grid className={classes.footer}>
            <Container>
                <Grid container spacing={4} onClick={onClick} className={classes.root}>
                    <Grid container item xs={12} >
                        <Grid item xs={12} md={8} >
                            <Link href={'/'} className={classes.brandNameStyle}>{brand}</Link>
                            <Typography className={classes.footerInfo}>{description}</Typography>
                            <Box display="flex" justifyContent="flex-start"> 
                                <Link href={`https://www.linkedin.com/company/${linkedin}/`} target={'_blank'}><LinkedInIcon className={classes.iconStyle} /></Link>
                                <Link href={`https://twitter.com/${twitter}`} target={'_blank'}><TwitterIcon className={classes.iconStyle} /></Link>
                            </Box>
                        </Grid>
                        {children}
                        <Grid item xs={12} >
                            <Typography className={classes.copyrightStyle}>© {new Date().getFullYear()} {brand}. All Rights Reserved</Typography>
                        </Grid>
                    </Grid> 
                </Grid>
            </Container>
        </Grid>
   );
};

export default Footer;