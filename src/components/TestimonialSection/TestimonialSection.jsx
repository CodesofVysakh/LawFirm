import TestimonialCard from './TestimonialCard/TestimonialCard'
import Carousel from '../Carousel/Carousel'
import styles from './TestimonialSection.module.css'
import devonLane from '../../assets/clients/devonLane.png';
import janeCooper from '../../assets/clients/janeCooper.png';
import robertFox from '../../assets/clients/robertFox.png';
import { Container } from '@mui/material';
const clients = [
    {
        id: 1,
        title: 'Jane Cooper',
        subtitle: 'Ceo of Hunt',
        testimony: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia`,
        avatar: janeCooper
    },
    {
        id: 2,
        title: 'Devon Lane',
        subtitle: 'Ceo of Hunt',
        testimony: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia',
        avatar: devonLane
    },
    {
        id: 3,
        title: 'Robert Fox',
        subtitle: 'Ceo of Hunt',
        testimony: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia',
        avatar: robertFox
    },
    {
        id: 4,
        title: 'Devon Lane',
        subtitle: 'Ceo of Hunt',
        testimony: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia',
        avatar: devonLane
    }
]


const TestimonialSection = () => {
    return (
        <div className={styles.testimonialSection}>
            <Container maxWidth="lg">
                <Carousel
                    data={clients}
                    componentRender={(ele) => <TestimonialCard data={ele} />}
                />
            </Container>
        </div>
    )
}

export default TestimonialSection