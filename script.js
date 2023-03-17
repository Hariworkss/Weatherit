let weather={
    apiKey:"edc6005a871509fd81f191a825494f6c",
    fetchWeather: function (city){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`)
        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data))
    },
    displayWeather: function (data) {
        const {name}=data;
        const {temp,humidity}=((data.main));
        const {icon,description}=data.weather[0];
        const {speed}=data.wind;
        console.log(name,temp,humidity,icon,description,speed)

        document.getElementById('city').innerText=`Weather in ${name}`
        document.getElementById('temp').innerText=`Temperature :${Math.floor(temp/10) }°`
        document.getElementById('humidity').innerText=`Humidity : ${humidity}%`
        document.getElementById('icon').src=`http://openweathermap.org/img/wn/${icon}.png`
        document.querySelector('.description').innerText=`${description}`
        document.getElementById('wind1').innerText=`Wind speed: ${speed} Km/h`

    },
    search: function() {                                                            // instead starting line...look down
        this.fetchWeather(document.getElementById('search').value)
    }
    
}

document.querySelector(".searchbtn").addEventListener("click", function(){
    weather.search();
})
document.getElementById('search').addEventListener('keyup',function(event){
    if(event.key=='Enter'){
        weather.search();
    }
})



// function search(){                                                   this funtion can be used instead of search key in weather & event listener
//     cityname=document.getElementById('search').value
//     weather.fetchWeather(cityname);
// }