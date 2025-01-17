"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    ExpandLess,
    ExpandMore,
    InsertDriveFile,
    BarChart,
} from "@mui/icons-material";
import

Collapse from "@mui/material/Collapse";
import { useRouter, usePathname, use } from 'next/navigation'
import Image from "next/image";
import Link from 'next/link'
import Logo from "@/assets/logo.png"

const drawerWidth = 240;

function AdminLayout(props) {
    const { window } = props;
    const router = useRouter();
    const pathName = usePathname()
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const [open, setOpen] = React.useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    const userRoutes = [
        {
            id: 1,
            path: "/admin/dashboard",
            name: "dashboard",
        },
        {
            id: 2,
            path: "/admin/category",
            name: "category",
        },
        {
            id: 3,
            path: "/admin/subcategory",
            name: "Subcategory",
        },
        {
            id: 4,
            path: "/admin/category2",
            name: "Generice Name",
        },
        {
            id: 5,
            path: "/admin/category2",
            name: "Medicine List",
        },
        {
            id: 6,
            path: "/admin/category2",
            name: "Manufactuer List",
        },
        {
            id: 6,
            path: "/admin/category2",
            name: "Form List",
        },
    ];

    const drawer = (
        <div>
            {/* <Toolbar /> */}
            <Image
                priority
                src={Logo}
                alt="Logo"
                className='logoIcon'
            />
            <Divider />
            <List>
                {userRoutes.map((item, i) => (
                    <Link href={{
                        pathname: item.path,
                        // query: { name: 'test' },
                    }}
                        key={i}
                    >
                        <ListItem
                            style={{ marginTop: 8, backgroundColor: pathName === item.path ? "#1976d2" : null }}
                            button
                            onClick={() => {
                                router.push(item.path, { s: 'test' });
                                setMobileOpen(false);
                            }}
                        >
                            <ListItemButton>
                                <Typography
                                    variant="body1"
                                    color={"#fff"}
                                    fontFamily={"Poppins"}
                                >
                                    {item.name}
                                </Typography>
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>

            {/* <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={handleToggle}>
                        <ListItemIcon>
                            <BarChart sx={{ color: '#fff' }} />
                        </ListItemIcon>
                        <Typography variant="body1" noWrap component="div" color='#fff' paddingRight={2}>
                            Responsive
                        </Typography>
                        {open ? <ExpandLess sx={{ color: '#fff' }} /> : <ExpandMore sx={{ color: '#fff' }} />}
                    </ListItemButton>
                </ListItem>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <InsertDriveFile sx={{ color: '#fff' }} />
                                </ListItemIcon>
                                <ListItemText primary="Sales" sx={{ color: '#fff' }} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <InsertDriveFile sx={{ color: '#fff' }} />
                                </ListItemIcon>
                                <ListItemText primary="Traffic" sx={{ color: '#fff' }} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Collapse>
            </List> */}
        </div>
    );

    // Remove this const when copying and pasting into your project.
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                elevation={3}
                component="nav"
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: '#24282c'
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                        DrugCarts
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <IconButton sx={{ p: 0 }}>
                            <Avatar alt="Semy Sharp" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, backgroundColor: '#24282c' }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    elevation={6}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#24282c'
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    elevation={6}
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#24282c',
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, backgroundColor: '#fff' }}
            >
                <Toolbar />
                {props.children}
            </Box>
        </Box>
    );
}

export default AdminLayout;
