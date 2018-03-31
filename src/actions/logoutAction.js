import axios from 'axios';
import saveCurrentUser from '../actions/saveCurrentUser';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import apiUrl from "../config"
const logoutAction = () => dispatch =>
  axios.post(`${apiUrl}/api/auth/logout`).then(() => {
    localStorage.removeItem('jwtTokenBTCGrinders');
    setAuthorizationToken(false);
    dispatch(saveCurrentUser({}));
  });

export default logoutAction;
