const express = require('express');
const fetch = require('node-fetch');

const app = express();

const port = 80;

const omdbApiReqUrl = 'http://www.omdbapi.com/?t=';
const apiKey = '&plot=full&apikey=9442c777';

app.get('/',(req,res)=>{
    res.send({});
})
app.get('/api',(req,res)=>{
    let newObj = {
        main:'main endpoint obj value'
    };
    res.send(newObj);
})

app.get('/api/search/:filmName',async(req,res)=>{
    const movieTitle = req.params.filmName;
    const fetchURL = omdbApiReqUrl+movieTitle+apiKey;
    let returnedData={}
    await fetch(fetchURL)
    .then(response=>response.json())
    .then(data=>{
        returnedData['datas']=data;
        returnedData['fetched']=true;
    })
    .catch(error=>console.log('fetch error returned: ',error));
    res.send(returnedData);
})

app.get('/*',(req,res)=>{
    res.send({invalidReq:true});
})

app.listen(port,()=>{
    console.log('server running on port '+port+'.');
})