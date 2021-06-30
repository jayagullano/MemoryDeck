import { 
    makeStyles,
    MenuList, 
    MenuItem,
    TextField,
    IconButton
} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
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
    SearchLabel: {
        color: '#000000',
        fontFamily: 'Georgia, serif',
    }
});

export default function MainMenu(props){

    //Accesses the custom styling from makeStyles/material ui
    const classes = useStyles();

    return (
        <MenuList className={classes.AppHeader}>
            <MenuItem onClick={() => props.choose(0) }>
                <h3 className={classes.HeaderLabel}>New Arrivals</h3>
            </MenuItem>

            <MenuItem onClick={() => props.choose(1) }>
                <h3 className={classes.HeaderLabel}>Women</h3>
            </MenuItem>

            <MenuItem onClick={() => props.choose(2) }>
                <h3 className={classes.HeaderLabel}>Men</h3>
            </MenuItem>

            <MenuItem>
            <TextField 
                id="outlined-search" 
                label="Search" 
                type="search" 
                className={classes.SearchLabel}
                />
            </MenuItem>

            <MenuItem>
                <IconButton 
                    backgroundColor="#282c34" 
                    aria-label="add to shopping cart"
                    onClick={()=>{alert("hey")}}>
                    <AddShoppingCartIcon />
                </IconButton>
            </MenuItem>
            
        </MenuList>
    );
}