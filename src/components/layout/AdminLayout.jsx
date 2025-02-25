"use client";
import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  ExpandLess,
  ExpandMore,
  InsertDriveFile,
  BarChart,
} from "@mui/icons-material";
import Collapse from "@mui/material/Collapse";
import { useRouter, usePathname, use } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Logo from "@/assets/logo.png";
import { Badge, Menu, MenuItem } from "@mui/material";
import { useSelector } from "react-redux";
import DropSpinner from "@/components/admin/spinner/DropSpinner"

const drawerWidth = 220;

function AdminLayout(props) {
  const [open, setOpen] = React.useState(false)
  const [isAwareness, setIsAwareness] = React.useState(false)
  const { loading } = useSelector((state) => state.common)
  const matches = useMediaQuery("(min-width:600px)");
  const { window } = props;
  const router = useRouter();
  const pathName = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleToggle = () => {
    setOpen(!open)
  }

  const handleAwarenessToggle = () => {
    setIsAwareness(!isAwareness)
  }

  const logout = async () => {
    await localStorage.removeItem('token')
    await localStorage.removeItem('role')
    router.replace('/')
  }
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

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
  const navigateTo = (subpath) => {
    router.push(`/admin/${subpath}`);
  };


  useEffect(() => {

    const role = localStorage.getItem('role');
    console.log('role: ' + role);
    const token = ""
    console.log(token);

    if (!role) {
      // navigateTo('adminlogin');
      router.replace(`/adminlogin`);
    }


  }, [router]);

  console.log(pathName);

  const pathText = (text) => {
    const newSplit = text.split('/');
    const newStr = newSplit[2]
    if (newStr === undefined) {
      return "dashboard"
    } else {
      return newStr
    }
  }

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
      <MenuItem onClick={logout}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>New Orders</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const userRoutes = [
    {
      id: 1,
      path: "/admin",
      name: "Dashboard",
    },
    {
      id: 2,
      path: "/admin/category",
      name: "Category",
    },
    {
      id: 3,
      path: "/admin/subcategory",
      name: "Subcategory",
    },
    {
      id: 4,
      path: "/admin/genericlist",
      name: "Generice Name",
    },
    {
      id: 5,
      path: "/admin/medicinecat",
      name: "Medicine List",
    },
    {
      id: 6,
      path: "/admin/manufactuerlist",
      name: "Manufactuer List",
    },
    {
      id: 7,
      path: "/admin/formlist",
      name: "Form List",
    },
    {
      id: 7,
      path: "/admin/storagelist",
      name: "Storage List",
    },
    {
      id: 8,
      path: "/admin/packagelist",
      name: "Pack List",
    },
    {
      id: 9,
      path: "/admin/courierlist",
      name: "Courier List",
    },
    {
      id: 10,
      path: "/admin/orginlist",
      name: "Product Country of List",
    },
    {
      id: 11,
      path: "/admin/referlist",
      name: "Reference List",
    },
    {
      id: 12,
      path: "/admin/writtenbylist",
      name: "Written by List",
    },
    {
      id: 13,
      path: "/admin/reviewbylist",
      name: "Review by List",
    },
    {
      id: 14,
      path: "/admin/country_code_list",
      name: "Country Code",
    },
    {
      id: 15,
      path: "/admin/diseaseslist",
      name: "Know about diseases",
    },
    {
      id: 16,
      path: "/admin/knowbody",
      name: "Know Your Body",
    },
    {
      id: 17,
      path: "/admin/healthvideo",
      name: "Health Video",
    },
    {
      id: 18,
      path: "/admin/herbs",
      name: "Know about Herbs",
    },
    {
      id: 19,
      path: "/admin/healthtips",
      name: "Health Tips",
    },
    {
      id: 20,
      path: "/admin/articles",
      name: "Heath Articles",
    },
    {
      id: 21,
      path: "/admin/blog",
      name: "Blog",
    },
    {
      id: 22,
      path: "/admin/newslist",
      name: "Health News",
    },
    {
      id: 23,
      path: "/admin/infographics",
      name: "Infographics",
    },
    {
      id: 24,
      path: "/admin/stocklist",
      name: "Add Status Status",
    },
  ];
  const filteredRoutes = userRoutes.slice(14, 24);
  const filtereTwodRoutes = userRoutes.slice(24, userRoutes.length);
  const drawer = (
    <div>
      {/* <Toolbar /> */}
      <Box sx={{ background: "#fff", py: 1 }}>
        <Image priority src={Logo} alt="Logo" className="logoIcon" />
      </Box>

      <Divider />
      <List>
        {userRoutes.map((item, i) => i < 12 && (
          <Link
            href={{
              pathname: item.path,
              // query: { name: 'test' },
            }}
            key={i}
          >
            <ListItem
              style={{
                marginTop: 8,
                backgroundColor: pathName === item.path ? "#00a65a" : null,
              }}
              onClick={() => {
                router.push(item.path, { s: "test" });
                setMobileOpen(false);
              }}
            >
              <Box>
                <Typography
                  variant="body1"
                  color={pathName === item.path ? "#fff" : "#fff"}
                  fontFamily={"Poppins"}
                  fontSize={14}
                >
                  {item.name}
                </Typography>
              </Box>
            </ListItem>
          </Link>
        ))}
      </List>

      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleToggle}>
            {/* <ListItemIcon>
                            <BarChart sx={{ color: '#fff' }} />
                        </ListItemIcon> */}
            <Typography variant="body1" fontFamily={"Poppins"} fontSize={14} color='#fff'>
              Prouduct Author Details
            </Typography>
            {open ? <ExpandLess sx={{ color: '#fff', marginLeft: 'auto' }} /> : <ExpandMore sx={{ color: '#fff', marginLeft: 'auto' }} />}
          </ListItemButton>
        </ListItem>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link
              href={{
                pathname: userRoutes[12].path,
              }}
            >
              <ListItem sx={{ pl: 4 }} style={{
                marginTop: 8,
                backgroundColor: pathName === userRoutes[12].path ? "#00a65a" : null,
              }}
                onClick={() => {
                  router.push(userRoutes[12].path);
                  setMobileOpen(false);
                }}
              >
                <Typography
                  variant="body1"
                  color={pathName === userRoutes[12].path ? "#fff" : "#fff"}
                  fontFamily={"Poppins"}
                  fontSize={14}
                >
                  {userRoutes[12].name}
                </Typography>
              </ListItem>
            </Link>
            <Link
              href={{
                pathname: userRoutes[13].path,
              }}
            >
              <ListItem sx={{ pl: 4 }} style={{
                marginTop: 8,
                backgroundColor: pathName === userRoutes[13].path ? "#00a65a" : null,
              }}
                onClick={() => {
                  router.push(userRoutes[13].path);
                  setMobileOpen(false);
                }}
              >
                <Typography
                  variant="body1"
                  color={pathName === userRoutes[13].path ? "#fff" : "#fff"}
                  fontFamily={"Poppins"}
                  fontSize={14}
                >
                  {userRoutes[13].name}
                </Typography>
              </ListItem>
            </Link>
          </List>
        </Collapse>

        <ListItem disablePadding>
          <ListItemButton onClick={handleAwarenessToggle}>
            {/* <ListItemIcon>
                            <BarChart sx={{ color: '#fff' }} />
                        </ListItemIcon> */}
            <Typography variant="body1" fontFamily={"Poppins"} fontSize={14} color='#fff'>
              Awareness
            </Typography>
            {isAwareness ? <ExpandLess sx={{ color: '#fff', marginLeft: 'auto' }} /> : <ExpandMore sx={{ color: '#fff', marginLeft: 'auto' }} />}
          </ListItemButton>
        </ListItem>

        <Collapse in={isAwareness} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {filteredRoutes.map((item, i) =>
              <Link
                key={i}
                href={{
                  pathname: item.path,
                }}
              >
                <ListItem sx={{ pl: 4 }} style={{
                  marginTop: 8,
                  backgroundColor: pathName === item.path ? "#00a65a" : null,
                }}
                  onClick={() => {
                    router.push(item.path);
                    setMobileOpen(false);
                  }}
                >
                  <Typography
                    variant="body1"
                    color={pathName === item.path ? "#fff" : "#fff"}
                    fontFamily={"Poppins"}
                    fontSize={14}
                  >
                    {item.name}
                  </Typography>
                </ListItem>
              </Link>
            )}
          </List>
        </Collapse>

        {filtereTwodRoutes.map((item, i) => (
          <Link
            href={{
              pathname: item.path,
              // query: { name: 'test' },
            }}
            key={i}
          >
            <ListItem
              style={{
                marginTop: 8,
                backgroundColor: pathName === item.path ? "#00a65a" : null,
              }}
              onClick={() => {
                router.push(item.path, { s: "test" });
                setMobileOpen(false);
              }}
            >
              <Box>
                <Typography
                  variant="body1"
                  color={pathName === item.path ? "#fff" : "#fff"}
                  fontFamily={"Poppins"}
                  fontSize={14}
                >
                  {item.name}
                </Typography>
              </Box>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        elevation={3}
        component="nav"
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#7d5c68",
        }}
      >
        <Toolbar>
          {!matches ? (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : null}

          <Typography
            variant="h6"
            noWrap
            component="div"
            fontFamily={"Poppins"}
          // sx={{ display: { xs: "none", sm: "block" } }}
          >
            {pathText(pathName)}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          backgroundColor: "#24282c",
        }}
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
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#7d5c68",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          elevation={6}
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#7d5c68",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: "#fff",
        }}
      >
        {loading && <DropSpinner />}
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}

export default AdminLayout;
