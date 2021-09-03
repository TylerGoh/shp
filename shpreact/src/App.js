import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import {Button, AppBar, Toolbar, IconButton, Typography, Grid} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import background from "./background.jpg"
import { useState, useEffect } from 'react';

const useStyles = makeStyles((theme)=>({
  root:{
    flexGrow:1,
  }
  ,
  menuButton:{
    marginRight: theme.spacing(2),
  },
  title:{
    flexGrow: 1
  }
}));


function App() {
  const classes = useStyles();
  const [string, setString] = useState(0);
  const [lowerstring, setLowerString] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      var d = new Date();
      var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      console.log(d.getHours() + ":" + d.getMinutes() + ":"  + d.getSeconds())
      setLowerString(d.getHours().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + ":" + d.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + ":"  + d.getSeconds().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}))
      setString(dateOrdinal(d.getDay())+ " "+  months[d.getMonth()]+ " " + d.getFullYear())
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function dateOrdinal(dom) {
    if (dom == 31 || dom == 21 || dom == 1) return dom + "st";
    else if (dom == 22 || dom == 2) return dom + "nd";
    else if (dom == 23 || dom == 3) return dom + "rd";
    else return dom + "th";
};

  return (
    <div className={classes.root} style={{ 
      backgroundImage: `url(require("background.jpg"))`
    }}>
      <header className="App-header">
        <AppBar position="fixed" color="transparent" elevation={0}>
        <Toolbar varient = "dense">
          <IconButton edge="start" className={classes.menuButton}>
            <MenuIcon/>
          </IconButton>
        </Toolbar>
        </AppBar>
        <Grid container spacing={3}>
        <Grid item xs={6}>
        <h1 style={{textAlign:"center"}}>
          {string}
          
        </h1>
        <h1 style={{textAlign:"center",bottom:"35%"}}>
        {lowerstring }
        </h1>
        </Grid>
        <Grid item xs={6}>
        <h1 style={{textAlign:"center",bottom:"35%"}}>
          {string}
          
        </h1>
        <h1 style={{textAlign:"center"}}>
        {lowerstring }
        </h1>
        </Grid>
      </Grid>
      </header>
    </div>
  );
}

export default App;
