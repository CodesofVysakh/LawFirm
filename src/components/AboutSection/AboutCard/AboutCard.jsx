import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, Box, Button, CardActionArea } from '@mui/material';
import gift from '../../../assets/gift.svg';
import styles from './AboutCard.module.css';

export default function AboutCard({detail}) {
    return (
        <Box className={styles.cardWrapper} >
            <Card sx={{ maxWidth: 345, bgcolor: "transparent", color: 'text.white', borderRadius: '14px', p: '20px' }}>
                <Box sx={{bgcolor: 'text.white', display:'inline',}}>
                    <CardMedia component="img" sx={{ width: '100px', bgcolor: 'text.white', padding: "19px", borderRadius: '50%' }} alt="Gift" image={gift} />
                </Box>
                <Box>
                    <Typography variant="h5" my={2}>
                        {detail.title}
                    </Typography>
                    <Typography variant="body2" color="text.subtitle">
                        {detail.subtitle}
                    </Typography>
                    <Button className={styles.button} variant='contained' sx={{bgcolor: 'text.primary', color:'text.black', mt:'20px', borderRadius: "23px", '&:hover':{backgroundColor: '#a58533'}}}>Read More</Button>
                </Box>
            </Card>
        </Box>
    );
}