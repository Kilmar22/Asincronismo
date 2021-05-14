//importar axios
const axios = require('axios').default;

// metodo get 
axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(resp=>{
        console.log(resp.data); //mostrar data
    })
    .catch(err =>{
        console.error(err); //mostrar error
    })