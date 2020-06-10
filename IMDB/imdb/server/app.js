const express = require('express');
const getApi = require('./Utils/fetch');
const app = express();

const port = 80;

const omdbApiReqUrl = 'http://www.omdbapi.com/?t=';
const apiKey = '&plot=full&apikey=9442c777';

const TmdbApiKey = '89f8b08c2cfc4c749262f44b826e2f22';

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
    const returnedData = await getApi.fetchAPI(fetchURL);
    res.send(returnedData);
})

app.get('/api/discover',async(req,res)=>{
    const fetchURL = 'https://api.themoviedb.org/3/genre/movie/list?api_key='+TmdbApiKey+'&language=en-US';
    const returnedData = await getApi.fetchAPI(fetchURL);
    res.send(returnedData);
})

app.get('/api/discover/:genreID/:page',async(req,res)=>{
    const genreID = req.params.genreID;
    const page = req.params.page;
    const fetchURL = 'https://api.themoviedb.org/3/discover/movie?api_key='+TmdbApiKey+'&language=en-US&with_genres='+genreID+'&page='+page;
    const returnedData = await getApi.fetchAPI(fetchURL);
    res.send(returnedData);
})

app.get('/*',(req,res)=>{
    res.send({invalidReq:true});
})

app.listen(port,()=>{
    console.log('server running on port '+port+'.');
})