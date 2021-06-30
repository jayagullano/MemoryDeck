import { 
    makeStyles,
    MenuList, 
    MenuItem,
} from '@material-ui/core';
import { React } from 'react';

const useStyles = makeStyles({
    AppHeader: {
        backgroundColor: '#E5E2E2',
        minHeight: '10vh',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly   ',   
        fontSize: 'calc(10px + 2vmin)',
        color: 'white',
      },
    HeaderLabel: {
        color: '#000000',
        fontFamily: 'Georgia, serif',
    },
});

export default function MainMenu(props){

    //Accesses the custom styling from makeStyles/material ui
    const classes = useStyles();

    return (
        <MenuList className={classes.AppHeader}>
            <MenuItem onClick={() => props.newGame }>
                <h3 className={classes.HeaderLabel}>New Game</h3>
            </MenuItem>

            <MenuItem onClick={() => props.mode(1)}>
                <h3 className={classes.HeaderLabel}>Memorization Mode</h3>
            </MenuItem>

            <MenuItem onClick={() => props.mode(2)}>
                <h3 className={classes.HeaderLabel}>Test Mode</h3>
            </MenuItem>

            <MenuItem onClick={() => props.choose(1) }>
                <h3 className={classes.HeaderLabel}>History</h3>
            </MenuItem>

        </MenuList>
    );
}