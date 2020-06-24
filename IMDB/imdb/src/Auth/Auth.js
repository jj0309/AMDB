const tokenAuth = require('./ValidateToken');

class Auth{
    Constructor(){
        this.autenticated = false;
    }

    async verifyAuth(){
        this.autenticated = await tokenAuth.validateSession();
    }

    isAuthenticated(){
        this.verifyAuth();
        return this.autenticated;
    }
}

export default new Auth();