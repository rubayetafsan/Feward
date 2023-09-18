// React Components
import React from 'react';

// Material UI Components
import Box from '@material-ui/core/Box';

// Feward Components
import Link from 'components/fundamentals/link';
import Image from 'components/fundamentals/image';
import Button from 'components/fundamentals/button';
import Divider from 'components/fundamentals/divider';
import Placement from 'components/fundamentals/placement';

// Utilities
import { useStyles } from './styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Logo } from 'components/containers/assets/logo';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

export interface FHeaderProps {
    brand?: any;
    image?: string;
    color?: string;
    menuItems?: any;
    fixed?: boolean;
    button1?: string;
    button2?: string;
    background?: string;
    hoverColor?: string;
    button1href?: string;
    button2href?: string;
}

const Header: React.FC<FHeaderProps> = (props) => {
    
    const classes = useStyles(props);

    const { menuItems, brand, fixed, image = Logo, background, button1, button2, button1href, button2href } = props;

    return (
        <Navbar collapseOnSelect expand="lg" fixed={fixed ? 'top' : undefined} className={classes.root}>
            <Container>
                <Navbar.Brand href="/" className={classes.brand}>{image ? <Image image={image} className={classes.image} height='20px' width='86px' /> : undefined}{brand ? brand : undefined}</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-center">
                    <Placement desktop={undefined} mobile={<Divider className={classes.divider} variant={'fullWidth'} light={true} />} />
                    <Nav className="me-auto">
                        {menuItems.map((menuItem: any, key: number) => (
                            <Box key={`menuItem${key}`} className={classes.nav}>
                                {menuItem.isDropdown ? 
                                    <NavDropdown 
                                        title={<span className={classes.navDropdownTitle}>{menuItem.item}</span>} 
                                        id={`menuItem${key}`} 
                                        className={classes.navDropdown}
                                    >
                                        {menuItem.dropdownItems.map((dropdownItem: any) => (
                                            <Link key={`dropdownItem${key}`} href={dropdownItem.href} className={classes.dropdown}>{dropdownItem.item}</Link>
                                        ))}
                                    </NavDropdown>
                                :
                                    <Link href={menuItem.href} className={classes.link}>{menuItem.item}</Link>
                                }
                            </Box>
                        ))}
                    </Nav>
                </Navbar.Collapse>
                <Placement desktop={
                    <Navbar.Collapse className="justify-content-end">
                        <Button
                            background={background}
                            borderColor="#fff"
                            borderWidth={0}
                            className={classes.button}
                            color="rgb(54, 161, 139)"
                            fontSize={16}
                            lineHeight={20}
                            onClick={() => {}}
                            radius={5}
                            width={64}
                            href={button1href}
                        >
                        {button1}
                        </Button>
                        <Button
                            background="rgb(54, 161, 139)"
                            hoverBackgroundColor='rgb(42, 210, 175)'
                            borderColor="#fff"
                            borderWidth={0}
                            color="#fff"
                            fontSize={16}
                            lineHeight={20}
                            onClick={() => {}}
                            radius={5}
                            width={64}
                            hoverColor={'#fff'}
                            href={button2href}
                        >
                        {button2}
                        </Button>
                    </Navbar.Collapse>
                } mobile={
                    <Navbar.Collapse className="justify-content-end">
                        <Divider className={classes.divider} variant={'fullWidth'} light={true} />
                        <Button
                            background={background}
                            borderColor="#fff"
                            borderWidth={0}
                            className={classes.button}
                            color="rgb(54, 161, 139)"
                            fontSize={16}
                            lineHeight={20}
                            onClick={() => {}}
                            radius={5}
                            width={100}
                            href={button1href}
                        >
                        {button1}
                        </Button>
                        <Button
                            background="rgb(54, 161, 139)"
                            hoverBackgroundColor='rgb(42, 210, 175)'
                            borderColor="#fff"
                            borderWidth={0}
                            color="#fff"
                            marginTop={10}
                            fontSize={16}
                            lineHeight={20}
                            onClick={() => {}}
                            radius={5}
                            width={100}
                            hoverColor={'#fff'}
                            marginBottom={10}
                            href={button2href}
                        >
                        {button2}
                        </Button>
                    </Navbar.Collapse>
                } />
                
            </Container>
        </Navbar>
    )
};

export default Header;