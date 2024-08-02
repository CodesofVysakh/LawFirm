import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Avatar, Box } from "@mui/material";
import styles from "./TestimonialCard.module.css";

const TestimonialCard = ({ data }) => {
    return (
        <Box className={styles.cardWrapper}>
            <Card
                sx={{
                    maxWidth: 345,
                    bgcolor: "transparent",
                    color: "text.white",
                    borderRadius: "14px",
                    p: "20px",
                }}
            >
                <Box sx={{ bgcolor: "text.white", display: "inline" }}>
                    <Avatar
                        sx={{ width: "40%", height: "40%" }}
                        alt={data.title}
                        src={data.avatar}
                    />
                </Box>
                <Box>
                    <Typography variant="h5" my={1}>
                        {data.title}
                    </Typography>
                    <Typography variant="body2" color="text.white">
                        {data.subtitle}
                    </Typography>
                    <Typography variant="body2" my={2} color="text.subtitle">
                        {data.testimony}
                    </Typography>
                </Box>
            </Card>
        </Box>
    );
};

export default TestimonialCard;
