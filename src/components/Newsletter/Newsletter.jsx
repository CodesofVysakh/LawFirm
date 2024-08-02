import { Box, Button, Container, TextField, Typography } from '@mui/material';
import styles from './Newsletter.module.css';

const Newsletter = () => {
    return (
        <div className={styles.newsletter}>
            <Container maxWidth="lg">
                <Box sx={{ bgcolor: '#292929', height: '356px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Typography variant="h3" marginBottom="42px">
                        Subscribe Our Newsletter
                    </Typography>
                    <Box>
                        <TextField
                            sx={{ '& .MuiInputBase-input::placeholder': { color: 'text.subtitle', fontStyle: 'italic', fontSize: '14px' }, mr: 1 }}
                            placeholder='Name'
                            InputProps={{
                                style: {
                                    backgroundColor: '#FFFFFF',
                                    height: '53px'
                                }
                            }}
                        />
                        <TextField
                            sx={{ '& .MuiInputBase-input::placeholder': { color: 'text.subtitle', fontStyle: 'italic', fontSize: '14px' }, mr: 1 }}
                            placeholder='Enter Your Email'
                            InputProps={{
                                style: {
                                    backgroundColor: '#FFFFFF',
                                    height: '53px',
                                    border: 'none'
                                }
                            }}
                        />
                        <Button variant='contained' sx={{ height: '53px', bgcolor: 'text.primary', color: 'text.black', '&:hover':{backgroundColor: '#a58533'} }}>Send</Button>

                    </Box>
                </Box>
            </Container>
        </div>
    )
}

export default Newsletter