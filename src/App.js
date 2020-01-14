import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import SidebarListItem from "./Sidebar/SidebarListItem";
import SidebarBottom from "./Sidebar/SidebarBottom";
import InputBase from "@material-ui/core/InputBase";


const data = {
    list: [
        {name: 'Yevhen Soldatov', isOnline: false, toBe: '4 days ago'},
        {name: 'Yevhen Soldatov', isOnline: false, toBe: '4 hours ago'},
        {name: 'Yevhen Soldatov', isOnline: true, toBe: 'Online'},
        {name: 'Yevhen Soldatov', isOnline: false, toBe: '4 days ago'},
    ],
    message: [
        {id: 0, from: 'me', body: 'Hello!'},
        {id: 1, from: 'someone', body: 'Hi!'},
        {id: 2, from: 'me', body: 'How are you?'},
        {id: 3, from: 'someone', body: 'ok'},
        {id: 4, from: 'someone', body: 'are U?'},
        {id: 5, from: 'me', body: 'god!'},
        {id: 6, from: 'me', body: 'thx!'},
        {id: 7, from: 'someone', body: 'ok, byy'},
        {id: 8, from: 'me', body: 'hmm, buy'},
        {id: 9, from: 'someone', body: 'Lol'},
    ]
}

const drawerWidth = 300;
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
            position: 'relative'
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: '#fff',
        color: '#333',
        '&:hover': {
            backgroundColor: '#eee',
        },
        marginLeft: 0,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        height: '47px',
        [theme.breakpoints.up('sm')]: {
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    fabButton: {
        background: 'primary'
    }
}));

function ResponsiveDrawer(props) {
    const {container} = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Responsive drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        <div>
                            one
                        </div>
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{'aria-label': 'search'}}
                            />
                        </div>
                        <SidebarListItem list={data.list}/>
                        <SidebarBottom/>

                    </Drawer>

                </Hidden>

            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                    facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                </Typography>
            </main>
        </div>
    );
}


export default ResponsiveDrawer;