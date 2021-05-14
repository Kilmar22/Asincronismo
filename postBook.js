//importar axios
const axios = require('axios').default;
//campos de la API de libros
const data={
    title: 'Prueba',
    genre: 'prueba',
    author:'prueba',
    publisher: 'prueba',
    year: 2020,
    cover: 'prueba'
};

const postRequest = async()=>{
    try{
        const resp= await axios.post('http://localhost:8000/api/book', data);
        console.log(resp.data);
    }catch(err){
        console.error(err);
    }
}

postRequest();