import { Box, Container, Typography } from "@mui/material"
import styles from './FaqSection.module.css'
import FaqAccordion from "./Accordion/FaqAccordion"

const faqlist = [
    {
        id: 1,
        summary: 'Do I need a personal injury report?',
        details: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.'
    },
    {
        id: 2,
        summary: 'How much is my case worth?',
        details: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.'
    },
    {
        id: 3,
        summary: 'What should I do right after car accidect',
        details: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.'
    },
    {
        id: 4,
        summary: 'How much is my case worth?',
        details: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.'
    }
]

const FaqSection = () => {
    return (
        <div className={styles.faqWrapper}>
            <Container maxWidth="lg">
                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 20 }}>
                    <Box sx={{ width: '800px' }}>
                        <Typography variant="h3" mb="20px" textTransform={"uppercase"}>
                            FAQ
                        </Typography>
                        <Typography variant="subtitle1" color="text.subtitle">
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint.
                        </Typography>
                    </Box>
                    <Box>
                        {
                            faqlist.map((item) => {
                                return (
                                    <div className={styles.accordionWrapper} key={item.key}>
                                        <FaqAccordion data={item} />
                                    </div>
                                )
                            })
                        }
                    </Box>
                </Box>
            </Container>
        </div>
    )
}

export default FaqSection