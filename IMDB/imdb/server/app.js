const express = require('express');
const getApi = require('./Utils/fetch');
const jwt = require('jsonwebtoken');
const app = express();

const JWT_SECRET = 'RziB2$0309$13';
/* const JWT_REFRESH_SECRET = 'TT0903$514$jj'; */

const port = 80;

const TmdbApiKey = '89f8b08c2cfc4c749262f44b826e2f22';
const omdbKey = '9442c777';

app.use(express.json());

app.get('/api/login/guest',(req,res)=>{
    const guestUserPayload={
        username:'guest',
        permission:'guest'
    }
    const token = createToken(guestUserPayload,1800);
    res.send({token:token});
})

const createToken=(user,tokenTime)=>{
    const token = jwt.sign(user,JWT_SECRET,{expiresIn:tokenTime});
    return token;
}


app.post('/api/verifyToken',(req,res)=>{
    const token = req.body.token;
    const returnPayload = {tokenValidation:false}
    try{
        const decoded = jwt.verify(token,JWT_SECRET);
        returnPayload['decodedToken'] = decoded;
    }catch(error){
        return res.send(returnPayload);
    }
    returnPayload['tokenValidation'] = true;
    return res.send(returnPayload);
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

app.post('/api/getfavorites',async(req,res)=>{
    const user = req.body.user;
    guestFavList = [299536,157336,27205,429617,299534,420818,330457];
    let movieID = 0;
    let returnedLs = [];
    if(user === 'guest'){
        await Promise.all(guestFavList.map(async(movie)=>{
            movieID = movie;
            let fetchURL = 'https://api.themoviedb.org/3/movie/'+movieID+'?api_key='+TmdbApiKey+'&language=en-US';
            const fetchedData = await getApi.fetchAPI(fetchURL);
            returnedLs.push(fetchedData);
        }));
    }
    res.send(returnedLs);
})

app.post('/api/getwatchlater',async(req,res)=>{
    const user = req.body.user;
    guestWatchLaterList = [8392,129,4935,81,128,10515,16859];
    let movieID = 0;
    let returnedLs = [];
    if(user === 'guest'){
        await Promise.all(guestWatchLaterList.map(async(movie)=>{
            movieID = movie;
            let fetchURL = 'https://api.themoviedb.org/3/movie/'+movieID+'?api_key='+TmdbApiKey+'&language=en-US';
            const fetchedData = await getApi.fetchAPI(fetchURL);
            returnedLs.push(fetchedData);
        }));
    }
    res.send(returnedLs);
})

app.get('/*',(req,res)=>{
    res.send(res.status(404));
})

app.listen(port,()=>{
    console.log('server running on port '+port+'.');
})