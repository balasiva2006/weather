let city = document.querySelector("input");
let longitude = 82.2351;
let latitude = 16.9437;
let weather = document.querySelector("#weather");
let img = document.querySelector("img")
let city_name = document.querySelector("#city");
let temp = document.querySelector("#temp");
let hum = document.querySelector("#hum");
let wind = document.querySelector("#wind");
let btn = document.querySelector('button');

async function weatherreport(city) {
    url1= "https://api.openweathermap.org/geo/1.0/direct?q="+city+"&limit=5&appid=7cdef9993291d7eab0c17e59aee5ddc8"
    const geodata = await fetch(url1);
    const data =  await geodata.json()
    let latitude = data[0].lat;
    let longitude = data[0].lon;
    url2= "https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid=7cdef9993291d7eab0c17e59aee5ddc8";
    const weatherdata= await fetch(url2);
    const data1= await weatherdata.json();
    console.log(data1)
    let weatherdat = data1.weather[0].main;
    let weathericon = data1.weather[0].icon;
    let temperature = (data1.main.temp -273.15).toFixed(2);
    let humidity = data1.main.humidity;
    let windspeed = data1.wind.speed;
    weather.innerHTML = weatherdat+'('+data1.weather[0].description+')';
    city_name.innerHTML=city;
    temp.innerHTML= temperature + " C";
    hum.innerHTML= humidity+'%';
    wind.innerHTML=windspeed+' m/s';
    imageurl = "https://openweathermap.org/img/wn/"+weathericon+"@2x.png"
    img.src=imageurl;
}
weatherreport("kakinada");
btn.addEventListener("click",()=>
{
    let sname = city.value;
    weatherreport(sname);
});
