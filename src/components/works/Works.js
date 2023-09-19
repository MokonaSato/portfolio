import React from 'react'
import { Container, Grid, Typography } from "@mui/material"
import Cards from "./Cards"

const Works = ({ works }) => {
  return (
    <Container maxWidth="lg">
      <Grid container alignItems="center" justifyContent="space-between" direction="column">
        <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
          制作物一覧
        </Typography>
        {works.map((work) => {
          return <Cards key={work.id} work={work}/>
        })}
      </Grid>
    </Container>
  )
}

export default Works