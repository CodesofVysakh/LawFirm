import { Container, Grid, Typography } from "@mui/material"

import styles from './OurTeamSection.module.css'

import cesforila from '../../assets/teams/cesforila.png'
import colleen from '../../assets/teams/colleen.png'
import danialDef from '../../assets/teams/danialDef.png'
import haldone from '../../assets/teams/haldone.png'
import nikJeo from '../../assets/teams/nikJeo.png'
import sanfole from '../../assets/teams/sanfole.png'
import OurTeamCard from "./OurTeamCard/OurTeamCard"

const teams = [
    {
        id: 1,
        name: "Danial Def",
        cases: 301,
        avatar: danialDef
    },
    {
        id: 2,
        name: "Sanfole ",
        cases: 850,
        avatar: sanfole
    },
    {
        id: 3,
        name: "Cesforila",
        cases: 470,
        avatar: cesforila
    },
    {
        id: 4,
        name: "Colleen",
        cases: 180,
        avatar: colleen
    },
    {
        id: 5,
        name: "Haldone",
        cases: 212,
        avatar: haldone
    },
    {
        id: 6,
        name: "Nik Jeo ",
        cases: 350,
        avatar: nikJeo
    }
]



const OurTeamSection = () => {
    return (
        <div className={styles.ourTeamSectionWrapper}>
            <Container maxWidth="lg">
                <Typography variant="h3" textAlign="center" mb="100px">
                    Our Team
                </Typography>
                <Grid container>
                    {
                        teams.map((item) => {
                            return (
                                <Grid key={item.id} item lg={4}>
                                    <OurTeamCard data={item}/>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Container>
        </div>
    )
}

export default OurTeamSection