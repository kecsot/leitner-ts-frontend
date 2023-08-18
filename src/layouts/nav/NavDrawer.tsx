import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import React from "react";
import {Link} from "react-router-dom";
import {DRAWER_WIDTH} from "../config.ts";

type NavList = {
    name: string
    items: NavItem[]
}

type NavItem = {
    name: string
    path: string
    icon: React.ReactNode
}

const navList: NavList[] = [
    {
        name: "Dashboard",
        items: [
            {
                name: 'Home',
                path: '/',
                icon: <InboxIcon/>
            },
            {
                name: 'Blog',
                path: '/blogs',
                icon: <InboxIcon/>
            },
            {
                name: "Decks",
                path: "/decks",
                icon: <InboxIcon/>
            },
            {
                name: "Contact",
                path: "/contact",
                icon: <InboxIcon/>
            }
        ]
    }
]

export default function NavDrawer() {
    return (
        <Drawer
            sx={{
                width: DRAWER_WIDTH,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: DRAWER_WIDTH,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left">
            <Toolbar/>

            {navList.map((navList) => (
                <List key={navList.name}>
                    <Divider/>
                    {navList.items.map((item) => (
                        <ListItem key={item.name} disablePadding>
                            <ListItemButton component={Link} to={item.path}>

                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.name}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            ))}
        </Drawer>
    );
}