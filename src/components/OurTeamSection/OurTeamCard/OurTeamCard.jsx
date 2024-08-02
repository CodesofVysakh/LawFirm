import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Avatar, Box } from '@mui/material';
import styles from './OurTeamCard.module.css';



const OurTeamCard = ({ data }) => {
    return (
        <Box className={styles.cardWrapper} >
            <Card sx={{ maxWidth: 345, bgcolor: "transparent", color: 'text.white', borderRadius: '14px', p: '20px', display: 'flex', gap:2, alignItems: 'center', boxShadow:'none' }}>
                <Box sx={{display: 'inline', }}>
                    <Avatar sx={{width: '100%', height:'100%'}} alt={data.name} src={data.avatar} />
                </Box>
                <Box>
                    <Typography variant="h5" my={1}>
                        {data.name}
                    </Typography>
                    <Typography variant="body2" color="text.subtitle">
                        {data.cases} Cases
                    </Typography>
                </Box>
            </Card>
        </Box>
    )
}

export default OurTeamCard