//importar axios
const axios = require('axios').default;

const deleteRequest = async()=>{
    try{                    //al final se agrega el id del registro a eliminar
        const resp= await axios.delete('http://localhost:8000/api/book/55'); 
        console.log(resp.data);
    }catch(err){
        console.error(err);
    }
}

deleteRequest();