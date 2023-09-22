import React from 'react'
import { Container, Typography, Paper, Grid, Box } from "@mui/material"

const About = () => {
  return (
    <Container maxWidth="lg">
      <Paper variant="outlined" sx={{ p: {xs: 2, sm: 3} }}>
        <Typography variant="h5" align="center" sx={{ fontWeight: "bold"}} gutterBottom>
          自己紹介
        </Typography>
        <Grid container 
          alignItems="flex-start" 
          justifyContent="center" 
          direction="row"
          >
          <Grid item sx={{ pt: {xs: 0, sm: 3} }}>
            <Box
              component="img"
              sx={{
                height: "auto",
                width: 200, 
                display: { xs: "none", sm: "block" }
              }}
              alt="icon"
              src="https://github.com/MokonaSato/portfolio/blob/main/public/static/images/icon.png?raw=true"/>
          </Grid>
          <Grid item sx={{ p: {xs: 0, sm: 3} }}>
            <Typography variant="h5" gutterBottom>
              佐藤もこ奈
            </Typography>
            <Typography variant="body1">
              出身：神奈川県横浜市
            </Typography>
            <Typography variant="body1" gutterBottom>
              趣味：音楽、ゲーム、プログラミング
            </Typography>
            <Typography variant="body1">
              大学では独学でPythonやbashを習得し、バイオインフォマティクス系の研究をしていました。
            </Typography>
            <Typography variant="body1">
              プログラミングを始めとした技術が好きで、エンジニアになりました。
            </Typography>
            <Typography variant="body1">
              休日も気ままに開発しています。
            </Typography>
            <Typography variant="body1" sx={{ mb:3 }}>
              どうぞよろしくお願いします。
            </Typography>
            <Typography>
              Twitter: <a href="https://twitter.com/MokonaSato">@MokonaSato</a>
            </Typography>
            <Typography>
              Github: <a href="https://github.com/MokonaSato">MokonaSato</a>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

export default About