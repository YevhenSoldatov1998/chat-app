import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from "@material-ui/core/Typography";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {ThemeProvider} from "@material-ui/styles";
const theme = createMuiTheme({
    typography: {
        subtitle2: {
            color: 'green'
        }

    },
});
const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
        fontSize: '14px'
    },
    li: {
        alignItems: 'center',
    },
    typography: {
        body1:{
            fontStyle: 'italic',

        }
    }
}));

export default function SidebarListItem() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>

        <List className={classes.root}>
            {props.list.map(list => {
                return <>
                    <ListItem className={classes.li}>
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                        </ListItemAvatar>
                        <ListItemText
                            primary={list.name}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        className={classes.inline}
                                        variant= {list.isOnline?'subtitle2':'subtitle1'}
                                    >
                                       {list.toBe}
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li"/>
                </>
            })}


        </List>
        </ThemeProvider>
    );
}