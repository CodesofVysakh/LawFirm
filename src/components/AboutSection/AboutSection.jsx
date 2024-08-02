import { Box, Container, Grid, Typography } from '@mui/material';
import styles from './AboutSection.module.css';
import AboutCard from './AboutCard/AboutCard';


const details = [
    {
        id: 1,
        title: '98% Success Rate',
        subtitle: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.'
    },
    {
        id: 2,
        title: '100% Success Rate',
        subtitle: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.'
    },
    {
        id: 3,
        title: '100% Success Rate',
        subtitle: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.'
    }
]


const AboutSection = () => {
    return (
        <div className={styles.aboutSectionWrapper}>
            <Container maxWidth='lg'>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 17, mb: '200px', flexDirection: {md: 'row', xs: 'column'} }}>
                    <Typography maxWidth={570} variant="h3">
                        {'Let\'s Introduce Ourself'}
                    </Typography>
                    <div className={styles.vl}></div>
                    <Typography width={570}>
                        <Typography variant='h5' marginBottom="16px">
                            Criminal Lawyer
                        </Typography>
                        <Typography varitant="subtitle1" color={'text.subtitle'}>
                            Amet minim mollit non deserunt ullamco est
                            sit aliqua dolor do amet sint. Velit officia consequatduis
                            enim velit mollit Exercitation.
                        </Typography>
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h3" textAlign={"center"} marginBottom="100px">
                        Why Choose us?
                    </Typography>
                    <Grid container gap={3}>
                        {
                            details.map((detail) => {
                                return (
                                    <Grid key={detail.id} item className={styles.grid}>
                                        <AboutCard detail={detail} />
                                    </Grid>
                                )
                            })
                        }
                    </Grid>

                </Box>
            </Container>
        </div>
    )
}

export default AboutSection