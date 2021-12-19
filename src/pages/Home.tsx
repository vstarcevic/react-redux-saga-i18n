import { useEffect } from 'react';
import { ApplicationState } from '../store/reducers'
import { useDispatch, useSelector } from 'react-redux'
import { tryLogin } from '../store/actions/loginActions';
import { Button, CircularProgress, Container, CssBaseline, Drawer, makeStyles } from '@material-ui/core';
import AppMenu from '../components/AppMenuItem/AppMenu';
import { Route, Switch } from 'react-router';
import clsx from 'clsx'

 
 
export const Home = () => {
  const userName = useSelector((state: ApplicationState) => state.login.userName)
  const dispatch = useDispatch();
  
  useEffect(() => {
      dispatch(tryLogin())
    },[dispatch]
  );
 

  return <>
  <div>  <div className={clsx('App')}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          classes={{
            
          }}
        >
          <AppMenu />
        </Drawer>
        <main>
          <Container maxWidth="lg">
 

          </Container>
        </main>
      </div>
</div>
</>
}
 

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: 123,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    background: '#535454',
    color: '#fff',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}))
