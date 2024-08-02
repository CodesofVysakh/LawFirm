import { Box, Container, Typography } from "@mui/material";
import styles from "./Footer.module.css";
import FooterNav from "./FooterNav/FooterNav";

const Footer = () => {
	const date = new Date();
    return (
        <Box
            className={styles.footerWrapper}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ display: "flex" }}>
                    <FooterNav />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 5,
                        mt: "50px",
                    }}
                >
                    <Typography variant="subtitle1">
                        ©{date.getFullYear()} Acme. All right reserved.
                    </Typography>
                    <Typography variant="subtitle1">Privacy Policy</Typography>
                    <Typography variant="subtitle1">
                        Terms of Service
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
