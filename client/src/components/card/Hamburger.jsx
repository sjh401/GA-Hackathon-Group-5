import React, { useState } from 'react';

import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Fade from '@mui/material/Fade'
import Checkbox from '@mui/material/Checkbox';

const HamburgerCSS = makeStyles((theme) => ({
    button: {
        backgroundColor: '#000',
        margin: '2px',
        '&:hover': {
            backgroundColor: '#fff',
            color: '#000'
        },
    },
    link: {
        color: '#000',
        textDecoration: 'none',
    },
    linkBar: {
        color: '#000',
        marginRight: 20,
    }
}));

export default function Hamburger(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const classes = HamburgerCSS();

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.linkBar}>
            <MenuIcon
                aria-label="more"
                aria-controls="fade-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
            <MoreVertIcon className="menu-icon" />
            </MenuIcon>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                className={classes.menu}
                PaperProps={{
                    style: {
                    maxHeight: 450,
                    width: '15vw',
                    minWidth: 250,
                    backgroundColor: '#fff',
                    color: '#000',
                },}}
                >
                <MenuItem >
                    <Checkbox />
                </MenuItem>
                <MenuItem >
                    <Checkbox />
                </MenuItem>
            </Menu>
        </div>
    );
}