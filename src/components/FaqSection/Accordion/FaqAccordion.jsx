import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import styles from "./FaqAccordion.module.css";

export default function FaqAccordion({ data }) {
    return (
        <div className={styles.accordionWrapper} key={data.id}>
            <Accordion>
                <AccordionSummary
                    className={styles.accordionSummary}
                    expandIcon={<AddIcon className={styles.addIcon} />}
                    id="panel1a-header"
                >
                    <Typography>{data.summary}</Typography>
                </AccordionSummary>
                <AccordionDetails className={styles.accordionDetails}>
                    <Typography>{data.details}</Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
