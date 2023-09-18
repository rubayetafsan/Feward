// Material UI Components
import { makeStyles } from '@material-ui/core/styles';

// Utilities
import { FButtonProps } from './index';

export const useStyles = makeStyles({
    button: ({ color, background, hoverBackgroundColor, marginTop, marginRight, marginLeft, marginBottom, radius, borderColor, borderWidth, lineHeight, width, fontSize, hoverColor }: FButtonProps) => ({
        width: `${width}%`,
        color: color,
        maxWidth: '100%',
        marginTop: marginTop,
        marginRight: marginRight,
        marginLeft: marginLeft,
        marginBottom: marginBottom,
        borderRadius: radius,
        fontSize: `${fontSize}px`,
        textTransform: 'capitalize',
        lineHeight: `${lineHeight}px`,
        background: `${background}`,
        border: `solid ${borderWidth}px ${borderColor}`,
        '&:hover': {
            color: `${hoverColor}`,
            backgroundColor: `${hoverBackgroundColor}`
        },
    }),
});