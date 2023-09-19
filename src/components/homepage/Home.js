import React from 'react'
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Paper } from "@mui/material"
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const Home = ({ works }) => {
  const theme = useTheme()
  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'))
  
  return (
    <Box sx={{pt: {xs: 3, sm: 6}, pb: 6 }}>
      <Container maxWidth="md">
        <Paper variant="outlined" sx={{ p: 3 }}>
          <Typography variant="h5" align="center" color="text.primary" 
          gutterBottom sx={{ fontWeight: "bold"}}>
            こんにちは、{isSmScreen && <br />}佐藤もこ奈です。
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary">
            インターネットに生息する、{isSmScreen && <br />}しがないプログラマです。
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary">
            今までに作ったアプリを{isSmScreen && <br />}公開しています。
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary">
            よかったら見ていってください。
          </Typography>
        </Paper>
    </Container>
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {works.map((work) => {
          return (
            <Grid item key={work.id} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
              <CardMedia component="div" sx={{ pt: '56.25%' }} image={"https://github.com/MokonaSato/portfolio/blob/main/public/static/images/"+work.image+"?raw=true"} />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="h2">
                  {work.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          )
        })}
      </Grid>
    </Container>
    </Box>
  )
}

export default Home
