import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const authToken = cookies.get('authToken');

export function hasToken() {
    return authToken && authToken.token;
}

export function tokenLikelyExpired() {
    if (authToken && authToken.token_start) {
        const timeDiff = Math.round((Date.now() - authToken.token_start) / 1000);
        return timeDiff >= 900;
    }
    return true;
}
