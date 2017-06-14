import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Auth {

  static loggedIn() {
    const authToken = cookies.get('authToken');
    return !!authToken && authToken.token;
  }

  static logOut() {
    cookies.remove('authToken');
  }
}

export default Auth;