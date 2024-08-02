import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import styles from './FooterNav.module.css';
import logo from '../../../assets/logo.svg';
import { Pinterest } from '@mui/icons-material';


const pages = ['Home', 'Attorneys', 'Practice Areas', 'About Us'];

function FooterNav() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar position="static" className={styles.navbarWrapper}>
            <Container maxWidth="xl" >
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-around' }}>

                    {/* 1 Element */}
                    <Box
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <img src={logo} alt="" />
                    </Box>

                    {/* 2 Element */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: { md: 'center' }, gap: 7 }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'text.white', display: 'block', fontSize: '14px' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    {/* 3 Element */}
                    <Box sx={{ flexGrow: 1, gap: 1.1, display: 'flex' }}>
                        <InstagramIcon sx={{ "&:hover": { color: "text.white" }, color: 'text.primary' }} />
                        <FacebookIcon sx={{ "&:hover": { color: "text.white" }, color: 'text.primary' }} />
                        <TwitterIcon sx={{ "&:hover": { color: "text.white" }, color: 'text.primary' }} />
                        <Pinterest sx={{ "&:hover": { color: "text.white" }, color: 'text.primary' }} />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default FooterNav;