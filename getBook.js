//importar axios
const axios = require('axios').default;

// metodo get 
axios.get('http://localhost:8000/api/books')
    .then(resp=>{
        console.log(resp.data);//mostrar data
    })
    .catch(err =>{
        console.error(err); //mostrar error
    })