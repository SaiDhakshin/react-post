import logo from './logo.svg';
import './App.css';
import memories from './images/memories.jpg';
import Posts from './components/Posts/posts';
import Form from './components/Form/Form';
import useStyles from './styles';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {getPosts} from './actions/posts';

import {Container , AppBar , Typography , Grow , Grid} from '@material-ui/core';

function App() {
  const classes = useStyles();
  
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPosts());
  },[dispatch])
  return (
    <Container maxwidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'>
          Memories
        </Typography>
        <img className={classes.image} src={memories} alt='memories' height='60'></img>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form/>
              </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
