// React Components
import React from 'react';

// Material UI Components
import Box from '@material-ui/core/Box';

// Feward components
import Header from 'components/containers/header';
import Footer from 'components/containers/footer';
import Germany from 'components/containers/assets/flag';
import FGrid from 'components/containers/footer/grid';
import Link from 'components/fundamentals/link';

// Utilities
import { useStyles } from './styles';
import { menuItems } from 'components/containers/header/menuItem';

export interface FTemplateComponentProps {
    text?: string;
}

const TemplateComponent: React.FC<FTemplateComponentProps> = (props) => {
    
    const classes = useStyles(props);

    const { children } = props;

    const color = '#fff';

    return (
        <Box className={classes.root}>
            <Header menuItems={menuItems} color={'#25313f'} background={'#fff'} hoverColor={'#f9f8f5'} button1={'Enterprise'} button2={'Contact us'} button2href={'/company/contact'} />
            {children}
            <Germany firstColor={'#000000'} secondColor={'#FF0000'} thirdColor={'#FFCC00'} />
            <Footer
                background="#00152e"
                brand="Feward GmbH"
                color="#fff"
                description="Feward exists to make your life easier. Stay on top of your development and make the most of your money with spending less time with development and more time with innovative features—all with just a contact."
                linkedin="feward"
                twitter="fewardhub"
                year={2020}
            >
                <FGrid title='Company'>
                    <Link href={'/company/about'} color={color}>About</Link>
                    <Link href={'/company/team'} color={color}>Team</Link>
                    <Link href={'/company/partners'} color={color}>Partners</Link>
                    <Link href={'/company/career'} color={color}>Career</Link>
                    <Link href={'/company/contact'} color={color}>Contact</Link>
                </FGrid>
                <FGrid title='Resources'>
                    <Link href={'/resources/news'} color={color}>News</Link>
                    <Link href={'/resources/blog'} color={color}>Blog</Link>
                    <Link href={'/resources/forum'} color={color}>Forum</Link>
                    <Link href={'/resources/academy'} color={color}>Academy</Link>
                    <Link href={'/resources/research'} color={color}>Research</Link>
                </FGrid>
          </Footer>
        </Box>
    )
};

export default TemplateComponent;