// Material UI Components
import { makeStyles, Theme } from '@material-ui/core/styles';

// Utilities
import { FTemplateComponentProps } from './index';

export const useStyles = makeStyles((theme: Theme) => ({
    root: ({  }: FTemplateComponentProps) => ({
        display: "block",
        width: '100%',
        margin: '0 auto'
    }),
}));