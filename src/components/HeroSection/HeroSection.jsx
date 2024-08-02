import {
    Box,
    Container,
    InputAdornment,
    TextField,
    Typography,
} from "@mui/material";
import heroImage1 from "../../assets/heroImage1.svg";
import styles from "./HeroSection.module.css";
import MailIcon from "@mui/icons-material/Mail";

const HeroSection = () => {
    return (
        <div className={styles.heroSectionWrapper}>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { md: "row", xs: "column" },
                        justifyContent: "space-between",
                        alignItems: "center",
                        height: "100vh",
                        width: "100%",
                        gap: { lg: 17 },
                    }}
                >
                    <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                        <Typography
                            variant="h3"
                            sx={{ fontWeight: "500", fontSize: "66px" }}
                        >
                            You don’t have to
                        </Typography>
                        <Typography
                            variant="h3"
                            sx={{ fontWeight: "700", fontSize: "66px" }}
                        >
                            Fight them Alone.
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{ color: "text.subtitle", my: "36px" }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit blandit, curabitur sodales conubia ut inceptos
                            faucibus himenaeos tortor eget, hac massa gravida
                            arcu interdum proin curae.
                        </Typography>
                        <TextField
                            variant="standard"
                            size="medium"
                            InputProps={{
                                disableUnderline: true,
                                style: { height: "74px" },
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <MailIcon
                                            sx={{
                                                color: "text.subtitle",
                                                marginLeft: "28px",
                                            }}
                                        />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Box
                                            color="text.black"
                                            sx={{
                                                bgcolor: "text.primary",
                                                width: "137px",
                                                height: "62px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                borderRadius: "43px",
                                                marginRight: "7px",
                                                cursor: "pointer",
                                                "&:hover": {
                                                    backgroundColor: "#b89333",
                                                },
                                            }}
                                        >
                                            {"Let's Talk"}
                                        </Box>
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                bgcolor: "#292929",
                                borderRadius: "43px",
                                width: "438px",
                            }}
                            placeholder="Enter Your Email Address"
                        />
                    </Box>
                    <Box className={styles.heroImageSection}>
                        <img className={styles.heroImage1} src={heroImage1} />
                    </Box>
                </Box>
            </Container>
        </div>
    );
};

export default HeroSection;
