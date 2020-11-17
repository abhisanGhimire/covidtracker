const axios = require('axios');
export const getData = async () => {

    let data = axios(`https://api.covid19india.org/v4/data.json`);
    let awaiteddata = await data;
    let finalobj = await awaiteddata;
    let finalobjdata = finalobj.data; //array of all the states
    console.log(finalobjdata["AP"]["districts"]);// district data

    let show = Object.entries(finalobj); //statelist and their values
    let keyarray = Object.keys(show[0][1]); //state list
    let keyValue = Object.values(show[0][1])
    console.log(keyValue);
    return [keyarray, finalobj]; // list of all the states
}

