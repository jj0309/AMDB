const fetch = require('node-fetch');
const fetchAPI=async(url)=>{
    let returnedData = {};
    await fetch(url)
    .then(response=>response.json())
    .then(data=>{
        returnedData['datas']=data;
        returnedData['fetched']=true;
    })
    .catch(error=>console.log('fetch error returned: ',error));
    return returnedData;
}

exports.fetchAPI = fetchAPI;