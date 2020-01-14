import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
    root: {
        width: "100%",
        zIndex: 1

    },
    fabButton: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      top: '-50%',
        zIndex: 10
    },
    sidebarBottom: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        minHeight: 60
    }
});

export default function SidebarBottom() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.sidebarBottom}>
            <Fab color="secondary" aria-label="add" className={classes.fabButton}>
                <AddIcon />
            </Fab>
            <BottomNavigation value={value} showLabels='false' onChange={handleChange} className={classes.root}>
                <BottomNavigationAction label="Recents" value="My messages" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favorites" value="Other messages" icon={<FavoriteIcon />} />

            </BottomNavigation>
        </div>

    );
}