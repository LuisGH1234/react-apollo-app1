import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import client from "../../client";
import { ApolloProvider } from "@apollo/react-hooks";
import {
    Image as ImageIcon,
    Menu as MenuIcon,
    ChevronRight as ChevronRightIcon,
    ChevronLeft as ChevronLeftIcon
} from "@material-ui/icons";
import {
    AppBar,
    Typography,
    Toolbar,
    List,
    ListItem,
    ListItemText,
    useTheme,
    CssBaseline,
    IconButton,
    Drawer,
    Divider,
    ListItemIcon
} from "@material-ui/core";
import { useStyles } from "./App.styles";
import sidebarElements from "../../sidebar";
import "./App.scss";

const App: React.FC = props => {
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();
    const [open, setOpen] = useState(true);

    return (
        <ApolloProvider client={client}>
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            arial-label="open drawer"
                            onClick={() => setOpen(true)}
                            edge="start"
                            className={clsx(classes.menuButton, {
                                [classes.hide]: open
                            })}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap onClick={() => history.push("/")}>
                            Spotify
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open
                    })}
                    classes={{
                        paper: clsx({
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open
                        })
                    }}
                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={() => setOpen(false)}>
                            {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        {sidebarElements.map((ele, i) => (
                            <ListItem button key={ele.text} onClick={() => history.push(ele.route)}>
                                <ListItemIcon>{ele.icon}</ListItemIcon>
                                <ListItemText primary={ele.text} />
                            </ListItem>
                        ))}
                    </List>
                    {/* <Divider /> */}
                </Drawer>
                <main className={`${classes.content} head-space`}>
                    <div className={classes.toolbar}>{props.children}</div>
                </main>
            </div>
        </ApolloProvider>
    );
};

export default App;
