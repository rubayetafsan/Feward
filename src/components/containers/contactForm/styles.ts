// Material UI Components
import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    button: {
        background: "rgb(54, 161, 139)",
        border: 'solid 0px #fff',
        color: "#fff",
        marginTop: 10,
        fontSize: 16,
        lineHeight: '32px',
        borderRadius: 5,
        width: '100%',
        '&:hover': {
            color: '#fff',
            backgroundColor: 'rgb(42, 210, 175)'
        },
    },
    errorText: {
        color: '#f00',
        marginBottom: 10
    }
}));