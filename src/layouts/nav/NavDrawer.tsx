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
import Typography from "@mui/material/Typography";

type NavList = {
    name: string
    items: NavItem[]
}

type NavItem = {
    name: string
    path: string
    icon: React.ReactNode
}

const navLists: NavList[] = [
    {
        name: "Dashboard",
        items: [
            {
                name: 'Home',
                path: '/',
                icon: <InboxIcon/>
            },
            {
                name: "Boxes",
                path: "/boxes",
                icon: <InboxIcon/>
            },
            {
                name: "Leitner Systems",
                path: "/leitner-systems",
                icon: <InboxIcon/>
            },
            {
                name: "Notes",
                path: "/notes",
                icon: <InboxIcon/>
            },
        ]
    },
    {
        name: "Community",
        items: [
            {
                name: "Box Store",
                path: "/community/store/boxes",
                icon: <InboxIcon/>
            },
            {
                name: "Leitner Systems Store",
                path: "/community/store/leitner-systems",
                icon: <InboxIcon/>
            }
        ]
    },
    {
        name: "Your account",
        items: [
            {
                name: "Achievements",
                path: "account/achievements",
                icon: <InboxIcon/>
            },
            {
                name: "Profile",
                path: "account/profile",
                icon: <InboxIcon/>
            }
        ]
    },
    {
        name: "Other",
        items: [
            {
                name: "Terms of Use",
                path: "other/terms-of-use",
                icon: <InboxIcon/>
            },
            {
                name: "Privacy Policy",
                path: "other/privacy-policy",
                icon: <InboxIcon/>
            },
            {
                name: "Contact",
                path: "other/contact",
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

            {navLists.map((list) => (
                <List key={list.name}>
                    <Divider/>
                    <ListItem>
                        <Typography variant="caption" color='text.secondary'>
                            {list.name}
                        </Typography>
                    </ListItem>

                    {list.items.map((item) => (
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