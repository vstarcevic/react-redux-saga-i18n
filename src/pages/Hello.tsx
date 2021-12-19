import { useEffect } from 'react';
import { ApplicationState } from '../store/reducers'
import { useDispatch, useSelector } from 'react-redux'
import { setUserName, tryLogin } from '../store/actions/loginActions';
import i18n from '../utils/i18n/i18n';
import { Button, IconButton, makeStyles } from '@material-ui/core';


export const Hello = () => {
  const userName = useSelector((state: ApplicationState) => state.login.userName)
  const dispatch = useDispatch();
  
  useEffect(() => {
      dispatch(tryLogin())
    },[dispatch]
  );
  if (userName === 'Vlada ') {
    // history.push('/about')
  }


  return <>
  <div>{userName} car
    <br></br>
   
    <Button variant="outlined">This is HELLO page</Button>
    <div>
       HELLO PAGE
    </div>
</div>
</>
}
 
