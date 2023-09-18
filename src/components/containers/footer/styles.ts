// Material UI Components
import { makeStyles, Theme } from '@material-ui/core/styles';

// Utilities
import { FFooterProps } from './index';

export const useStyles = makeStyles((theme: Theme) =>({
    footer: ({ background, color }: FFooterProps) => ({
        color: color,
        background: background
    }),
    root: ({ }: FFooterProps) => ({
        fontFamily: 'Montserrat-Bold',
        maxWidth: 1440,
        width: '100%'
    }),
    brandNameStyle: ({ color }: FFooterProps) => ({
        letterSpacing: 2,
        color: color,
        fontSize: 21,
        marginTop: 24
    }),
    textStyle: ({ color }: FFooterProps) => ({
        color: color,
        fontSize: 21,
        marginBottom: 16,
        marginTop: 24
    }),
    iconStyle: ({ color }: FFooterProps) => ({
        color: color,
        marginTop: 24,
        marginRight: 16,
    }),
    copyrightStyle: {
        textAlign: 'left',
        marginTop: 24,
    },
    footerInfo: {
        marginTop: 16,
        width: 280,
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    }
}));