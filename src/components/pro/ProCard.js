import React from 'react'
import Club from '../clubs/Club'
import { Link } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
    root: {
      minWidth: 400,
      backgroundImage: 'url("https://cdn.pixabay.com/photo/2015/02/21/18/19/sunset-over-the-golf-course-644477_1280.jpg")',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      textAlign: 'center',
      justifyContent: 'center',
      opacity: 0.97,
      margin: 40
    },
    title: {
      fontSize: 20,
    },
    pos: {
      marginBottom: 12,
    },
  });




const ProCard = (props) => {
    const classes = useStyles();
  
    
  return (
      
    <React.Fragment>
    <CssBaseline />
    <br></br>
    <Container maxWidth="sm">
      <Card className={classes.root} variant="outlined">
      <CardContent style={{
         
      }}>
        <Typography variant="h3" component="h2">
            {props.pro.first_name} {props.pro.last_name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
            Home State: {props.pro.home_state}
            <br></br>
            Home Town: {props.pro.hometown}
            <br></br>
            Age: {props.pro.age}
        </Typography>
        <Typography variant="h4" component="h2">
            Clubs
        </Typography>
        <Typography variant="h6" component="h2">
            <Club clubs={props.pro.clubs}/>
        </Typography>
      </CardContent>
      <Button variant="contained" color="primary" >
       <Link to={`pro/${props.pro.id}/club/new`}>Add CLub</Link>
      </Button>
    </Card>
    </Container>
    </React.Fragment>
  )
}

export default ProCard

