window.addEventListener('load', ()=> {
  let long;
  let lat;
  let temperatureDescription = document.querySelector('.temperature-description');
  let temperatureDegree = document.querySelector('.temperature-degree');
  let locationTimeZone = document.querySelector('.location-timezone');
  let iconPath = document.getElementById('icon');

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position =>{
      long = 40.730610;
      lat = -73.935242;
      const api = `http://api.openweathermap.org/data/2.5/forecast/?zip=10001,us&appid=8ccbdbc8d6be1e7d3fe620bb09846757&units=imperial`;

      fetch(api)
          .then(response => {
            return response.json();
          })
          .then(data => {
            console.log(data);
            var { temp_min } = data.list[0].main;
            const { description } = data.list[0].weather[0];
            const { icon } =  data.list[0].weather[0]



            //set DOM elements from the api
            temperatureDegree.innerHTML =  temp_min+"&deg;";
            temperatureDescription.innerHTML =  description;
            locationTimeZone.innerHTML = data.city.name;
        //    iconPath.innerHTML =  "http://openweathermap.org/img/wn/"+icon+".png";
          });
    });
  }

  function setIcons(icon, iconId) {

  }
})
