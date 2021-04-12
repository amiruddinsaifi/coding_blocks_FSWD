var input = document.querySelector('.input_text');
var button= document.querySelector('.submit');
let cityName= document.getElementById(cityname)
let countryCode=document.getElementById(countrycode)
let Dt=document.getElementById(DT)
let Temp=document.getElementById(temp)
let Visibility=document.getElementById(visibility)
let tempMin=document.getElementById(temp_min)
let tempMax=document.getElementById(temp_max)

button.addEventListener('click', function(cityName){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=f2e0c415b3cd556429c5df9dc563e9f3')
.then(response => response.json())
.then(data => {
    console.log(data);
    const cityName=data.name;
    const countryCode= data.sys.country;
    d = new Date()
    localTime = d.getTime()
    localOffset = d.getTimezoneOffset() * 60000
    utc = localTime + localOffset
    var atlanta = utc + (1000 * -14400)
    nd = new Date(atlanta)
     
    const Temp=parseInt(data.main.temp-277)+"°C";
    const Visibility=data.weather[0].main;
    const tempMin=parseInt(data.main.temp_min-277)+"°C";
    const tempMax=parseInt(data.main.temp_max-277)+"°C";


    cityname.innerHTML=cityName +",";
    countrycode.innerHTML=countryCode;
    DT.innerHTML=nd;
    temp.innerHTML=Temp;
    visibility.innerHTML=Visibility;
    temp_min.innerHTML=tempMin +"/";
    temp_max.innerHTML=tempMax;
    input.value=""; 


    // console.log(data.name);
    // console.log(data.main.temp);
    // console.log(data.main.temp_min)
    // console.log(data.main.temp_max)
    // console.log(data.sys.country)
    // console.log(data.visibility)
    // console.log(data.weather[0].main)

})



.catch(err => alert("Wrong city name!"));
})