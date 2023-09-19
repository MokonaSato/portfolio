import React from 'react'
import { Card, CardContent, Typography, CardActions, Button, CardMedia, Grid } from "@mui/material"

const Cards = ({ work }) => {
  return (
    <Card sx={{ display: "flex", mb: 3, boxShadow: 3 }}>
      <CardMedia 
        component="img" 
        image={"https://github.com/MokonaSato/portfolio/blob/main/public/static/images/"+work.image+"?raw=true"}
        alt="twitter-dm"
        sx={{ width: 300, display: { xs: "none", sm: "block" } }} />
      <CardContent sx={{ flex: 1 }}>
        <Grid container sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
          <Grid item >
            <Typography sx={{ mb: 1 }} color="text.secondary">
              {work.date}
            </Typography>
            <Typography variant="h5" component="div">
              {work.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {work.tech}
            </Typography>
            <Typography paragraph>
              {work.postsText}
            </Typography>
          </Grid>
          <Grid item>
            <CardActions>
              {work.github!=="" && <Button size="small"><a href={work.github} target="_blank" rel="noopener noreferrer">Github</a></Button>}
              {work.qiita!=="" && <Button size="small"><a href={work.qiita} target="_blank" rel="noopener noreferrer">Qiita</a></Button>}
            </CardActions>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Cards
