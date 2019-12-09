import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import { usePopupState, bindMenu, bindTrigger } from 'material-ui-popup-state/hooks';
import { Link } from "react-router-dom";

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})(props => (
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
        {...props}
    />
));

const StyledMenuItem = withStyles(theme => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

export const SidebarUser = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' });

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
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
                open={Boolean(anchorEl)}
                onClose={handleClose}
                { ...bindMenu(popupState) }
            >

                <StyledMenuItem>
                    <Link  to="/main-page/users" style={{ textDecoration: 'none', color: '#212121' }} >
                        <ListItemText primary="Users List" onClick={popupState.close} />
                    </Link>
                </StyledMenuItem>

            </StyledMenu>
        </div>
    );
};
