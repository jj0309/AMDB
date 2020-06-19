const express = require('express');
const getApi = require('./Utils/fetch');
const jwt = require('jwt-simple');
const app = express();

const JWT_SECRET = 'RziB2$0309$13';

const port = 80;

const TmdbApiKey = '89f8b08c2cfc4c749262f44b826e2f22';
const omdbKey = '9442c777';

app.get('/api/login/guest',(req,res)=>{
    const guestUserPayload={
        username:'guest',
        permission:'guest'
    }
    const token = jwt.encode(guestUserPayload,JWT_SECRET);
    res.send({token:token});
})


app.get('/api/searchByName/:name',async(req,res)=>{
    const movieName = req.params.name;
    const fetchURL = 'http://www.omdbapi.com/?apikey='+omdbKey+'&t='+movieName;
    const returnedData = await getApi.fetchAPI(fetchURL);
    res.send(returnedData);
})

app.get('/api/search/:filmID',async(req,res)=>{
    const movieID = req.params.filmID;
    let fetchURL = 'https://api.themoviedb.org/3/movie/'+movieID+'?api_key='+TmdbApiKey+'&language=en-US'
    const imdbID = await getApi.fetchAPI(fetchURL);
    fetchURL = 'http://www.omdbapi.com/?apikey='+omdbKey+'&i='+imdbID['datas']['imdb_id'];
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