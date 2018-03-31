import jwt from 'jsonwebtoken';
import setAuthorizationToken from './setAuthorizationToken';
import saveCurrentUser from '../actions/saveCurrentUser';

const processLogin = (token, dispatch) => {
  localStorage.setItem('jwtTokenBTCGrinders', token); //
  jwt.verify(token, "idontgiveadamn", (err, decoded) => {
    if (decoded) {
      setAuthorizationToken(token);
      dispatch(saveCurrentUser(decoded));
    } else {
      setAuthorizationToken(null);
    }
  });
};

export default processLogin;
