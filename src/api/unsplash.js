import axios from 'axios' ;
export default axios.create({
    baseURL :'https://api.unsplash.com' ,
    headers:{
    Authorization :
    'Client-ID b5d2923804f266526c85026f5c97e17fa896d83fd137e32b95518b9a9c937831'
    }
});