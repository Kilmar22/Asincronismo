//importar axios
const axios = require('axios').default;
//Campos modificados
const data={
    title: 'Prueba modificada',
    genre: 'prueba',
    author:'prueba',
    publisher: 'prueba',
    year: 2020,
    cover: 'prueba',
    id: 55, //Importante agregar el id del registro a modificar
};

const putRequest = async()=>{
    try{
        const resp= await axios.put('http://localhost:8000/api/book', data);
        console.log(resp.data);
    }catch(err){
        console.error(err);
    }
}
putRequest();