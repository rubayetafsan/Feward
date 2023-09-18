// Material UI Components
import { makeStyles, Theme } from '@material-ui/core/styles';

// Utilities
import { FImageProps } from './index';

export const useStyles = makeStyles((theme: Theme) => ({
    root: ({ blur, focus }: FImageProps) => ({
        position: 'relative',
        filter: blur ? 'blur(2px)' : 'none',
        "&:hover": {
            zoom: focus ? 1.1 : 0
        },
    }),
}));