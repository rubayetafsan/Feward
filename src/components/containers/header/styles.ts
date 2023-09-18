// Material UI Components
import { makeStyles } from '@material-ui/core/styles';

// Utilities
import { FHeaderProps } from './index';

export const useStyles = makeStyles((theme) => ({
    root: ({ background }: FHeaderProps) => ({
        backgroundColor: background,
        display: 'flex',
        width: '100%'
    }),
    brand: ({ color }: FHeaderProps) => ({
        letterSpacing: 2,
        color: color
    }),
    image: {
        height: 20,
        marginBottom: 6,
    },
    link: ({ background, color, hoverColor }: FHeaderProps) => ({
        backgroundColor: background,
        color: color,
        padding: '8px 10px 8px 10px',
        '&:hover': {
            background: hoverColor,
            borderRadius: 5
        },
        [theme.breakpoints.down("sm")]: {
            padding: '8px 10px 8px 0px',
        },
    }),
    dropdown: ({ background, color, hoverColor }: FHeaderProps) => ({
        backgroundColor: background,
        color: color,
        padding: '9px 10px 8px 10px',
        '&:hover': {
            background: hoverColor,
            borderRadius: 5
        },
    }),
    button: ({ }: FHeaderProps) => ({
        marginRight: 20,
        [theme.breakpoints.down("sm")]: {
            marginRight: 0,
        },
    }),
    divider: ({ }: FHeaderProps) => ({
        background: '#000',
        margin: '13px 0px 10px 0px'
    }),
    nav: ({ hoverColor }: FHeaderProps) => ({
        '&:hover': {
            background: hoverColor,
            borderRadius: 5
        },
    }),
    navDropdown: ({ }: FHeaderProps) => ({
        fontFamily: 'sans-serif'
    }),
    navDropdownTitle: ({ color }: FHeaderProps) => ({
        color: color
    }),
}));