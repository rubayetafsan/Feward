// Material UI Components
import { makeStyles, Theme } from '@material-ui/core/styles';

// Utilities
import { FImagedSectionProps } from './index';

export const useStyles = makeStyles((theme: Theme) => ({
    root: ({ backgroundColor, textColor }: FImagedSectionProps) => ({
        display: "block",
        background: backgroundColor,
        color: textColor
    }),
    container: {
        width: '100%',
        margin: '0 auto',
        maxWidth: 1440,
        paddingTop: 20,
        paddingBottom: 20
    },
    textGrid: {
        width: '100%',
        maxWidth: '25em',
        padding: '1em',
        margin: '1em',
        [theme.breakpoints.down("md")]: {
            margin: 0,
        },
    },
    imageGrid: {
        width: '100%',
        padding: '0em',
        overflow: 'hidden',
        objectFit: 'cover',
        height: '100%',
    },
    image: {
        position: 'relative',
        width: '100%',
        height: '100%',
        margin: '0 auto',
        float: 'right',
        objectFit: 'cover',
        verticalAlign: 'middle',
        boxSizing: 'inherit'
    },
    text: {
        fontSize: 18,
        lineHeight: '28px',
        marginBlockEnd: 6,
        fontWeight: 400
    },
    title: {
        fontSize: 26,
        lineHeight: '32px',
        marginBlockEnd: 7,
        fontWeight: 600
    }
}));