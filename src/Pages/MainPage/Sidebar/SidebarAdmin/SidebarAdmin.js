import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import { withStyles } from '@material-ui/core/styles';
import { usePopupState, bindMenu, bindTrigger } from 'material-ui-popup-state/hooks';
import { Link } from "react-router-dom";

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
}) ( props => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        { ...props }
    />
));

const StyledMenuItem = withStyles( theme => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
})) (MenuItem);

export const SidebarAdmin = () => {
    const [ anchorEl, setAnchorEl ] = useState(null);
    const [ isExpandUsers, setIsExpandUsers ] = useState(false);
    const [ isExpandDevices, setIsExpandDevices ] = useState(false);
    const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' });

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleExpandUsers = () => {
        setIsExpandUsers(!isExpandUsers);
    };

    const handleExpandDevices = () => {
        setIsExpandDevices(!isExpandDevices);
    };

    return (
        <div>
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick}
                { ...bindTrigger(popupState) }
            >
                Sidebar
            </Button>

            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={ Boolean(anchorEl) }
                onClose={handleClose}
                { ...bindMenu(popupState) }
            >
                <StyledMenuItem>
                    <ListItemText primary="Users" onClick={handleExpandUsers} />
                </StyledMenuItem>

                { isExpandUsers &&
                    <Collapse in={isExpandUsers} timeout="auto" unmountOnExit>
                        <ListItem button>
                            <Link to="/main-page/users" style={{ textDecoration: 'none' }} >
                                <ListItemText style={{ marginLeft: '20px', color: '#737373' }} primary="Users List" onClick={popupState.close} />
                            </Link>
                        </ListItem>

                        <ListItem button>
                            <Link to="/main-page/admin" style={{ textDecoration: 'none' }} >
                                <ListItemText style={{ marginLeft: '20px', color: '#737373' }} primary="Add User" onClick={popupState.close} />
                            </Link>
                        </ListItem>
                    </Collapse>
                }

                <StyledMenuItem>
                    <Link to="/main-page/chart" style={{ textDecoration: 'none', color: '#212121' }} >
                        <ListItemText primary="Statistics" onClick={popupState.close} />
                    </Link>
                </StyledMenuItem>

                <StyledMenuItem>
                    <ListItemText primary="Devices" onClick={handleExpandDevices} />
                </StyledMenuItem>

                { isExpandDevices &&
                    <Collapse in={isExpandDevices} timeout="auto" unmountOnExit>
                        <ListItem button>
                            <Link to="/main-page/devices_list" style={{ textDecoration: 'none' }} >
                                <ListItemText style={{ marginLeft: '20px', color: '#737373' }} primary="Devices List" onClick={popupState.close} />
                            </Link>
                        </ListItem>

                        <ListItem button>
                            <Link to="/main-page/manage_devices" style={{ textDecoration: 'none' }} >
                                <ListItemText style={{ marginLeft: '20px', color: '#737373' }} primary="ManageDevices" onClick={popupState.close} />
                            </Link>
                        </ListItem>
                    </Collapse>
                }
            </StyledMenu>
        </div>
    );
};
