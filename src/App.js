import React, { useEffect, useState } from "react";
import {AppBar, Toolbar, Typography, Box } from "@mui/material";
import { db } from './firebase'
import { collection, getDocs } from "firebase/firestore"
import CenteredTabs from "./components/CenteredTabs/CenteredTabs"
import Home from './components/homepage/Home';
import About from './components/about/About';
import Works from './components/works/Works';

const App = (props) => {
  const [works, setWorks] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "works"))
      setWorks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getPosts()
    }, [])
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: 'primary.main' }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: "bold" }}>
              MOKONA SATO
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    <CenteredTabs labels={['HOME', 'ABOUT', 'WORKS']} >
      <Home works={works}/>
      <About />
      <Works works={works}/>
    </CenteredTabs>
  </>
  );
}

export default App;
