const axios = require('axios');
const jsCookie = require('js-cookie');

const validateSession=async()=>{
    const tokenvalue = jsCookie.get('sessionToken');
    const response = await axios.post('/api/verifyToken',
        {
            token:tokenvalue
        }
    )
    return response.data.tokenValidation;
}

exports.validateSession = validateSession;