require('dotenv').config();
const axios = require('axios'); 

const controlLight = async(lightID,on)=>{
    try{
        return await axios.put(
            `http://${process.env.HUE_BRIGE_IP}/api/${process.env.HUE_USERNAME}/lights/${lightID}/state`,
            {on});       
        }catch(err){
            console.error(error)
        }
}

controlLight(6,false);