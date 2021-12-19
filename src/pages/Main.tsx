import { Home } from './Home'
import { Route, Switch } from 'react-router'
import { useEffect } from 'react'
import { ApplicationState } from '../store/reducers'
import { useDispatch, useSelector } from 'react-redux'
import { tryLogin } from '../store/actions/loginActions'
import { ConnectedRouter } from 'connected-react-router'
import { history } from '../store/store'
import { Hello } from './Hello'
import NoMatch from '../components/NoMatch'
import { Login } from './Login'
import { createTheme, ThemeProvider } from '@material-ui/core/styles' 
import { Typography } from '@material-ui/core'

export const smlrTheme = createTheme({
  typography: {
    
  },
  overrides: {
   
    MuiFormControlLabel: {
       
    },
    MuiButton: {
      containedPrimary: {
        
        backgroundColor: '#00acc1',
        '&:hover': {
          backgroundColor: '#00abb1',
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: '#00abb1',
          },
        },
      },
    },
    MuiInputBase: {
   
    },
    
  }
});

const PageDashboard = () => <Typography variant="h3" component="h1">Dashboard Page</Typography>
const PageOrders = () => <Typography variant="h3" component="h1">Orders Page</Typography>
const PageCustomers = () => <Typography variant="h3" component="h1">Customers Page</Typography>
const PageReports = () => <Typography variant="h3" component="h1">Reports Page</Typography>



export const Main = () => {
  const userName = useSelector(
    (state: ApplicationState) => state.login.userName
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(tryLogin())
  }, [dispatch])

  if (userName === 'Vlada ') {
    // history.push('/about')
  }



  return (
    <>
      <ThemeProvider theme={smlrTheme}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/about" component={About} />
          <Route exact path="/hello" component={Hello} />
        </Switch>
      </ConnectedRouter>
      </ThemeProvider>
    </>
  )
}

function About() {
  return <h2>About</h2>
}
