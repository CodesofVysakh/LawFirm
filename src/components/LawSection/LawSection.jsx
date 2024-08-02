import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Typography,
} from "@mui/material";

import bussinessLaw from "../../assets/law/bussinessLaw.png";
import bussinessLaw1 from "../../assets/law/bussinessLaw1.png";
import elderAbuse from "../../assets/law/elderAbuse.png";
import landlordDisputes from "../../assets/law/landlordDisputes.png";
import partnershipLaw from "../../assets/law/partnershipLaw.png";
import realEstateLaw from "../../assets/law/realEstateLaw.png";

const categories = [
    { title: "BUSINESS LAW", image: bussinessLaw, size: 7 },
    { title: "PARTNERSHIP LAW", image: partnershipLaw, size: 3 },
    { title: "REAL ESTATE LAW", image: realEstateLaw, size: 3 },
    { title: "BUSINESS LAW", image: bussinessLaw1, size: 7 },
    { title: "LANDLORD", image: landlordDisputes, size: 7 },
    { title: "ELDER ABUSE", image: elderAbuse, size: 3 },
];

const LawSection = () => {
    return (
        <Container maxWidth="lg">
            <Typography variant="h3" textAlign="center" marginBottom="100px">
                Area of Practices
            </Typography>
            <Grid container spacing={2} style={{ padding: 16 }}>
                {categories.map((category, index) => (
                    <Grid
                        item
                        xs={12}
                        sm={category.size === 7 ? 8 : 4}
                        key={index}
                        md={category.size === 7 ? 8 : 4}
                    >
                        <Card
                            sx={{ position: "relative", borderRadius: "14px" }}
                        >
                            <CardMedia
                                component="img"
                                alt={category.title}
                                height="240"
                                image={category.image}
                                title={category.title}
                            />
                            <CardContent
                                sx={{
                                    position: "absolute",
                                    bottom: "10px",
                                    width: "100%",
                                    textAlign: "center",
                                    color: "#FFFBF2",
                                    fontSize: "24px",
                                }}
                            >
                                <Typography variant="h5" component="div">
                                    {category.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default LawSection;
