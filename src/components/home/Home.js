import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
    root: {
      width: '100%',
      height: '100%',
      backgroundImage: 'url("https://files.tripstodiscover.com/files/2017/09/TPC-Sawgrass-Ponte-Vedra.jpg")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      textAlign: 'center',
      justifyContent: 'center',
      opacity: 0.8
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

  const Home = () => {

    const classes = useStyles();

 
        return (
            <React.Fragment>
            <CssBaseline />
            <Container style={{width: '100%', height: '100%'}} >
              <Card className={classes.root} variant="outlined" >
              <CardContent>
                <Typography variant="h2" component="h2">
                    Welcome
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    
                </Typography>
                <Typography variant="h4" component="h2">
                    This is Caddy App. An application to add and view some of your
                    favorite PGA proffesionals.
                </Typography>
              </CardContent>
            </Card>
            </Container>
            </React.Fragment>
        )
    }

export default Home
