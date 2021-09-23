import React, { useState } from 'react';

import { makeStyles } from '@mui/styles';
import TuneIcon from '@mui/icons-material/Tune';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Fade from '@mui/material/Fade'
import Checkbox from '@mui/material/Checkbox';

export default function Hamburger(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const HamburgerCSS = makeStyles((theme) => ({
        link: {
            color: '#000',
            textDecoration: 'none',
        },
        linkBar: {
            color: '#000',
            marginRight: 20,
        }
    }));
    
    const classes = HamburgerCSS();

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.linkBar}>
            <TuneIcon
                aria-label="more"
                aria-controls="fade-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
            <MoreVertIcon className="menu-icon" />
            </TuneIcon>
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
                    width: '10vw',
                    minWidth: 175,
                },}}
                >
                <MenuItem 
                    style={{display: 'flex',
                    flexFlow: 'row',
                    justifyContent: 'space-between'}}
                >
                    <div>
                        Open Now
                    </div>
                    <Checkbox />
                </MenuItem>
                <MenuItem 
                    style={{display: 'flex',
                    flexFlow: 'row',
                    justifyContent: 'space-between'}}
                >
                    <div>
                        4 Stars +
                    </div>
                    <Checkbox />
                </MenuItem>
            </Menu>
        </div>
    );
}