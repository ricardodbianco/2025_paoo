const axios = require('axios')

const protocol = 'https'
const baseUrl = 'api.openweathermap.org/data/2.5/forecast'
const appid = '23d67128329d0ba67ca239334e62ca77'
const q = 'Itu' //querry
const units = 'metric'
const lang = 'pt_br'
const cnt = 2 // cnt = count

const url = `${protocol}://${baseUrl}?appid=${appid}&q=${q}&units=${units}&lang=${lang}&cnt=${cnt}`


axios.get(url)
.then(function(res){
    console.log(res) // . ou [] são operadores de acesso a membro
    console.log('+++++++++++++++++++++++++++++++')
    return res.data
})
.then((res) => {
    console.log(res)
    console.log('+++++++++++++++++++++++++++++++')
    return res
})
.then((res) => {
    console.log(`cnt: ${res.cnt}`)
    console.log('+++++++++++++++++++++++++++++++')
    return res
})
.then((res) => {
    console.log(`Temp max do primeiro dia: ${res.list[0].main.temp_max}`)
})
.catch((err) => {console.log(`Erro: ${err}`)})