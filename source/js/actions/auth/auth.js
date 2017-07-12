import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Auth {

  static loggedIn() {
    let authToken = cookies.get('authToken');
    return authToken && authToken.token;
  }

  static logOut() {
    cookies.remove('authToken', { path: '/' });
  }
}

export default Auth;